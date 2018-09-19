(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{173:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),e("p",[t._v("You can then configure the CLI with your credentials:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),e("p",[t._v("See the "),e("a",{attrs:{href:"https://www.scaleway.com/docs/attach-and-detach-a-volume-to-an-existing-server/",target:"_blank",rel:"noopener noreferrer"}},[t._v("following article"),e("OutboundLink")],1),t._v(" for details.")])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips","aria-hidden":"true"}},[this._v("#")]),this._v(" Tips")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"ubuntu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu","aria-hidden":"true"}},[this._v("#")]),this._v(" Ubuntu")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"how-to-install-node-js-8-yarn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install-node-js-8-yarn","aria-hidden":"true"}},[this._v("#")]),this._v(" How to install Node.js (>8) & Yarn ?")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token variable"}},[t._v("$curl")]),t._v(" -sL https://deb.nodesource.com/setup_8.x "),e("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -E "),e("span",{attrs:{class:"token function"}},[t._v("bash")]),t._v(" -\n"),e("span",{attrs:{class:"token variable"}},[t._v("$sudo")]),t._v(" apt "),e("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" -y nodejs\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"how-to-install-aws-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install-aws-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" How to install AWS CLI ?")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token variable"}},[t._v("$sudo")]),t._v(" apt "),e("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" python-pip\n"),e("span",{attrs:{class:"token variable"}},[t._v("$pip")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" awscli --upgrade --user\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token variable"}},[this._v("$aws")]),this._v(" configure\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"docker-swarm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-swarm","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker swarm")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"how-to-find-out-why-service-can-t-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-find-out-why-service-can-t-start","aria-hidden":"true"}},[this._v("#")]),this._v(" How to find out why service can't start ?")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token variable"}},[t._v("$docker")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("service")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("ps")]),t._v(" --no-trunc "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("serviceName"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"scaleway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scaleway","aria-hidden":"true"}},[this._v("#")]),this._v(" Scaleway")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"use-an-additional-volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-an-additional-volume","aria-hidden":"true"}},[this._v("#")]),this._v(" Use an additional volume")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ol",[e("li",[t._v("Create the mount point: "),e("code",[t._v("mkdir -p /mnt/data")])]),t._v(" "),e("li",[t._v("Format the additional volume: "),e("code",[t._v("mkfs -t ext4 /dev/nbd2")])]),t._v(" "),e("li",[t._v("Retrieve the UUID of your additional volume: "),e("code",[t._v("blkid")])]),t._v(" "),e("li",[t._v("Create the "),e("strong",[t._v("systemd")]),t._v(" mount file: "),e("code",[t._v("nano /etc/systemd/system/mnt-data.mount")]),t._v(" and add the following content:")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v('[Unit]\nDescription=Mount NDB Volume at boot\n\n[Mount]\nWhat=UUID="16575a81-bb2c-46f3-9ad8-3bbe20157f7c"\nWhere=/mnt/data\nType=ext4\nOptions=defaults\n\n[Install]\nWantedBy=multi-user.target\n')])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ol",{attrs:{start:"5"}},[e("li",[t._v("Reload "),e("strong",[t._v("systemd")]),t._v(": "),e("code",[t._v("systemctl daemon-reload")])]),t._v(" "),e("li",[t._v("Mount the volume: "),e("code",[t._v("systemctl start mnt-data.mount")])]),t._v(" "),e("li",[t._v("Enable automatic mount during boot: "),e("code",[t._v("systemctl enable mnt-data.mount")])])])}],!1,null,null,null);n.options.__file="tips.md";a.default=n.exports}}]);