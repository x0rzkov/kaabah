(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{165:function(e,t,r){e.exports=r.p+"assets/img/kaabah-terraform.555a6e18.svg"},166:function(e,t,r){e.exports=r.p+"assets/img/kaabah-swarm.d67d6932.svg"},167:function(e,t,r){e.exports=r.p+"assets/img/kaabah-traefik.96292850.svg"},172:function(e,t,r){"use strict";r.r(t);var s=[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"main-concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#main-concepts","aria-hidden":"true"}},[this._v("#")]),this._v(" Main concepts")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Kaabah")]),this._v(" let you manipulate 4 kind of entities:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("Configuration")]),this._v(": a set of Terraform variables used to design your infrastructure: the cloud provider, the number of workers, the number of volumes...")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("Workspace")]),this._v(": a collection of everything Terraform needs to manager an infrastructure: the configuration and state data to keep track of operations.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("Cluster")]),this._v(": a Docker Swarm infrastructure built using *"),t("em",[this._v("Kaabah")]),this._v(". Such an infrastructure is composed a manager node and a set of worker nodes. By default, "),t("strong",[this._v("Kaabah")]),this._v(" will protect your cluster with TLS certificates.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"global-approach"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#global-approach","aria-hidden":"true"}},[this._v("#")]),this._v(" Global approach")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Starting from this premise, "),t("strong",[this._v("Kaabah")]),this._v(" lets you to manage as many clusters as your projects require. If we decide to name our workspaces with both the project name and its environment (i.e. dev, test...), we can sketch the following diagram to illustrate the overall functioning of "),t("strong",[this._v("Kaabah")]),this._v(":")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(165),alt:"Kaabah terraform"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"terraform"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#terraform","aria-hidden":"true"}},[this._v("#")]),this._v(" Terraform")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("the "),t("strong",[this._v("AWS")]),this._v(" module which implements the Docker Swarm infrastructure on AWS")]),this._v(" "),t("li",[this._v("the "),t("strong",[this._v("Scaleway")]),this._v(" module which implements the Docker Swarm infrastructure on Scaleway")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Variables")]),this._v(" "),t("th",[this._v("Description")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("SCALEWAY_ACCESS_KEY")])]),this._v(" "),t("td",[this._v("Your Scaleway access key")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("SCALEWAY_TOKEN")])]),this._v(" "),t("td",[this._v("Your Scaleway token")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("AWS_ACCESS_KEY")])]),this._v(" "),t("td",[this._v("Your AWS access key. This is important to note that your credential must allows access to AWS EC2 and S3 services")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("AWS_SECRET_KEY")])]),this._v(" "),t("td",[this._v("Your AWS secret key")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("AUTH_USER")])]),this._v(" "),t("td",[this._v("Your authentication identity to access the services")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("AUTH_PASSWORD")])]),this._v(" "),t("td",[this._v("Your authentication password to access the services. It must be encrypted and for now only "),t("b",[this._v("SHA1")]),this._v(" encryption is supported")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("provider")])]),this._v(" "),t("td",[this._v("The provider to host the infrastructure. It must be "),t("code",[this._v("AWS")]),this._v(" or "),t("code",[this._v("Scaleway")]),this._v(". There is no default value")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("domain")])]),this._v(" "),t("td",[this._v("The domain to be added to the traefik rules. The default value is "),t("code",[this._v("kalisio.xyz")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[r("td",[r("code",[e._v("subdomain")])]),e._v(" "),r("td",[e._v("The subdomain to be added to the traefik rules. By default, the value will be computed from the Terraform workspace name by replacing each "),r("code",[e._v("-")]),e._v(" by "),r("code",[e._v(".")]),e._v(". For instance, the subdomain for the workspace "),r("code",[e._v("app-dev")]),e._v(" will be "),r("code",[e._v("app.dev")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("code",[this._v("ca_server")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("contact")])]),this._v(" "),t("td",[this._v("The email contact provided to Let's Encrypt when generating certificates. The default value is "),t("code",[this._v("contact@kalisio.com")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("docker_version")])]),this._v(" "),t("td",[this._v("The version of the Docker engine to be installed. The default value is "),t("code",[this._v("18.03.1~ce-0~ubuntu")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("docker_network")])]),this._v(" "),t("td",[this._v("The name of the Docker network to be created. The default value is the name of the Terraform workspace without the environment part. For instance, the Docker network for the workspace "),t("code",[this._v("app-dev")]),this._v(" will be "),t("code",[this._v("app")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("manager_instance_type")])]),this._v(" "),t("td",[this._v("The instance type of the Docker Swarm manager. It must be a X86 64bits architecture and it depends on the provider. There is no default value")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("manager_labels")])]),this._v(" "),t("td",[this._v("The labels to add to the manager node. Labels are defined using a set of "),t("em",[this._v("key=value")]),this._v(" pairs separated with spaces. The default value is "),t("code",[this._v('""')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("manager_user_script")])]),this._v(" "),t("td",[this._v("The user script to be executed when when the manager is ready. It must be the file path to the script. The default value is "),t("code",[this._v('""')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("worker_instance_type")])]),this._v(" "),t("td",[this._v("The instance type of the Docker Swarm workers. It must be a X86 64bits architecture and it depends on the provider. There is no default value")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("worker_instance_count")])]),this._v(" "),t("td",[this._v("The number of worker instances. The default value is "),t("code",[this._v("1")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("worker_additional_volume_count")])]),this._v(" "),t("td",[this._v("The number of volumes attached to each worker. The default value is "),t("code",[this._v("0")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("worker_additional_volume_size")])]),this._v(" "),t("td",[this._v("The size in giga bytes of the additional volumes. Note that on Scaleway you are limited to 150GB and the minimum size is 50GB. Moreover, you can add volumes to baremetal instances only. The default value is "),t("code",[this._v("150")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("code",[this._v("worker_additional_volume_type")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[r("td",[r("code",[e._v("worker_labels")])]),e._v(" "),r("td",[e._v("The labels to add to the different worker nodes. Labels are defined using a set of "),r("em",[e._v("key=value")]),e._v(" pairs separated with spaces. Labels for each workers are declared using a list, e.g. "),r("code",[e._v('["worker0:true", "worker1:true", ...]')]),e._v(". The default value is "),r("code",[e._v("[]")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("worker_user_scripts")])]),this._v(" "),t("td",[this._v("The scripts to be executed once the workers are ready. It must be a list of file paths. The default value is "),t("code",[this._v("[]")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("ssh_key")])]),this._v(" "),t("td",[this._v("The path to the the ssh key required to get connected to the instances. The default value is "),t("code",[this._v("ssh.pem")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("key_name")])]),this._v(" "),t("td",[this._v("The AWS name of the ssh key to be used when creating the instance. The default value is "),t("code",[this._v("kalisio")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"docker-swarm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-swarm","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker Swarm")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("b",[this._v("Kaabah")]),this._v(" provides the Terraform and Docker configuration to create and manage a Docker Swarm with a stack of high level services that allows you to:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The following diagram illustrates a Swarm cluster composed of 4 nodes including a "),t("b",[this._v("manager")]),this._v(" and 3 "),t("b",[this._v("workers")]),this._v(" and the corresponding stack of services.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(166),alt:"swarm concept"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("<WORKSPACE>-manager")])]),this._v(" "),t("li",[t("code",[this._v("<WORKSPACE>-woker-<INDEX>")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"traefik"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#traefik","aria-hidden":"true"}},[this._v("#")]),this._v(" Traefik")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),t("p",[this._v("Du to rate limits fixed by Let's Encrypt, it is highly recommend to set the "),t("code",[this._v("ca_server")]),this._v(" variable to "),t("code",[this._v("https://acme-staging-v02.api.letsencrypt.org/directory")]),this._v(" when testing your infrastructure.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("By default, "),t("strong",[this._v("Kaabah")]),this._v(" specializes the "),t("strong",[this._v("traefik")]),this._v(" configuration with:")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("2 entrypoints:\n"),r("ul",[r("li",[e._v("to allow HTTPS requests (port 443)")]),e._v(" "),r("li",[e._v("to redirect HTTP (port 80) request to HTTPS (port 443)")])])]),e._v(" "),r("li",[e._v("5 frontends to access the services:\n"),r("ul",[r("li",[r("strong",[e._v("traefik (dashboard)")])]),e._v(" "),r("li",[r("strong",[e._v("Portainer")])]),e._v(" "),r("li",[r("strong",[e._v("Prometheus")])]),e._v(" "),r("li",[r("strong",[e._v("Alertmanager")])]),e._v(" "),r("li",[r("strong",[e._v("Grafana")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The frontend rules depend on the "),t("code",[this._v("subdomain")]),this._v(" and "),t("code",[this._v("donain")]),this._v(" variables defined in the Terraform configuration.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("It also support basic authentication to access the services using the variables "),r("code",[e._v("AUTH_USER")]),e._v(" and "),r("code",[e._v("AUTH_PASSWORD")]),e._v(". This means that "),r("strong",[e._v("portainer")]),e._v(" and "),r("strong",[e._v("grafana")]),e._v(" authentication have been disabled.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Considering a Terraform workspace named "),t("code",[this._v("app-dev")]),this._v(", the default subdomain will be "),t("code",[this._v("app.dev")]),this._v("and the "),t("strong",[this._v("traefik")]),this._v(" configuration will be as shown in the following diagram:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(167),alt:"traefik routing"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prometheus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prometheus","aria-hidden":"true"}},[this._v("#")]),this._v(" Prometheus")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grafana","aria-hidden":"true"}},[this._v("#")]),this._v(" Grafana")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("By default, "),t("strong",[this._v("Grafana")]),this._v(" is shipped with the following customisation:")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("UI:\n"),r("ul",[r("li",[e._v("Login form disabled: indeed the access to "),r("strong",[e._v("Grafana")]),e._v(" requires to be authenticated (basic auth). This requirement is defined using Traefik frontend rule.")]),e._v(" "),r("li",[e._v("The default user is granted the "),r("code",[e._v("EDITOR")]),e._v(" permissions.")])])]),e._v(" "),r("li",[e._v("Datasources: the Prometheus datasource is included by default.")]),e._v(" "),r("li",[e._v("Dashboards: 2 dashboards are provided by default:\n"),r("ul",[r("li",[e._v("Cluster overview which allow to visualize the main metrics of the cluster nodes")]),e._v(" "),r("li",[e._v("Swarm overview which allow to visualize the main metrics of the Docker swarm")])])])])}],a=r(0),i=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("div",{staticClass:"warning custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("Prerequisites")]),e._v(" "),r("p",[r("strong",[e._v("Kaabah")]),e._v(" relies on various technologies such as "),r("a",{attrs:{href:"https://www.terraform.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terraform"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://docs.docker.com/engine/swarm/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Swarm"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://portainer.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Traefik"),r("OutboundLink")],1),e._v("... and we assume that you are enough familiar with them. If not, please take a while to discover them.")])]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),r("ul",[e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),r("li",[r("strong",[e._v("Service")]),e._v(": an application deployed on your "),r("strong",[e._v("Cluster")]),e._v(". By default, "),r("strong",[e._v("Kaabah")]),e._v(" comes with the following services:\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.docker.com/registry/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Registry"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://traefik.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Traefik"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://portainer.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Portainer"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://prometheus.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://grafana.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grafana"),r("OutboundLink")],1)])])])]),e._v(" "),e._m(5),e._v(" "),r("p",[r("strong",[e._v("Kaabah")]),e._v(" is designed to take advantage of Terraform Workspaces and its usage relies on the recommend practices as presented in this "),r("a",{attrs:{href:"https://www.terraform.io/docs/enterprise/guides/recommended-practices/part1.html#the-recommended-terraform-workspace-structure",target:"_blank",rel:"noopener noreferrer"}},[e._v("article"),r("OutboundLink")],1),e._v(". Thus, we assume a workspace is used to store the configuration of your infrastructure for each environment.")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),r("p",[e._v("In this diagram, the states of the different workspaces are stored within a dedicated bucket on amazon S3, but you are free to use any other Terraform "),r("a",{attrs:{href:"https://www.terraform.io/docs/backends/",target:"_blank",rel:"noopener noreferrer"}},[e._v("backends"),r("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(8),e._v(" "),r("p",[e._v("The Terraform code is composed of 2 modules:")]),e._v(" "),e._m(9),e._v(" "),r("p",[e._v("And it exposes the following variables:")]),e._v(" "),r("table",[e._m(10),e._v(" "),r("tbody",[e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),r("tr",[e._m(20),e._v(" "),r("td",[e._v("The Let's Encrypt server to generate certificates. The default value is empty to let traefik manage for you. However and because Let's Encrypt provides "),r("a",{attrs:{href:"https://letsencrypt.org/docs/rate-limits/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rate limits"),r("OutboundLink")],1),e._v(" it is recommended to set this value to "),r("code",[e._v("https://acme-staging-v02.api.letsencrypt.org/directory")]),e._v(" when testing your infrastructure.")])]),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),r("tr",[e._m(31),e._v(" "),r("td",[e._v("The type of additional volumes to add. This option only works on AWS. The different "),r("a",{attrs:{href:"https://docs.aws.amazon.com/fr_fr/AWSEC2/latest/UserGuide/EBSVolumeTypes.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("types"),r("OutboundLink")],1),e._v(" are "),r("code",[e._v("gp2")]),e._v(", "),r("code",[e._v("io1")]),e._v(", "),r("code",[e._v("st1")]),e._v(" and "),r("code",[e._v("sc1")]),e._v(". The default value is "),r("code",[e._v("sc1")])])]),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),e._m(34),e._v(" "),e._m(35)])]),e._v(" "),r("p",[e._v("These variables can be overridden to match your environment requirements. See the section "),r("router-link",{attrs:{to:"./../how-to-use-it/getting-started.html"}},[e._v("How to use it ?")])],1),e._v(" "),e._m(36),e._v(" "),e._m(37),e._v(" "),r("ul",[r("li",[e._v("route the traffic to the cluster and ensure SSL termination using "),r("a",{attrs:{href:"https://traefik.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Traefik"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("manage the services deployed on the cluster using "),r("a",{attrs:{href:"https://portainer.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Portainer"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("monitor the cluster using "),r("a",{attrs:{href:"https://prometheus.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("analyze the cluster metrics using "),r("a",{attrs:{href:"https://grafana.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grafana"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("share files among the nodes of the cluster using "),r("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Secure_shell_file_system",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSHFS"),r("OutboundLink")],1)])]),e._v(" "),e._m(38),e._v(" "),e._m(39),e._v(" "),r("p",[e._v("The instances are named according the following convention:")]),e._v(" "),e._m(40),e._v(" "),e._m(41),e._v(" "),r("p",[r("strong",[e._v("traefik")]),e._v(" allows to route the traffic from internet to the Docker Swarm infrastructure with SSL termination. It uses "),r("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Let's Encrypt"),r("OutboundLink")],1),e._v(" to generate and renew SSL certificates for each services.")]),e._v(" "),e._m(42),e._v(" "),e._m(43),e._v(" "),e._m(44),e._v(" "),e._m(45),e._v(" "),e._m(46),e._v(" "),e._m(47),e._v(" "),e._m(48),e._v(" "),e._m(49),e._v(" "),e._m(50),e._v(" "),e._m(51),e._v(" "),e._m(52)])},s,!1,null,null,null);i.options.__file="README.md";t.default=i.exports}}]);