resource "scaleway_security_group" "swarm_manager" {
  name        = "${terraform.workspace}-manager"
  description = "Allow HTTP/S, SSH and Docker swarm traffic"
}

resource "scaleway_security_group_rule" "internal_in_accept_TCP_2375" {
  security_group = "${scaleway_security_group.swarm_manager.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "10.0.0.0/8"
  protocol       = "TCP"
  port           = "2375"
}

resource "scaleway_security_group_rule" "internal_in_accept_TCP_2377" {
  security_group = "${scaleway_security_group.swarm_manager.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "10.0.0.0/8"
  protocol       = "TCP"
  port           = "2377"
}

resource "scaleway_security_group_rule" "internal_in_accept_TCP_7946" {
  security_group = "${scaleway_security_group.swarm_manager.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "10.0.0.0/8"
  protocol       = "TCP"
  port           = "7946"
}

resource "scaleway_security_group_rule" "internal_in_accept_UDP_7946" {
  security_group = "${scaleway_security_group.swarm_manager.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "10.0.0.0/8"
  protocol       = "UDP"
  port           = "7946"
}

resource "scaleway_security_group_rule" "internal_in_accept_UDP_4789" {
  security_group = "${scaleway_security_group.swarm_manager.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "10.0.0.0/8"
  protocol       = "UDP"
  port           = "4789"
}

resource "scaleway_security_group_rule" "ssh_accept" {
  security_group = "${scaleway_security_group.swarm_manager.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "0.0.0.0/0"
  protocol       = "TCP"
  port           = 22
}

resource "scaleway_security_group_rule" "http_accept" {
  security_group = "${scaleway_security_group.swarm_manager.id}"

  action    = "accept"
  direction = "inbound"
  ip_range  = "0.0.0.0/0"
  protocol  = "TCP"
  port      = 80
}

resource "scaleway_security_group_rule" "https_accept" {
  security_group = "${scaleway_security_group.swarm_manager.id}"

  action    = "accept"
  direction = "inbound"
  ip_range  = "0.0.0.0/0"
  protocol  = "TCP"
  port      = 443
}

resource "scaleway_security_group" "swarm_workers" {
  name        = "${terraform.workspace}-workers"
  description = "Allow SSH traffic and Docker swarm traffic"
}

resource "scaleway_security_group_rule" "ssh_accept_workers" {
  security_group = "${scaleway_security_group.swarm_workers.id}"

  action    = "accept"
  direction = "inbound"
  ip_range  = "0.0.0.0/0"
  protocol  = "TCP"
  port      = 22
}

resource "scaleway_security_group_rule" "internal_in_accept_TCP_2377_workers" {
  security_group = "${scaleway_security_group.swarm_workers.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "10.0.0.0/8"
  protocol       = "TCP"
  port           = "2377"
}

resource "scaleway_security_group_rule" "internal_in_accept_TCP_7946_workers" {
  security_group = "${scaleway_security_group.swarm_workers.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "10.0.0.0/8"
  protocol       = "TCP"
  port           = "7946"
}

resource "scaleway_security_group_rule" "internal_in_accept_UDP_7946_workers" {
  security_group = "${scaleway_security_group.swarm_workers.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "10.0.0.0/8"
  protocol       = "UDP"
  port           = "7946"
}

resource "scaleway_security_group_rule" "internal_in_accept_UDP_4789_workers" {
  security_group = "${scaleway_security_group.swarm_workers.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "10.0.0.0/8"
  protocol       = "UDP"
  port           = "4789"
}
