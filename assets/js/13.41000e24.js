(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{184:function(a,e,s){"use strict";s.r(e);var t=s(0),r=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"helper-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#helper-commands","aria-hidden":"true"}},[a._v("#")]),a._v(" Helper commands")]),a._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),s("p",[a._v("The helper commands are installed in "),s("code",[a._v("/usr/local/sbin")]),a._v(" and can be used out of the box.")])]),a._v(" "),s("h2",{attrs:{id:"k-label-add"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#k-label-add","aria-hidden":"true"}},[a._v("#")]),a._v(" k-label-add")]),a._v(" "),s("p",[s("code",[a._v("usage: k-label-add <node_id> <labels>")])]),a._v(" "),s("p",[a._v("Adds the specified labels to a given node")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$k")]),a._v("-label-add 87vv4tmksirt646er0l1jk66h "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"label1=value1 label2=value label3=value3"')]),a._v("\n")])])]),s("h2",{attrs:{id:"k-label-clear"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#k-label-clear","aria-hidden":"true"}},[a._v("#")]),a._v(" k-label-clear")]),a._v(" "),s("p",[s("code",[a._v("usage: k-label-clear <node_id>")])]),a._v(" "),s("p",[a._v("Clears the labels attached to a given node")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$k")]),a._v("-label-clear 87vv4tmksirt646er0l1jk66h\n")])])]),s("h2",{attrs:{id:"k-label-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#k-label-list","aria-hidden":"true"}},[a._v("#")]),a._v(" k-label-list")]),a._v(" "),s("p",[s("code",[a._v("usage: k-label-list <node_id>")])]),a._v(" "),s("p",[a._v("Lists the labels attached to a given node")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$k")]),a._v("-label-list 87vv4tmksirt646er0l1jk66h \nlabel1"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("value1 label2"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("value label3"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("value3\n")])])]),s("h2",{attrs:{id:"k-node-exec"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#k-node-exec","aria-hidden":"true"}},[a._v("#")]),a._v(" k-node-exec")]),a._v(" "),s("p",[s("code",[a._v("usage: k-node-exec <node_id> <command>")])]),a._v(" "),s("p",[a._v("Executes a command on the given node")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$k")]),a._v("-node-exec "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"echo 'foo bar' > foobar\"")]),a._v("\n")])])]),s("h2",{attrs:{id:"k-node-find"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#k-node-find","aria-hidden":"true"}},[a._v("#")]),a._v(" k-node-find")]),a._v(" "),s("p",[s("code",[a._v("usage: k-node-find <node_ip>")])]),a._v(" "),s("p",[a._v("Returns the node ID corresponding to the given node IP address")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$k")]),a._v("-node-find 172.31.34.218\n87vv4tmksirt646er0l1jk66h\n")])])]),s("h2",{attrs:{id:"k-service-check"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#k-service-check","aria-hidden":"true"}},[a._v("#")]),a._v(" k-service-check")]),a._v(" "),s("p",[s("code",[a._v("usage: k-serice-check <service_id|service_name>")])]),a._v(" "),s("p",[a._v("Checks the status of the given service.")]),a._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("This command is often used to find why a service can't start")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$k")]),a._v("-service-check kaabah_portainer\nID                          NAME                 IMAGE           NODE                DESIRED STATE       CURRENT                                                          STATE               ERROR               PORTS\nne6otm12od24hmj576bj8322c   kaabah_portainer.1   portainer/portainer:latest@sha256:07c0e19e28e18414dd02c313c36b293758acf197d5af45077e3dd69c630e25cc   ip-172-31-36-140    Running             Running about an hour ago\n")])])]),s("h2",{attrs:{id:"k-worker-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#k-worker-list","aria-hidden":"true"}},[a._v("#")]),a._v(" k-worker-list")]),a._v(" "),s("p",[s("code",[a._v("usage: k-worker-list")])]),a._v(" "),s("p",[a._v("Displays the worker nodes")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$k")]),a._v("-worker-list\nID                            HOSTNAME            STATUS              AVAILABILITY        MANAGER STATUS      ENGINE VERSION\nafwvqo2pv90jc5us3t8nvwzsd     ip-172-31-35-40     Ready               Active                                  18.03.1-ce\nwyo0dvb85bn0ziw58v0o8u4tl     ip-172-31-39-133    Ready               Active                                  18.03.1-ce\n")])])]),s("h2",{attrs:{id:"k-worker-foreach"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#k-worker-foreach","aria-hidden":"true"}},[a._v("#")]),a._v(" k-worker-foreach")]),a._v(" "),s("p",[s("code",[a._v("usage: k-worker-foreach <command>")])]),a._v(" "),s("p",[a._v("Executes the given command on each worker")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$k")]),a._v("-worker-foreach "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"echo 'foo bar'\"")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(' foobar"\n')])])]),s("h2",{attrs:{id:"k-swarm-prune"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#k-swarm-prune","aria-hidden":"true"}},[a._v("#")]),a._v(" k-swarm-prune")]),a._v(" "),s("p",[s("code",[a._v("usage: k-swarm-prune")])]),a._v(" "),s("p",[a._v("Removes the unused images, volumes and networks on the nodes")]),a._v(" "),s("h2",{attrs:{id:"k-swarm-info"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#k-swarm-info","aria-hidden":"true"}},[a._v("#")]),a._v(" k-swarm-info")]),a._v(" "),s("p",[s("code",[a._v("usage: k-swarm-info")])]),a._v(" "),s("p",[a._v("Displays the main information about the cluster")])])}],!1,null,null,null);e.default=r.exports}}]);