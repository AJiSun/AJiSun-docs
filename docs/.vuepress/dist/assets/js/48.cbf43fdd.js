(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{509:function(s,a,t){"use strict";t.r(a);var e=t(18),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"sap-hana与mysql和oracle的部分区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sap-hana与mysql和oracle的部分区别"}},[s._v("#")]),s._v(" SAP HANA与MySQL和Oracle的部分区别")]),s._v(" "),t("p",[s._v("hana的使用是次意外，我们做的产品是要给不同的客户使用，那么就会有不同的要求，所以我们也是在开发阶段就适配了多种数据库， 我平时开发中最多用到的是MySQL，其次是oracle，还有PostgreSQL等，但是我从没有接触过有用SAP HANA的客户，黑天鹅事件出现了 ，这次就遇到了。")]),s._v(" "),t("p",[s._v("OK，这次就把hana的使用遇到的个别性问题做个整理下。")]),s._v(" "),t("p",[s._v("客户的需要想要把数据库从mysql转到hana上去，我这边要去验证其可行性，按照下面步骤处理的")]),s._v(" "),t("ul",[t("li",[s._v("初始化工具")]),s._v(" "),t("li",[s._v("初始化表结构脚本")]),s._v(" "),t("li",[s._v("初始化表数据脚本")]),s._v(" "),t("li",[s._v("运行服务")]),s._v(" "),t("li",[s._v("总结")])]),s._v(" "),t("p",[s._v("之前只听说过hana是一个内存数据库，可以提供很高效的数据操作，但是费用也很高，一般的公司用不起，都是用redis缓存重要的数据，在我的印象中用hana的公司就像一个用戴森吹风机的人一样，哇，真有钱。惊讶归惊讶 ，客户就是上帝 活还是要干的。")]),s._v(" "),t("p",[s._v("我这边拿到测试的账号密码是这样的")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("HANA服务器IP：192.xxx.xx.xx\n登录账户：SYSTEM  \n密码：Ajisun1234\n端口：35244\n")])])]),t("p",[s._v("第一次接触都不知道怎么登录，百度一番之后可以用"),t("code",[s._v("SAP HANA Studio")]),s._v("登录，但是呢这个客户端下载安装登录折腾了两天才搞定，这个账号依然没有登录成功...... 因为我这个端口不是默认的，我下载的studio只能使用默认的端口，所以最终还是放弃了studio。\n后面通过询问了解hana的同事 使用了DBeaver（  https://dbeaver.io/） 还支持mac，后面就下载了这个客户端开启了han之旅。")]),s._v(" "),t("h3",{attrs:{id:"一些简单的sql-操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一些简单的sql-操作"}},[s._v("#")]),s._v(" 一些简单的sql 操作")]),s._v(" "),t("blockquote",[t("p",[s._v("hana的每个用户都有自己默认的schema,所以执行的sql是默认的schema，想操作其他schema需要schema.table的方式(和oracle一样)")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 创建用户以及同名schema")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" ajisun PASSWORD Ajisun1234 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v(" FORCE_FIRST_PASSWORD_CHANGE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 删除schema ajisun")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("schema")]),s._v(" ajisun  \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 授权schema")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SCHEMA")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" username \n\n")])])]),t("p",[s._v("hana的sql大体上是mysql/oracle一样的，下面列举一些差异性问题：")]),s._v(" "),t("h3",{attrs:{id:"_1-分页查询功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-分页查询功能"}},[s._v("#")]),s._v(" 1. 分页查询功能")]),s._v(" "),t("p",[s._v("mysql")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 或者")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("offset")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" \n")])])]),t("p",[s._v("hana")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- hana不支持limit 0,10的格式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("offset")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" \n")])])]),t("h3",{attrs:{id:"_2-批量操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-批量操作"}},[s._v("#")]),s._v(" 2. 批量操作")]),s._v(" "),t("p",[s._v("mysql")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 不能有多个，但是可以插入单条")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ss'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ss'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ss'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])])]),t("p",[s._v("hana")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 不支持上面那种values")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("dummy")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("union")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'李四'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("dummy")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("union")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'王五'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("dummy")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" t\n")])])]),t("h3",{attrs:{id:"_3-序列问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-序列问题"}},[s._v("#")]),s._v(" 3. 序列问题")]),s._v(" "),t("blockquote",[t("p",[s._v("hana和oracle一样都是有序列的，ID可以通过序列获取\noracle")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" user_S"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nextval "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dual\n")])])]),t("p",[s._v("hana")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" user_S"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nextval "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("dummy")]),s._v("\n")])])]),t("h3",{attrs:{id:"_4-索引相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-索引相关"}},[s._v("#")]),s._v(" 4. 索引相关")]),s._v(" "),t("blockquote",[t("p",[s._v("同一个字段建两个不同名字的索引，mysql是支持的，hana不支持，相当于重复建索引了")])]),s._v(" "),t("h3",{attrs:{id:"_5-tinyint数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-tinyint数据类型"}},[s._v("#")]),s._v(" 5. TINYINT数据类型")]),s._v(" "),t("ol",[t("li",[s._v("mysql 默认是无符号的范围是-128~127,带符号0~255")]),s._v(" "),t("li",[s._v("hana 没有选择，范围是0~255")])]),s._v(" "),t("h3",{attrs:{id:"_6-alter修改varchar的长度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-alter修改varchar的长度"}},[s._v("#")]),s._v(" 6. alter修改varchar的长度")]),s._v(" "),t("blockquote",[t("p",[s._v("hana数据库中varchar长度只能增加，不能减少")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" ajisun"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- feature not supported: cannot shorten the field length")]),s._v("\n")])])]),t("h3",{attrs:{id:"_7-不支持操作varchar转nclob"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-不支持操作varchar转nclob"}},[s._v("#")]),s._v(" 7. 不支持操作varchar转NCLOB")]),s._v(" "),t("blockquote",[t("p",[s._v("mysql可以把varchar转成longtext，但是hana不支持varchar转成NCLOB")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" ajisun"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name NCLOB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- feature not supported: cannot modify column type from varchar to nclob")]),s._v("\n")])])]),t("h3",{attrs:{id:"_8-distinct-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-distinct-区别"}},[s._v("#")]),s._v(" 8. DISTINCT 区别")]),s._v(" "),t("p",[s._v("mysql的distinct后面可以是longtext的字段\nhana的distinct后面不能包含NCLOB的字段")]),s._v(" "),t("p",[s._v("就那么多，再见")])])}),[],!1,null,null,null);a.default=n.exports}}]);