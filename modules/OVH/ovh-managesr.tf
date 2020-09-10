resource "openstack_compute_instance_v2" "manager" {
  count             = var.OVH ? var.manager_instance_count : 0
  name              = "${terraform.workspace}-manager-${count.index}"
  image_name        = local.image
  flavor_name       = var.manager_instance_type
  security_groups   = [openstack_networking_secgroup_v2.manager_security_group.*.name[0]]
  key_pair          = var.key_name
  region            = var.region

  network {
    name = "Ext-Net"
    access_network = "true"
  }

  network {
    name = local.private_network_name
  }

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = self.access_ip_v4
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }
  
  provisioner "file" {
    source      = var.ssh_key
    destination = "~/.ssh/ssh.pem"
  }

  provisioner "remote-exec" {
    inline = [
      "mkdir ${local.tmp_dir}",
      "mkdir -p $HOME/.config/rclone"
    ]
  }

  provisioner "file" {
    source      = var.rclone_conf != "" ? var.rclone_conf : "scripts/null-files/rclone.conf"
    destination = "$HOME/.config/rclone/rclone.conf"
  }

  provisioner "file" {
    source      = var.docker_tls_ca_cert
    destination = "${local.tmp_dir}/ca.cert"
  }

  provisioner "file" {
    source      = var.docker_tls_ca_key
    destination = "${local.tmp_dir}/ca.key"
  }

  provisioner "file" {
    source      = var.docker_tls_ca_pass
    destination = "${local.tmp_dir}/ca.pass"
  }

  provisioner "file" {
    source      = "scripts/"
    destination = local.tmp_dir
  }

  provisioner "file" {
    source      = "modules/OVH/setup-private-ip.sh"
    destination = "${local.tmp_dir}/setup-private-ip.sh"
  }

  provisioner "file" {
    source      = "commands/"
    destination = local.tmp_dir
  }

  provisioner "remote-exec" {
    inline = [
      "sudo bash ${local.tmp_dir}/setup-prerequisites.sh ${data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]}",
      "sudo bash ${local.tmp_dir}/setup-private-ip.sh",
      "sudo bash ${local.tmp_dir}/setup-manager.sh ${var.docker_version} ${self.network.1.fixed_ip_v4} ${openstack_compute_instance_v2.manager.0.network.1.fixed_ip_v4}",
    ]
  }
}