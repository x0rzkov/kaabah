(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{180:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[s("strong",[t._v("Kaabah")]),t._v(" installs "),s("a",{attrs:{href:"https://https://rclone.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("rclone"),s("OutboundLink")],1),t._v(" on each node of your cluster. By default, the configuration file is empty and you must configure it as you need it. Please refer to the official "),s("a",{attrs:{href:"https://rclone.org/docs/#configure",target:"_blank",rel:"noopener noreferrer"}},[t._v("guide"),s("OutboundLink")],1),t._v(" to configure "),s("strong",[t._v("rclone")]),t._v(".\nHowever you can tell "),s("strong",[t._v("Kaabah")]),t._v(" to provision an already defined configuration using the variable "),s("code",[t._v("rclone_conf")]),t._v(" in your configuration file:")]),t._v(" "),t._m(3),t._m(4),t._v(" "),s("p",[s("strong",[t._v("Kaabah")]),t._v(" installs "),s("a",{attrs:{href:"https://www.fail2ban.org/wiki/index.php/Main_Page",target:"_blank",rel:"noopener noreferrer"}},[t._v("fail2ban"),s("OutboundLink")],1),t._v(" on each node of your cluster with one customized "),s("strong",[t._v("jail")]),t._v(" for SSH connection attempts. By default, it comes with the following configuration:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("You can test the service using the command:")]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),s("p",[t._v("The pointed file must be a valid crontab file. See the "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cron",target:"_blank",rel:"noopener noreferrer"}},[t._v("crontab file format"),s("OutboundLink")],1),t._v(" to have the complete specifications.")]),t._v(" "),s("p",[t._v("Here is an example of a crontab file that executes the "),s("router-link",{attrs:{to:"./../reference/helper-commands.html#k-swarm-prune"}},[s("code",[t._v("k-swarm-prune")])]),t._v(" command every 2 hours:")],1),t._v(" "),t._m(18),s("p",[t._v("Once installed, you can list the actions using the command:")]),t._v(" "),t._m(19),s("p",[t._v("And check the logs with the command:")]),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),s("p",[t._v("To update the crontab, on the manager, follow this procedure:")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),s("p",[t._v("If you desire to update the labels on your cluster and keep track of the changes, you need to:")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),t._m(33),t._m(34),t._v(" "),s("p",[t._v("Using the registry is simple as:")]),t._v(" "),t._m(35),t._v(" "),t._m(36),t._m(37),t._v(" "),t._m(38),t._m(39),t._v(" "),t._m(40),s("p",[t._v("or")]),t._v(" "),t._m(41),t._m(42),t._v(" "),t._m(43),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),t._v(" "),t._m(48),t._m(49),t._v(" "),t._m(50),t._m(51),t._v(" "),t._m(52),t._v(" "),t._m(53),t._v(" "),s("p",[t._v("You can take advantage of this feature to:")]),t._v(" "),t._m(54),t._v(" "),t._m(55),t._v(" "),s("p",[t._v("Even if the combination "),s("strong",[t._v("Prometheus")]),t._v("/"),s("strong",[t._v("Grafana")]),t._v(" provides the capabilities to monitor the services, "),s("strong",[t._v("Kaabah")]),t._v(" is shipped with the "),s("router-link",{attrs:{to:"./../reference/helper-commands.html#k-swarm-check"}},[s("code",[t._v("k-swarm-check")])]),t._v(" command that allows you to check the health of a service. It relies on "),s("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/events/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Events"),s("OutboundLink")],1),t._v(" and can emit a slack notification when an alert is raised or resolved. The use of the command is complementary to the use of "),s("strong",[t._v("Prometheus")]),t._v("/"),s("strong",[t._v("Grafana")]),t._v(" and brings an extra level of reliability.")],1),t._v(" "),s("p",[t._v("To monitor the services of your cluster, you can add the following line to your manager crontab")]),t._v(" "),t._m(56),s("p",[t._v("Check the "),s("router-link",{attrs:{to:"./../reference/helper-commands.html#k-swarm-check"}},[s("code",[t._v("k-swarm-check")])]),t._v(" documentation for more detail.")],1),t._v(" "),t._m(57),t._v(" "),t._m(58),t._v(" "),t._m(59),t._v(" "),t._m(60)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"advanced-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advanced-usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Advanced usage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"cluster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cluster","aria-hidden":"true"}},[this._v("#")]),this._v(" Cluster")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"using-rclone"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-rclone","aria-hidden":"true"}},[this._v("#")]),this._v(" Using rclone")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("rclone_conf "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"path_to_workspace/rclone.conf"')]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"using-fail2ban"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-fail2ban","aria-hidden":"true"}},[this._v("#")]),this._v(" Using fail2ban")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[sshd]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("enabled")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("maxretry")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ignoreip")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 127.0.0.1 PRIVATE_NETWORK_CIDR")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("By default "),e("strong",[this._v("fail2ban")]),this._v(" will ignore SSH connections from any hosts in your private network.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"checking-the-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#checking-the-service","aria-hidden":"true"}},[this._v("#")]),this._v(" Checking the service")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$sudo")]),this._v(" fail2ban-client status sshd\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"unban-an-ip-address"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unban-an-ip-address","aria-hidden":"true"}},[this._v("#")]),this._v(" Unban an IP address")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sudo")]),t._v(" fail2ban-client "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" sshd unbanip "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ip_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"ban-an-ip-address"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ban-an-ip-address","aria-hidden":"true"}},[this._v("#")]),this._v(" Ban an IP address")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sudo")]),t._v(" fail2ban-client "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" sshd banip "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ip_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"using-crontab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-crontab","aria-hidden":"true"}},[this._v("#")]),this._v(" Using crontab")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Kaabah")]),this._v(" provides you the capability to assign a "),e("strong",[this._v("crontab")]),this._v(" to the manager.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"declaring-a-crontab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#declaring-a-crontab","aria-hidden":"true"}},[this._v("#")]),this._v(" Declaring a crontab")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When building a cluster, you can take advantage of the "),e("code",[this._v("manager_crontab")]),this._v(" variable to declare a crontab file to be provisioned on the manager.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("manager_crontab "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v(' "workspaces/my-workspace/my-crontab\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# Clears the swarm every tow hour")]),this._v("\n0 */2 * * * k-swarm-prune\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$crontab")]),this._v(" -l\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$grep")]),this._v(" CRON /var/log/syslog\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("Do not forget to add a "),e("code",[this._v("newline")]),this._v(" at the end of the file, otherwise the installation will fail.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"updating-a-crontab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updating-a-crontab","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating a crontab")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("taint the resource assigned to the crontab, that is to say: "),e("code",[this._v("null_resource.manager_crontab")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$terraform")]),this._v(" taint -module"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("AWS null_resource.manager_crontab\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("apply to update the services")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$terraform")]),this._v(" apply -var-file"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"workspaces/my-workspace/my-vars.tfvars"')]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("To remove a crontab, just simply clear the "),e("code",[this._v("manager_crontab")]),this._v(" variable and update the "),e("code",[this._v("null_resource.manager_crontab")]),this._v(" resource as indicated above.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"docker-swarm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-swarm","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker swarm")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"managing-labels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#managing-labels","aria-hidden":"true"}},[this._v("#")]),this._v(" Managing labels")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("taint the resources attached to the labels you want to change: "),e("code",[this._v("null_resource.manager_labels")]),this._v(" and "),e("code",[this._v("null_resource.worker_labels.*")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Taint the labels attached to the desired nodes, i.e. the worker 1 and the manager")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$terraform")]),t._v(" taint -module"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("AWS null_resource.worker_labels.1\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$terraform")]),t._v(" taint -module"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("AWS null_resource.manager_labels\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[e("p",[this._v("update your variables file: "),e("code",[this._v("workspaces/<file>.tfvars")])])]),this._v(" "),e("li",[e("p",[this._v("apply the changes")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$terraform")]),this._v(" apply -var-file"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"workspaces/<file>.tfvars"')]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"using-the-registry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-registry","aria-hidden":"true"}},[this._v("#")]),this._v(" Using the registry")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("build or pull the desired Docker image")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Build example")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$docker")]),t._v(" build https://github.com/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("organisation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("repository"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".git -t localhost:5000/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("push the image into the registry")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$docker")]),t._v(" push localhost:5000/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"4"}},[e("li",[this._v("create or deploy a service using the image in the registry")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# create a service")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$docker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" create --replicas 4 --name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("service"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" localhost:5000/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# deploy the service within a stack:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$docker")]),t._v(" stack deploy -c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("service.yml"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("other-service.yml"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("stack"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("where "),e("code",[this._v("<service.yml>")]),this._v(" is a "),e("strong",[this._v("Docker Compose file")]),this._v(" with the following skeleton:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.5'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("<service>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("5000/<image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("<tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" kaabah"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("network\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <replicas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kargo-network")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("DOCKER_NETWORK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("external")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"services"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#services","aria-hidden":"true"}},[this._v("#")]),this._v(" Services")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"updating-the-services"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-services","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating the services")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When updating "),e("strong",[this._v("Kaabah")]),this._v(", you may need to update the services running on a given infrastructure. You can rely on Terraform to proceed:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("taint the resource assigned to the services, that is to say: "),e("code",[this._v("null_resource.services")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$terraform")]),this._v(" taint -module"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("AWS null_resource.services\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("apply to update the services")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$terraform")]),this._v(" apply -var-file"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"workspaces/my-workspace/my-vars.tfvars"')]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"extending-the-services"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extending-the-services","aria-hidden":"true"}},[this._v("#")]),this._v(" Extending the services")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Kaabah")]),this._v(" allows you to extend the default services for a given cluster. For this, you must use the "),e("code",[this._v("extensions_dir")]),this._v(" variable and let it to point to an existing directory that includes:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("a "),s("code",[t._v("deploy")]),t._v(" directory where to put the "),s("strong",[t._v("Docker Compose files")]),t._v(" to be used to deploy the services")]),t._v(" "),s("li",[t._v("a "),s("code",[t._v("configs")]),t._v(" directory to be used to store the configuration of the services")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("extend the configuration of an existing service, i.e. add some limits to the container's resources")]),this._v(" "),e("li",[this._v("override the default configuration of the existing services")]),this._v(" "),e("li",[this._v("bootstrap your cluster with additional services")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"monitoring-the-services"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-the-services","aria-hidden":"true"}},[this._v("#")]),this._v(" Monitoring the services")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# k-swarm-check executed every minute")]),this._v("\n* * * * * k-swarm-check -s 60s https://hooks.slack.com/services/my-application-webook \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"securing-the-services"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#securing-the-services","aria-hidden":"true"}},[this._v("#")]),this._v(" Securing the services")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"cross-site-scripting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cross-site-scripting","aria-hidden":"true"}},[this._v("#")]),this._v(" Cross site scripting")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To enable Cross [Site Scripting protection](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS), you should add the following "),e("strong",[this._v("Traefik")]),this._v(" label:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('services:\n  my_service:\n    deploy:\n      label:\n       - "traefik.frontend.headers.customResponseHeaders=X-XSS-Protection: 1; mode=block"\n')])])])}],!1,null,null,null);e.default=r.exports}}]);