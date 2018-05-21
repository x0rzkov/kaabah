resource "scaleway_ip" "swarm_manager" {
  count = "${var.scw_provider == "SCALEWAY" ? 1 : 0}"
}

resource "scaleway_server" "swarm_manager" {
  count          = "${var.scw_provider == "SCALEWAY" ? 1 : 0}"
  name           = "${terraform.workspace}-manager"
  image          = "${data.scaleway_image.manager_image.id}"
  type           = "${var.scw_manager_instance_type}"
  security_group = "${scaleway_security_group.swarm_manager.id}"
  public_ip      = "${scaleway_ip.swarm_manager.ip}"

  connection {
    type        = "ssh"
    user        = "${var.scw_ssh_user}"
    private_key = "${file(var.scw_ssh_key)}"
    timeout     = "30s"
  }

  provisioner "file" {
    source      = "scripts/"
    destination = "/tmp"
  }

  provisioner "remote-exec" {
    inline = [
      "sh /tmp/install-manager.sh ${var.scw_docker_version} ${self.private_ip}",
    ]
  }
}
