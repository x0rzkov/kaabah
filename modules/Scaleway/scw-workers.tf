resource "scaleway_ip" "swarm_worker" {
  count = "${var.provider == "SCALEWAY" ? var.worker_instance_count : 0}"
}

resource "scaleway_server" "swarm_worker" {
  count          = "${var.provider == "SCALEWAY" ? var.worker_instance_count : 0}"
  name           = "${terraform.workspace}-worker-${count.index}"
  image          = "${data.scaleway_image.worker_image.id}"
  type           = "${var.worker_instance_type}"
  security_group = "${scaleway_security_group.swarm_workers.id}"
  public_ip      = "${element(scaleway_ip.swarm_worker.*.ip, count.index)}"

  volume {
    size_in_gb = "${lookup(var.additional_volume_size, var.worker_instance_type)}"
    type       = "l_ssd"
  }

  connection {
    type        = "ssh"
    user        = "${var.ssh_user}"
    private_key = "${file(var.ssh_key)}"
    timeout     = "120s"
  }

  provisioner "file" {
    source      = "${var.ssh_key}"
    destination = "~/.ssh/ssh.pem"
  }

  provisioner "file" {
    source      = "${var.docker_tls_ca_cert}"
    destination = "/tmp/ca.cert"
  }

  provisioner "file" {
    source      = "${var.docker_tls_ca_key}"
    destination = "/tmp/ca.key"
  }

  provisioner "file" {
    source      = "${var.docker_tls_ca_pass}"
    destination = "/tmp/ca.pass"
  }

  provisioner "file" {
    source      = "scripts/"
    destination = "/tmp"
  }

  provisioner "remote-exec" {
    inline = [
      "sh /tmp/install-worker.sh ${var.docker_version} ${scaleway_server.swarm_manager.private_ip}",
    ]
  }

  # leave swarm on destroy
  provisioner "remote-exec" {
    when = "destroy"

    inline = [
      "sh /tmp/remove-worker.sh",
    ]

    on_failure = "continue"
  }

  # Tell the manager to remove the node on destroy
  provisioner "remote-exec" {
    when = "destroy"

    inline = [
      "docker node rm --force ${self.name}",
    ]

    on_failure = "continue"

    connection {
      type = "ssh"
      user = "${var.ssh_user}"
      host = "${scaleway_server.swarm_manager.public_ip}"
    }
  }
}