(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{358:function(t,e,a){t.exports=a.p+"assets/img/kaabah-principle.86122ac7.svg"},359:function(t,e,a){t.exports=a.p+"assets/img/kaabah-terraform.99a18566.svg"},360:function(t,e,a){t.exports=a.p+"assets/img/kaabah-swarm.9d28a804.svg"},361:function(t,e,a){t.exports=a.p+"assets/img/bastion-architecture.26f462e8.svg"},383:function(t,e,a){"use strict";a.r(e);var r=a(27),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"understanding-kaabah"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#understanding-kaabah"}},[t._v("#")]),t._v(" Understanding Kaabah")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("Prerequisites")]),t._v(" "),r("p",[r("strong",[t._v("Kaabah")]),t._v(" relies on various technologies such as "),r("a",{attrs:{href:"https://www.terraform.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Terraform"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://docs.docker.com/engine/swarm/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Swarm"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://traefik.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Traefik"),r("OutboundLink")],1),t._v("... and we assume that you are enough familiar with them. If not, please take a while to discover them.")])]),t._v(" "),r("h2",{attrs:{id:"key-concepts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#key-concepts"}},[t._v("#")]),t._v(" Key concepts")]),t._v(" "),r("p",[r("strong",[t._v("Kaabah")]),t._v(" let you manipulate 4 kind of entities:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Workspace")]),t._v(": a collection of everything "),r("strong",[t._v("Kaabah")]),t._v(" needs to create and manage an infrastructure.")]),t._v(" "),r("li",[r("strong",[t._v("Configuration")]),t._v(": a set of Terraform variables used to define your infrastructure.")]),t._v(" "),r("li",[r("strong",[t._v("Cluster")]),t._v(": a "),r("a",{attrs:{href:"https://docs.docker.com/engine/swarm/key-concepts/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Swarm"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("li",[r("strong",[t._v("Service")]),t._v(": an application deployed on your "),r("strong",[t._v("Swarm")]),t._v(".")])]),t._v(" "),r("p",[t._v("The following image illustrates how these entities interact:")]),t._v(" "),r("p",[r("img",{attrs:{src:a(358),alt:"Kaabah principle"}})]),t._v(" "),r("p",[t._v("In addition "),r("strong",[t._v("Kaabah")]),t._v(" provides a set of commands that help you to operate the cluster. For instance, you can easily prune all the images on the different nodes, execute a command on a given node... See the "),r("a",{attrs:{href:"../reference/helper-commands"}},[t._v("reference")]),t._v(" page to have the complete list.")]),t._v(" "),r("h2",{attrs:{id:"workspace"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#workspace"}},[t._v("#")]),t._v(" Workspace")]),t._v(" "),r("p",[r("strong",[t._v("Kaabah")]),t._v(" is designed to take advantage of Terraform Workspaces. Indeed, "),r("strong",[t._v("Kaabah")]),t._v(" relies on the "),r("a",{attrs:{href:"https://www.terraform.io/docs/enterprise/guides/recommended-practices/part1.html#the-recommended-terraform-workspace-structure",target:"_blank",rel:"noopener noreferrer"}},[t._v("Terraform recommend practices"),r("OutboundLink")],1),t._v(" and assume a "),r("strong",[t._v("Workspace")]),t._v(" is used to store the required data needed to build and manage an infrastructure for a specific environment (staging, production...):")]),t._v(" "),r("ul",[r("li",[t._v("the configuration of the infrastructure.")]),t._v(" "),r("li",[t._v("the SSH private key to get connected to the infrastructure")]),t._v(" "),r("li",[t._v("the user scripts you want to be executed when creating the infrastructure")]),t._v(" "),r("li",[t._v("the Terraform states of the infrastructure.")])]),t._v(" "),r("p",[t._v("Starting from this premise, "),r("strong",[t._v("Kaabah")]),t._v(" lets you to manage as many clusters as your projects require. If we decide to name our workspaces with both the project name and its environment (i.e. dev, test...), we can sketch the following diagram to illustrate the overall functioning of "),r("strong",[t._v("Kaabah")]),t._v(":")]),t._v(" "),r("p",[r("img",{attrs:{src:a(359),alt:"Kaabah terraform"}})]),t._v(" "),r("p",[t._v("In this diagram, the states of the different workspaces are stored within a dedicated bucket on amazon S3, but you are free to use any other Terraform "),r("a",{attrs:{href:"https://www.terraform.io/docs/backends/",target:"_blank",rel:"noopener noreferrer"}},[t._v("backends"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),r("p",[t._v("The "),r("strong",[t._v("Kaabah")]),t._v(" configuration file is a "),r("strong",[t._v("Terraform")]),t._v(" variable file describing the characteristics of the desired infrastructure.")]),t._v(" "),r("p",[t._v("Here is an example of a configuration file:")]),t._v(" "),r("div",{staticClass:"language-ini extra-class"},[r("pre",{pre:!0,attrs:{class:"language-ini"}},[r("code",[r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("provider")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "AWS"')]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("manager_ip")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "3.115.176.41"')]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("manager_instance_type")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "t2.small"')]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("worker_instance_type")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "t3.large"')]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("worker_instance_count")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 3")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("worker_additional_volume_count")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 2")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("worker_additional_volume_size")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 500")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("worker_additional_volume_type")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "st1"')]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("worker_additional_volume_mount_point")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(' "DATA"')]),t._v("\n\n")])])]),r("p",[t._v("Assuming the current workspace is "),r("code",[t._v("app-dev")]),t._v(", then when applying such a configuration, "),r("strong",[t._v("Kaabah")]),t._v(" will generate a Docker Swarm infrastructure on "),r("code",[t._v("AWS")]),t._v(" ("),r("code",[t._v("provider")]),t._v(" variable) composed of:")]),t._v(" "),r("ul",[r("li",[t._v("one manager node, "),r("code",[t._v("app-dev-manager")]),t._v(", of type "),r("code",[t._v("t2.small")]),t._v(" with the public IP address "),r("code",[t._v("3.115.176.41")]),t._v(".")]),t._v(" "),r("li",[r("code",[t._v("3")]),t._v(" worker nodes, "),r("code",[t._v("app-dev-worker-0")]),t._v(", "),r("code",[t._v("app-dev-worker-1")]),t._v(" and "),r("code",[t._v("app-dev-worker-2")]),t._v(", of type of "),r("code",[t._v("t3.large")]),t._v(". To each worker is attached "),r("code",[t._v("2")]),t._v(" optimized hard-disk ("),r("code",[t._v("sc1")]),t._v(") of "),r("code",[t._v("500")]),t._v("GB and these volumes are accessible through the mount points: "),r("code",[t._v("/mnt/DATA0")]),t._v(" and "),r("code",[t._v("/mnt/DATA1")]),t._v(".")])]),t._v(" "),r("p",[r("strong",[t._v("Kaabah")]),t._v(" exposes many more variables allowing you to customize in detail your infrastructure such as adding labels, running user scripts... Have a look at the complete list of "),r("RouterLink",{attrs:{to:"/reference/configuration-variables.html"}},[t._v("variables")]),t._v(" and the "),r("a",{attrs:{href:"https://github.com/kalisio/kaabah/tree/master/tests",target:"_blank",rel:"noopener noreferrer"}},[t._v("tests"),r("OutboundLink")],1),t._v(" as an example.")],1),t._v(" "),r("h2",{attrs:{id:"cluster"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cluster"}},[t._v("#")]),t._v(" Cluster")]),t._v(" "),r("p",[t._v("The "),r("strong",[t._v("cluster")]),t._v(" consists in of multiple Docker hosts which run in "),r("strong",[t._v("swarm")]),t._v(" mode and act as manager (to manage membership and delegation) and workers (which run services).")]),t._v(" "),r("p",[r("img",{attrs:{src:a(360),alt:"swarm concept"}})]),t._v(" "),r("h3",{attrs:{id:"instances"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#instances"}},[t._v("#")]),t._v(" Instances")]),t._v(" "),r("p",[t._v("When generated from a given "),r("code",[t._v("<WORKSPACE>")]),t._v(", the instances are named according the following convention:")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("<WORKSPACE>-manager")])]),t._v(" "),r("li",[r("code",[t._v("<WORKSPACE>-woker-<INDEX>")])])]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[r("strong",[t._v("Kaabah")]),t._v(" supports only x86 architecture.")])]),t._v(" "),r("h3",{attrs:{id:"volumes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#volumes"}},[t._v("#")]),t._v(" Volumes")]),t._v(" "),r("p",[t._v("When needed extra disk spaces, you can attach additional volumes to the workers. These volumes are automatically attached, formatted (ext4 file system) and mounted on the workers. By default the volumes attached on a worker are accessible with the paths "),r("code",[t._v("/mnt/data0")]),t._v(", "),r("code",[t._v("mnt/data1")]),t._v(" and so on. You can override the default "),r("code",[t._v("data")]),t._v(" mount point by overriding the "),r("code",[t._v("worker_additional_volume_mount_point")]),t._v(" variable.")]),t._v(" "),r("h3",{attrs:{id:"network"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#network"}},[t._v("#")]),t._v(" Network")]),t._v(" "),r("h4",{attrs:{id:"security-groups"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#security-groups"}},[t._v("#")]),t._v(" Security Groups")]),t._v(" "),r("p",[t._v("By default, "),r("strong",[t._v("Kaabah")]),t._v(" creates 2 security groups:")]),t._v(" "),r("ul",[r("li",[t._v("the manager security group allowing:\n"),r("ul",[r("li",[t._v("external HTTP traffic (port 80)")]),t._v(" "),r("li",[t._v("external HTTPS traffic (port 443)")]),t._v(" "),r("li",[t._v("internal SSH traffic (port 22)")]),t._v(" "),r("li",[t._v("internal Docker swarm traffic.")])])]),t._v(" "),r("li",[t._v("the workers security group with the following rules:\n"),r("ul",[r("li",[t._v("internal SSH traffic (port 22)")]),t._v(" "),r("li",[t._v("internal Docker swarm traffic")])])])]),t._v(" "),r("h3",{attrs:{id:"security"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[t._v("#")]),t._v(" Security")]),t._v(" "),r("h4",{attrs:{id:"ssh"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[t._v("#")]),t._v(" SSH")]),t._v(" "),r("p",[r("strong",[t._v("Kaabah")]),t._v(" requires the use of a "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Bastion_host",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("Bastion")]),r("OutboundLink")],1),t._v(" to get connected to your instances.\nThe implemented solution relies on the following architecture:")]),t._v(" "),r("p",[r("img",{attrs:{src:a(361),alt:"bastion architecture"}})]),t._v(" "),r("p",[t._v("Your bastion instance must be instantiated in the same network of your cluster. The Security Groups rules allows the SSH traffic from the bastion.")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("It is a best practice to harden your bastion host because it is a critical point of network security. Hardening might include disabling\nunnecessary applications or services, restrict the inbound traffic to well-known hosts.")])]),t._v(" "),r("h4",{attrs:{id:"docker-engine"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-engine"}},[t._v("#")]),t._v(" Docker Engine")]),t._v(" "),r("p",[t._v("The Docker daemon only allows connections from clients authenticated by a certificate signed by a Certificate Authority (CA).")]),t._v(" "),r("p",[t._v("When creating the cluster, "),r("strong",[t._v("Kaabah")]),t._v(" handles the creation of the server and client keys but it requires you to provide this CA. Check out the "),r("RouterLink",{attrs:{to:"/guides/getting-started.html"}},[t._v("Getting started section")]),t._v(" to learn how to generate this CA.")],1),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[r("strong",[t._v("Kaabah")]),t._v(" relies on "),r("a",{attrs:{href:"https://www.openssl.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenSSL"),r("OutboundLink")],1),t._v(" to generate the server and client keys.")])])])}),[],!1,null,null,null);e.default=s.exports}}]);