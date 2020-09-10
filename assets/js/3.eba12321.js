(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{358:function(e,t,a){e.exports=a.p+"assets/img/kaabah-principle.86122ac7.svg"},359:function(e,t,a){e.exports=a.p+"assets/img/kaabah-terraform.99a18566.svg"},360:function(e,t,a){e.exports=a.p+"assets/img/kaabah-swarm.9d28a804.svg"},361:function(e,t,a){e.exports=a.p+"assets/img/kaabah-gluster.23945e3a.svg"},362:function(e,t,a){e.exports=a.p+"assets/img/bastion-architecture.26f462e8.svg"},384:function(e,t,a){"use strict";a.r(t);var r=a(27),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"understanding-kaabah"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#understanding-kaabah"}},[e._v("#")]),e._v(" Understanding Kaabah")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("Prerequisites")]),e._v(" "),r("p",[r("strong",[e._v("Kaabah")]),e._v(" relies on various technologies such as "),r("a",{attrs:{href:"https://www.terraform.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terraform"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://docs.docker.com/engine/swarm/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Swarm"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://traefik.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Traefik"),r("OutboundLink")],1),e._v("... and we assume that you are enough familiar with them. If not, please take a while to discover them.")])]),e._v(" "),r("h2",{attrs:{id:"key-concepts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#key-concepts"}},[e._v("#")]),e._v(" Key concepts")]),e._v(" "),r("p",[r("strong",[e._v("Kaabah")]),e._v(" let you manipulate 4 kind of entities:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Workspace")]),e._v(": a collection of everything "),r("strong",[e._v("Kaabah")]),e._v(" needs to create and manage an infrastructure.")]),e._v(" "),r("li",[r("strong",[e._v("Configuration")]),e._v(": a set of Terraform variables used to define your infrastructure.")]),e._v(" "),r("li",[r("strong",[e._v("Cluster")]),e._v(": a "),r("a",{attrs:{href:"https://docs.docker.com/engine/swarm/key-concepts/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Swarm"),r("OutboundLink")],1),e._v(" infrastructure.")])]),e._v(" "),r("p",[e._v("The following image illustrates how these entities interact:")]),e._v(" "),r("p",[r("img",{attrs:{src:a(358),alt:"Kaabah principle"}})]),e._v(" "),r("p",[e._v("In addition "),r("strong",[e._v("Kaabah")]),e._v(" provides a set of commands that help you to operate the cluster. For instance, you can easily prune all the images on the different nodes, execute a command on a given node... See the "),r("a",{attrs:{href:"../reference/helper-commands"}},[e._v("reference")]),e._v(" page to have the complete list.")]),e._v(" "),r("h2",{attrs:{id:"workspace"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#workspace"}},[e._v("#")]),e._v(" Workspace")]),e._v(" "),r("p",[r("strong",[e._v("Kaabah")]),e._v(" is designed to take advantage of Terraform Workspaces. Indeed, "),r("strong",[e._v("Kaabah")]),e._v(" relies on the "),r("a",{attrs:{href:"https://www.terraform.io/docs/enterprise/guides/recommended-practices/part1.html#the-recommended-terraform-workspace-structure",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terraform recommend practices"),r("OutboundLink")],1),e._v(" and assume a "),r("strong",[e._v("Workspace")]),e._v(" is used to store the required data needed to build and manage an infrastructure for a specific environment (staging, production...):")]),e._v(" "),r("ul",[r("li",[e._v("the configuration of the infrastructure.")]),e._v(" "),r("li",[e._v("the SSH private key to get connected to the infrastructure")]),e._v(" "),r("li",[e._v("the user scripts you want to be executed when creating the infrastructure")]),e._v(" "),r("li",[e._v("the Terraform states of the infrastructure.")])]),e._v(" "),r("p",[e._v("Starting from this premise, "),r("strong",[e._v("Kaabah")]),e._v(" lets you to manage as many clusters as your projects require. If we decide to name our workspaces with both the project name and its environment (i.e. dev, test...), we can sketch the following diagram to illustrate the overall functioning of "),r("strong",[e._v("Kaabah")]),e._v(":")]),e._v(" "),r("p",[r("img",{attrs:{src:a(359),alt:"Kaabah terraform"}})]),e._v(" "),r("p",[e._v("In this diagram, the states of the different workspaces are stored within a dedicated bucket on amazon S3, but you are free to use any other Terraform "),r("a",{attrs:{href:"https://www.terraform.io/docs/backends/",target:"_blank",rel:"noopener noreferrer"}},[e._v("backends"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),r("p",[e._v("The "),r("strong",[e._v("Kaabah")]),e._v(" configuration file is a "),r("strong",[e._v("Terraform")]),e._v(" variable file describing the characteristics of the desired infrastructure.")]),e._v(" "),r("p",[e._v("Here is an example of a configuration file:")]),e._v(" "),r("div",{staticClass:"language-ini extra-class"},[r("pre",{pre:!0,attrs:{class:"language-ini"}},[r("code",[r("span",{pre:!0,attrs:{class:"token constant"}},[e._v("cloud_provider")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(' "AWS"')]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[e._v("manager_instance_type")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(' "t2.small"')]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[e._v("manager_ips")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(' ["3.115.176.41"]')]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[e._v("worker_instance_type")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(' "t3.large"')]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[e._v("worker_instance_count")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" 3")]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[e._v("worker_additional_volume_count")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" 2")]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[e._v("worker_additional_volume_size")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" 500")]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[e._v("worker_additional_volume_type")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(' "st1"')]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[e._v("worker_additional_volume_mount_point")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(' "/mnt/data"')]),e._v("\n\n")])])]),r("p",[e._v("Assuming the current workspace is "),r("code",[e._v("app-dev")]),e._v(", then when applying such a configuration, "),r("strong",[e._v("Kaabah")]),e._v(" will generate a Docker Swarm infrastructure on "),r("code",[e._v("AWS")]),e._v(" ("),r("code",[e._v("cloud_provider")]),e._v(" variable) composed of:")]),e._v(" "),r("ul",[r("li",[e._v("one manager node, "),r("code",[e._v("app-dev-manager")]),e._v(", of type "),r("code",[e._v("t2.small")]),e._v(" with the public IP address "),r("code",[e._v("3.115.176.41")]),e._v(".")]),e._v(" "),r("li",[r("code",[e._v("3")]),e._v(" worker nodes, "),r("code",[e._v("app-dev-worker-0")]),e._v(", "),r("code",[e._v("app-dev-worker-1")]),e._v(" and "),r("code",[e._v("app-dev-worker-2")]),e._v(", of type of "),r("code",[e._v("t3.large")]),e._v(". To each worker is attached "),r("code",[e._v("2")]),e._v(" optimized hard-disk ("),r("code",[e._v("sc1")]),e._v(") of "),r("code",[e._v("500")]),e._v("GB and these volumes are accessible through the mount points: "),r("code",[e._v("/mnt/data0")]),e._v(" and "),r("code",[e._v("/mnt/data1")]),e._v(".")])]),e._v(" "),r("p",[r("strong",[e._v("Kaabah")]),e._v(" exposes many more variables allowing you to customize in detail your infrastructure such as adding labels, running user scripts... Have a look at the complete list of "),r("RouterLink",{attrs:{to:"/reference/configuration-variables.html"}},[e._v("variables")]),e._v(" and the "),r("a",{attrs:{href:"https://github.com/kalisio/kaabah/tree/master/tests",target:"_blank",rel:"noopener noreferrer"}},[e._v("tests"),r("OutboundLink")],1),e._v(" as an example.")],1),e._v(" "),r("h2",{attrs:{id:"cluster"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cluster"}},[e._v("#")]),e._v(" Cluster")]),e._v(" "),r("p",[e._v("The "),r("strong",[e._v("cluster")]),e._v(" consists in of multiple Docker hosts which run in "),r("strong",[e._v("swarm")]),e._v(" mode and act as "),r("strong",[e._v("Manager")]),e._v(", to manage membership and delegation, and as "),r("strong",[e._v("Workers")]),e._v(" which run the services.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(360),alt:"swarm concept"}})]),e._v(" "),r("h3",{attrs:{id:"instances"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#instances"}},[e._v("#")]),e._v(" Instances")]),e._v(" "),r("p",[e._v("When generated from a given "),r("code",[e._v("<WORKSPACE>")]),e._v(", the instances are named according the following convention:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("<WORKSPACE>-manager-<INDEX>")])]),e._v(" "),r("li",[r("code",[e._v("<WORKSPACE>-woker-<INDEX>")])])]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[r("strong",[e._v("Kaabah")]),e._v(" supports only x86 architecture.")])]),e._v(" "),r("h3",{attrs:{id:"volumes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#volumes"}},[e._v("#")]),e._v(" Volumes")]),e._v(" "),r("h4",{attrs:{id:"gluster-shared-volume"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gluster-shared-volume"}},[e._v("#")]),e._v(" Gluster Shared volume")]),e._v(" "),r("p",[e._v("When creating the cluster, "),r("strong",[e._v("Kaabah")]),e._v(" creates a shared volume among the nodes using "),r("a",{attrs:{href:"https://www.gluster.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gluster"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("img",{attrs:{src:a(361),alt:"gluster concept"}})]),e._v(" "),r("p",[e._v("If your cluster is composed of 1 manager only, the shared volume is created in "),r("code",[e._v("distributed")]),e._v(" mode, otherwise the shared volume is created in "),r("code",[e._v("replicated")]),e._v(" mode to enhance the resilience. Check the "),r("a",{attrs:{href:"https://docs.gluster.org/en/latest/Administrator%20Guide/Setting%20Up%20Volumes/#creating-distributed-volumes",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),r("OutboundLink")],1),e._v(" to learn more about these modes.")]),e._v(" "),r("p",[e._v("By default, the "),r("strong",[e._v("Gluster")]),e._v(" volume is mounted using the default mount point "),r("code",[e._v("/mnt/share")]),e._v(". It can be overridden by setting the variable "),r("code",[e._v("gluster_share_volume_mount_point")]),e._v(".")]),e._v(" "),r("h4",{attrs:{id:"additional-block-volumes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#additional-block-volumes"}},[e._v("#")]),e._v(" Additional block volumes")]),e._v(" "),r("p",[e._v("When needed extra disk spaces, you can attach additional volumes to the managers and/or workers. These volumes are automatically attached, formatted to "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Ext4",target:"_blank",rel:"noopener noreferrer"}},[e._v("EXT4"),r("OutboundLink")],1),e._v(" and mounted on the nodes. By default the volumes attached on a node are accessible with the paths "),r("code",[e._v("/mnt/data0")]),e._v(", "),r("code",[e._v("mnt/data1")]),e._v(" and so on. You can override the default "),r("code",[e._v("/mnt/data")]),e._v(" mount point by overriding the "),r("code",[e._v("manager_additional_volume_mount_point")]),e._v(" and "),r("code",[e._v("worker_additional_volume_mount_point")]),e._v(" variables.")]),e._v(" "),r("h3",{attrs:{id:"network"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#network"}},[e._v("#")]),e._v(" Network")]),e._v(" "),r("h4",{attrs:{id:"ip-addresses"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ip-addresses"}},[e._v("#")]),e._v(" IP addresses")]),e._v(" "),r("p",[r("strong",[e._v("Kabbah")]),e._v(" let you the choice to define the IP addresses of the managers only. The IP addresses you can assign to the managers are given (usually bought) by your provider:")]),e._v(" "),r("ul",[r("li",[e._v("on "),r("strong",[e._v("Scaleway")]),e._v(" it must be a "),r("a",{attrs:{href:"https://www.scaleway.com/en/faq/servers/network/#-What-is-a-flexible-IP-address",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flexible IP"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("on "),r("strong",[e._v("AWS")]),e._v(" it must be an "),r("a",{attrs:{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elastic IP"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("on "),r("strong",[e._v("OVH")]),e._v(" it must be a "),r("a",{attrs:{href:"https://www.ovhcloud.com/en/bare-metal/ip/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Floating IP"),r("OutboundLink")],1)])]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("Warning")]),e._v(" "),r("p",[e._v("On "),r("strong",[e._v("OVH")]),e._v(", "),r("strong",[e._v("Kaabahh")]),e._v(" adds an interface within the instance network configuration to allow the binding of the "),r("strong",[e._v("Floating IP")]),e._v(" to this instance. However, you need to do manually this binding using the "),r("strong",[e._v("OVH")]),e._v(" interface.")])]),e._v(" "),r("h4",{attrs:{id:"security-groups"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#security-groups"}},[e._v("#")]),e._v(" Security Groups")]),e._v(" "),r("p",[e._v("By default, "),r("strong",[e._v("Kaabah")]),e._v(" creates 2 security groups:")]),e._v(" "),r("ul",[r("li",[e._v("a security group assigned to the managers with the following rules:\n"),r("ul",[r("li",[e._v("external HTTP traffic (port 80)")]),e._v(" "),r("li",[e._v("external HTTPS traffic (port 443)")]),e._v(" "),r("li",[e._v("internal SSH traffic (port 22)")]),e._v(" "),r("li",[e._v("internal Docker swarm traffic")]),e._v(" "),r("li",[e._v("internal Gluster traffic")])])]),e._v(" "),r("li",[e._v("a security group assigned to the workers with the following rules:\n"),r("ul",[r("li",[e._v("internal SSH traffic (port 22)")]),e._v(" "),r("li",[e._v("internal Docker swarm traffic")]),e._v(" "),r("li",[e._v("internal Gluster traffic")])])])]),e._v(" "),r("h3",{attrs:{id:"security"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[e._v("#")]),e._v(" Security")]),e._v(" "),r("h4",{attrs:{id:"ssh"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[e._v("#")]),e._v(" SSH")]),e._v(" "),r("p",[r("strong",[e._v("Kaabah")]),e._v(" requires the use of a "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Bastion_host",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Bastion")]),r("OutboundLink")],1),e._v(" to get connected to your instances.\nThe implemented solution relies on the following architecture:")]),e._v(" "),r("p",[r("img",{attrs:{src:a(362),alt:"bastion architecture"}})]),e._v(" "),r("p",[e._v("Your bastion instance must be instantiated in the same network of your cluster. The Security Groups rules allows the SSH traffic from the bastion.")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("It is a best practice to harden your bastion host because it is a critical point of network security. Hardening might include disabling\nunnecessary applications or services, restrict the inbound traffic to well-known hosts.")])]),e._v(" "),r("h4",{attrs:{id:"docker-engine"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-engine"}},[e._v("#")]),e._v(" Docker Engine")]),e._v(" "),r("p",[e._v("The Docker daemon only allows connections from clients authenticated by a certificate signed by a Certificate Authority (CA).")]),e._v(" "),r("p",[e._v("When creating the cluster, "),r("strong",[e._v("Kaabah")]),e._v(" handles the creation of the server and client keys but it requires you to provide this CA. Check out the "),r("RouterLink",{attrs:{to:"/guides/getting-started.html"}},[e._v("Getting started section")]),e._v(" to learn how to generate this CA.")],1),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[r("strong",[e._v("Kaabah")]),e._v(" relies on "),r("a",{attrs:{href:"https://www.openssl.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenSSL"),r("OutboundLink")],1),e._v(" to generate the server and client keys.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);