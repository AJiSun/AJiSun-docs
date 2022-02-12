(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{481:function(s,e,t){"use strict";t.r(e);var r=t(18),v=Object(r.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql基础架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql基础架构"}},[s._v("#")]),s._v(" MySQL基础架构")]),s._v(" "),t("p",[s._v("如果能够清楚知道的架构图以及各个组件之间的关联，会有助于深入理解mysql，如下是其的架构图")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AJiSun/CDN/mysql-plus/1-mysql-framework.png",alt:"image-20210228131432026"}})]),s._v(" "),t("p",[s._v("图中可以看出mysql分为service层和存储引擎层：")]),s._v(" "),t("p",[t("strong",[s._v("service层")]),s._v("包含了mysql大多数核心功能，除了图中标注的连接器，查询缓存，分析器，优化器，执行器，还有所有的内置函数(日期，时间，数学和加密函数)，所有跨存储引擎的功能都在这一层实现：存储过程、触发器、视图等。")]),s._v(" "),t("p",[t("strong",[s._v("存储引擎层")]),s._v("负责mysql中数据的存储和提取。和Linux下的各种文件系统一样，每个存储引擎都有自己的优势和劣势，各种存储引擎通过提供API和service层对接，通过API屏蔽各种存储引擎之间的差异。常见的存储引擎有InnoDB、MyISAM、Memory，现在最常用的是InnoDB，也是从mysql5.5版本开始成为默认的存储引擎，在5.5之前默认的是MyISAM")]),s._v(" "),t("h3",{attrs:{id:"_1-连接器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-连接器"}},[s._v("#")]),s._v(" 1. 连接器")]),s._v(" "),t("p",[s._v("连接器是mysql service层的第一个模块，也是处理客户端请求的模块。")]),s._v(" "),t("p",[s._v("客户端和服务端的连接是使用经典的tcp协议，经过tcp握手之后，连接器开始进行身份验证")]),s._v(" "),t("p",[s._v("登录命令")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql -h$ip -P$port -u$user -p\n")])])]),t("ul",[t("li",[s._v("如果账号或者密码错误，会提示"),t("code",[s._v("Access denied for user")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AJiSun/CDN/mysql-plus/1-mysql-login-error.png",alt:"mysql-login-error"}})]),s._v(" "),t("ul",[t("li",[s._v("如果正确则认证通过，之后会查询当前用户的权限，之后用户的操作都是在这个权限范围中，如果在连接期间修改权限也是无效的，需要重新连接才会生效。")])]),s._v(" "),t("p",[s._v("如下命令也是可以的，但是这种命令会把密码暴露出来，建议还是使用如上图方式，采用交互交互输入密码更安全")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql -h$ip -P$port -u$user -p$password\n")])])]),t("h3",{attrs:{id:"_2-查询缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-查询缓存"}},[s._v("#")]),s._v(" 2.查询缓存")]),s._v(" "),t("blockquote",[t("p",[s._v("了解即可，mysql8.0版本就去除缓存模块了")])]),s._v(" "),t("p",[s._v("客户端发送一个sql查询请求后，会先去缓存中查看是否存在。如果之前这条sql已经执行过，而且结果缓存起来，那么这次查询就会直接从缓存中获取结果返回，不会在走分析器，优化器，执行器。如果缓存中没有命中，才会继续走后面的模块。")]),s._v(" "),t("p",[s._v("缓存以key-value的形式存储，存放在一个引用表中，key是通过一个哈希值的引用，这个哈希值包括查询本身(sql),当前要查询的数据库，客户端协议的版本等一些其他会影响返回结果的的信息；查询结果作为value(任何字符上的变化，例如空格，注释都会导致缓存不命中)。")]),s._v(" "),t("p",[s._v("如果表被更改，所有的缓存都将失效，表的更改是指数据的改变和表结构的改变，包括INSERT、UPDATE、 DELETE、TRUNCATE、ALTER TABLE、DROP TABLE或DROP DATABASE等。")]),s._v(" "),t("p",[t("strong",[s._v("对于经常变更的数据库来说缓存命中率就很低了 ，查询缓存往往弊大于利，所以不建议使用mysql的缓存，而对于长时间不变化的表可以使用redis缓存。mysql在8.0就完全去掉查询缓存模块了。")])]),s._v(" "),t("h3",{attrs:{id:"_3-分析器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-分析器"}},[s._v("#")]),s._v(" 3. 分析器")]),s._v(" "),t("p",[s._v("我们根据mysql语法写出来一个sql之后交给服务层，分析器对sql语句进行词法分析和语法分析。")]),s._v(" "),t("p",[s._v("Mysql通过识别字符串中列名、表名、where、select/update/insert 等mysql关键字，在根据语法规则判断sql是否满足语法，最终会生成一个抽象语法树(AST)。")]),s._v(" "),t("p",[s._v("mysql分析器使用mysql语法规则验证和解析查询，例如验证是否使用错误的关键字或者使用关键字的顺序是否正确，再或者会验证引号是否能前后正确匹配。")]),s._v(" "),t("p",[s._v("如果关键字有误会提示"),t("code",[s._v("You have an error in your SQL syntax")]),s._v("的信息，具体错误需要关注"),t("code",[s._v("use near")]),s._v("后的内容")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> elect * from iam_user where id = 0;\nERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'elect * from iam_user where id = 0' at line 1\n")])])]),t("h3",{attrs:{id:"_4-优化器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-优化器"}},[s._v("#")]),s._v(" 4. 优化器")]),s._v(" "),t("blockquote",[t("p",[s._v("经过分析器生成的语法树被认为是合法的，并由优化器转化成执行计划")])]),s._v(" "),t("p",[s._v("mysql判断出了这条sql需要做什么之后，对其进行各种优化，包括重写查询，决定表的读取顺序，以及选择合适的索引等。")]),s._v(" "),t("p",[s._v("mysql使用基于成本的优化的优化器，尝试预测一个查询使用某种执行计划时的成本，选择最小的那一个。")]),s._v(" "),t("p",[s._v("例如表中有多个索引的时候决定使用哪一个；使用联合索引的时候,会根据所以调整where条件的顺序；")]),s._v(" "),t("p",[s._v("如果想知道优化器是怎么进行优化决策的，可以通过explain获取优化的信息，explain具体的使用和解释后面章节会说明的。")]),s._v(" "),t("h3",{attrs:{id:"_5-执行器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-执行器"}},[s._v("#")]),s._v(" 5. 执行器")]),s._v(" "),t("blockquote",[t("p",[s._v("调用存储引擎的API操作数据")])]),s._v(" "),t("p",[s._v("优化器完成sql的优化后，提供一个执行计划给执行器，执行器开始执行这个执行计划来操作数据。")]),s._v(" "),t("p",[s._v("执行查询阶段：mysql只是简单的根据执行计划给出的指令逐步执行，通过调用存储引擎实现的接口来完成的。")]),s._v(" "),t("p",[s._v("总结：用一个sql的执行过程来总结下")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AJiSun/CDN/mysql-plus/1-mysql-select-path.png",alt:"mysql-select-path"}})]),s._v(" "),t("ul",[t("li",[s._v("客户端发送一条查询给服务器。")]),s._v(" "),t("li",[s._v("服务器先检查查询缓存，如果命中缓存则直接返回缓存中的结果。否则进入下一阶段。")]),s._v(" "),t("li",[s._v("服务器进行sql解析，预处理，再由优化器生成执行计划。")]),s._v(" "),t("li",[s._v("mysql根据执行计划，调用存储引擎的API来执行查询。")]),s._v(" "),t("li",[s._v("将结果返回给客户端。")])])])}),[],!1,null,null,null);e.default=v.exports}}]);