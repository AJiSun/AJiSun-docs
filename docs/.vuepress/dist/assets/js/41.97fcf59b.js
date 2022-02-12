(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{502:function(s,t,a){"use strict";a.r(t);var e=a(18),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"pt-online-schame-change"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pt-online-schame-change"}},[s._v("#")]),s._v(" pt-online-schame-change")]),s._v(" "),a("blockquote",[a("p",[s._v("使用场景： 在线修改大数据量表结构(ALTER tables without locking them)")])]),s._v(" "),a("blockquote",[a("p",[s._v("文档参考：https://www.percona.com/doc/percona-toolkit/LATEST/pt-online-schema-change.html")])]),s._v(" "),a("p",[s._v("好处:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("降低主从延时的风险\n\n可以限速、限资源，避免操作时MySQL负载过高\n")])])]),a("p",[s._v("建议:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("在业务低峰期做，将影响降到最低\n")])])]),a("p",[s._v("直接原表修改缺点：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("当表的数据量很大的时候，如果直接在线修改表结构，严重影响线上环境，而且耗时不可预估\n")])])]),a("p",[s._v("注意：")]),s._v(" "),a("blockquote",[a("p",[s._v("需要确认表必须包含主键或者唯一索引")])]),s._v(" "),a("blockquote",[a("p",[s._v("工具会创建触发器，所以原表上不能有触发器")])]),s._v(" "),a("blockquote",[a("p",[s._v("有外键的表需要注意使用参数--alter-foreign-keys-method(现在业务上不建议表中外键关联，建议在业务中控制)")])]),s._v(" "),a("p",[s._v("原理:")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("首先它会新建一张一模一样的表，表名一般是_new后缀")])]),s._v(" "),a("li",[a("p",[s._v("然后在这个新表执行更改字段操作")])]),s._v(" "),a("li",[a("p",[s._v("然后在原表上加三个触发器，DELETE/UPDATE/INSERT，将原表中要执行的语句也在新表中执行")])]),s._v(" "),a("li",[a("p",[s._v("最后将原表的数据拷贝到新表中，然后替换掉原表")])])]),s._v(" "),a("h3",{attrs:{id:"备份数据-先做"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份数据-先做"}},[s._v("#")]),s._v(" 备份数据（先做）")]),s._v(" "),a("h3",{attrs:{id:"_1-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装"}},[s._v("#")]),s._v(" 1. 安装")]),s._v(" "),a("p",[s._v("下载安装包：")]),s._v(" "),a("blockquote",[a("p",[s._v("wget  https://downloads.percona.com/downloads/percona-toolkit/3.3.1/source/tarball/percona-toolkit-3.3.1.tar.gz")])]),s._v(" "),a("p",[s._v("解压")]),s._v(" "),a("blockquote",[a("p",[s._v("tar -xvf percona-toolkit-3.3.1.tar.gz")])]),s._v(" "),a("p",[s._v("安装一些依赖包")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yum install perl-DBI\nyum install perl-DBD-MySQL\nyum install perl-Time-HiRes\nyum install perl-IO-Socket-SSL\nyum -y install perl-Digest-MD5\n")])])]),a("h3",{attrs:{id:"_2-测试可用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-测试可用"}},[s._v("#")]),s._v(" 2. 测试可用")]),s._v(" "),a("p",[s._v("在解压包的bin目录下执行,看是否正常，查看命令")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("./pt-online-schema-change --help\n")])])]),a("h3",{attrs:{id:"_3-参数字段及含义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-参数字段及含义"}},[s._v("#")]),s._v(" 3. 参数字段及含义")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("含义")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("--user=")]),s._v(" "),a("td",[s._v("连接用户名")])]),s._v(" "),a("tr",[a("td",[s._v("--password=")]),s._v(" "),a("td",[s._v("连接密码")])]),s._v(" "),a("tr",[a("td",[s._v("--host=")]),s._v(" "),a("td",[s._v("连接IP")])]),s._v(" "),a("tr",[a("td",[s._v("P=")]),s._v(" "),a("td",[s._v("端口")])]),s._v(" "),a("tr",[a("td",[s._v("--alter=")]),s._v(" "),a("td",[s._v("执行表变更的语句")])]),s._v(" "),a("tr",[a("td",[s._v("D=")]),s._v(" "),a("td",[s._v("database 库名")])]),s._v(" "),a("tr",[a("td",[s._v("t=")]),s._v(" "),a("td",[s._v("table 表名")])]),s._v(" "),a("tr",[a("td",[s._v("--charset=utf8")]),s._v(" "),a("td",[s._v("使用utf8编码，避免中文乱码")])]),s._v(" "),a("tr",[a("td",[s._v("--no-check-alter")]),s._v(" "),a("td",[s._v("不检查alter语句")])]),s._v(" "),a("tr",[a("td",[s._v("--print")]),s._v(" "),a("td",[s._v("打印操作日志")])]),s._v(" "),a("tr",[a("td",[s._v("--execute")]),s._v(" "),a("td",[s._v("执行修改表结构，真正的执行alter，–dry-run与–execute必须指定一个，二者相互排斥")])]),s._v(" "),a("tr",[a("td",[s._v("–dry-run")]),s._v(" "),a("td",[s._v("创建和修改新表，但不会创建触发器、复制数据、和替换原表。并不真正执行，与--print配合查看执行细节")])])])]),s._v(" "),a("h3",{attrs:{id:"_4-具体操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-具体操作"}},[s._v("#")]),s._v(" 4. 具体操作")]),s._v(" "),a("p",[s._v("添加一个字段")]),s._v(" "),a("blockquote",[a("p",[s._v("如果执行失败，检查alter语句，如果确认无误 可以避免检查 "),a("code",[s._v("--no-check-alter")])])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("pt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("online"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("schema")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("change "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--user=xxxx --password=xxxx  --host=xxx.xxx.xxx.xxxx  --alter \"add column  group_id bigint(20) not NULL default '0'  comment 'test' \" P=30306,D=h_pushcenter,t=h_message  --charset=utf8 --no-version-check --print --execute")]),s._v("\n")])])]),a("p",[s._v("修改字段")]),s._v(" "),a("p",[s._v("sql语句")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("h_message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MODIFY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("group_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("pt工具")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--alter \"MODIFY COLUMN group_id int(20)  NOT NULL DEFAULT '1'\"")]),s._v("\n")])])]),a("p",[s._v("修改字段名")]),s._v(" "),a("p",[s._v("sql语句")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("h_message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" CHANGE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" group_id group_id_0 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("pt工具")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('--alter "CHANGE group_id group_id_0 bigint(20)"')]),s._v("\n")])])]),a("p",[s._v("添加索引\nsql语句")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("h_message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INDEX")]),s._v(" h_message_n1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("group_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("pt工具")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('--alter "ADD INDEX h_message_n1(group_id)"')]),s._v("\n")])])]),a("h3",{attrs:{id:"_5-操作日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-操作日志"}},[s._v("#")]),s._v(" 5.操作日志")]),s._v(" "),a("ul",[a("li",[s._v("创建new结尾的新表")])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Creating")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\nCREATE TABLE `h_pushcenter`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("`_h_message_new` "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Created")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" table h_pushcenter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_h_message_new OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])])]),a("ul",[a("li",[s._v("新表执行alter操作")])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Altering")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\nALTER TABLE `h_pushcenter`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("`_h_message_new` add column  group_id "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" not NULL "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[s._v("'0'")]),s._v("  comment "),a("span",{pre:!0,attrs:{class:"token char"}},[s._v("'test'")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Altered")]),s._v(" `h_pushcenter`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("`_h_message_new` OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])])]),a("ul",[a("li",[s._v("原表上创建3个触发器")])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Creating")]),s._v(" triggers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n \n "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Event")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" DELETE \n \n "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Event")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" UPDATE \n \n "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Event")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" INSERT \n "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Created")]),s._v(" triggers OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])])]),a("ul",[a("li",[s._v("复制数据到新表")])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Copying")]),s._v(" approximately "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8187")]),s._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n \n "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Copied")]),s._v(" rows OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])])]),a("ul",[a("li",[s._v("重命名新旧两个表，然后替换，删除旧表")])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v("T10"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Swapping")]),s._v(" tables"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nRENAME TABLE `h_pushcenter`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("`h_message` TO `h_pushcenter`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("`_h_message_old`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" `h_pushcenter`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("`_h_message_new` TO `h_pushcenter`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("`h_message`\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v("T10"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("09")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Swapped")]),s._v(" original and "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" tables OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v("T10"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("09")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Dropping")]),s._v(" old table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nDROP TABLE IF EXISTS `h_pushcenter`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("`_h_message_old`\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v("T10"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("09")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Dropped")]),s._v(" old table `h_pushcenter`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("`_h_message_old` OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])])]),a("ul",[a("li",[s._v("删除触发器")])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v("T10"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("09")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Dropping")]),s._v(" triggers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nDROP TRIGGER IF EXISTS `h_pushcenter`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("`pt_osc_h_pushcenter_h_message_del`\nDROP TRIGGER IF EXISTS `h_pushcenter`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("`pt_osc_h_pushcenter_h_message_upd`\nDROP TRIGGER IF EXISTS `h_pushcenter`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("`pt_osc_h_pushcenter_h_message_ins`\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v("T10"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("09")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Dropped")]),s._v(" triggers OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])])]),a("ul",[a("li",[s._v("完成")])])])}),[],!1,null,null,null);t.default=n.exports}}]);