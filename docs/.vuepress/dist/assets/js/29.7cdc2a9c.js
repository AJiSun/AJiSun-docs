(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{488:function(t,v,s){"use strict";s.r(v);var _=s(18),a=Object(_.a)({},(function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"为什么使用b-树作为索引的数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用b-树作为索引的数据结构"}},[t._v("#")]),t._v(" 为什么使用B+树作为索引的数据结构")]),t._v(" "),s("p",[t._v("索引提高查询效率，就像我们看的书，想要直接翻到某一章，是不是不用一页一页的翻，只需要看下目录，根据目录找到其所在的页数即可。")]),t._v(" "),s("p",[t._v("在计算机中我们需要一种数据结构来存储这个目录，常见数据结构有哈希表，二叉查找树，二叉平衡树(AVL)，红黑树，那为什么Innodb和MyISAM选择b+树呢。")]),t._v(" "),s("h3",{attrs:{id:"哈希表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#哈希表"}},[t._v("#")]),t._v(" 哈希表")]),t._v(" "),s("blockquote",[s("p",[t._v("哈希表就是一个数组+链表，用下标0，1，2，3..... 表示其数据所在的位置。如果想要在哈希表中存放数据，首先用对这个数据进行散列算法（基本的就是取模运算），假如数组长度是13 ，进行模13之后是0-12，正好对应的数据的下标，如果计算出的下标一样的，就会在下标位置跟上链表。")])]),t._v(" "),s("img",{staticStyle:{width:"700px"},attrs:{src:"https://cdn.jsdelivr.net/gh/AJiSun/CDN/mysql-plus/7-hash.gif"}}),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ol",[s("li",[t._v("利用hash存储需要将所有的数据文件添加到内存，比较消耗内存空间。")]),t._v(" "),s("li",[t._v("hash的查找是等值查询，速度很快，但是各个数据间没有范围规律，但在实际工作中更多的是范围查询，hash就不太合适了。")])]),t._v(" "),s("p",[s("strong",[t._v("不能直接说mysql不使用哈希表，而是要根据存储引擎来确定的，Memory存储引擎使用的就是哈希表")])]),t._v(" "),s("h3",{attrs:{id:"二叉查找树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二叉查找树"}},[t._v("#")]),t._v(" 二叉查找树")]),t._v(" "),s("img",{staticStyle:{width:"600px"},attrs:{src:"https://cdn.jsdelivr.net/gh/AJiSun/CDN/mysql-plus/7-binary-tree.gif"}}),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("1. 如图，极端情况可能会出现倾斜的问题，最后变成链表结构。\n2. 造成树节点过深，从而增加查找的IO，而现在IO就是查找的瓶颈\n")])])]),s("h3",{attrs:{id:"二叉平衡树-avl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二叉平衡树-avl"}},[t._v("#")]),t._v(" 二叉平衡树-AVL")]),t._v(" "),s("blockquote",[s("p",[t._v("为了保持树的平衡，避免出现数据倾斜，需要进行旋转操作，通过左旋或者右旋最终保持最长子树和最短子树长度不能超过1，如果超过1就不是严格意义上AVL树了")])]),t._v(" "),s("img",{staticStyle:{width:"600px"},attrs:{src:"https://cdn.jsdelivr.net/gh/AJiSun/CDN/mysql-plus/7-avl-tree.gif"}}),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("p",[t._v("1.当数据量很大的时候，为了保持平衡，需要进行1-n次的旋转，这个旋转是比较浪费性能的，插入和删除效率极低，查询效率很高。")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("只有两个分支，数据量大的时候树的深度依然很深。")])]),t._v(" "),s("h3",{attrs:{id:"红黑树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#红黑树"}},[t._v("#")]),t._v(" 红黑树")]),t._v(" "),s("blockquote",[s("p",[t._v("最长子树的不能超过最短子树的2倍，通过变色和旋转，在插入和查询上做了平衡")]),t._v(" "),s("p",[t._v("红黑树是avl树的变种，损失了部分查询性能来提高插入性能。")])]),t._v(" "),s("img",{staticStyle:{width:"600px"},attrs:{src:"https://cdn.jsdelivr.net/gh/AJiSun/CDN/mysql-plus/7-red-black-tree.gif"}}),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("p",[t._v("​\t同样是只有两个分支，数据量大的时候深度依然会很深")]),t._v(" "),s("p",[s("strong",[t._v("以上三种二叉树，随着数据的增多，最终都会出现节点过多的情况，而且他们有且仅有2个分支，那么IO的次数一样很多")])]),t._v(" "),s("p",[t._v("怎么解决仅有2个分支而且深度过深，这就有了B树，增加分支")]),t._v(" "),s("h3",{attrs:{id:"b-tree"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b-tree"}},[t._v("#")]),t._v(" B-Tree")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("首先不读B减树，读B树")]),t._v(" "),s("li",[t._v("所有键值分布在整棵树中。")]),t._v(" "),s("li",[t._v("搜索有可能在非叶子结点结束，在关键字全集内做一次查找，性能逼近二分查找。")]),t._v(" "),s("li",[t._v("每个结点最多拥有m个子树。")]),t._v(" "),s("li",[t._v("根节点至少有2个子树。")]),t._v(" "),s("li",[t._v("分支节点至少拥有m/2棵子树(除根节点和叶子节点外都是分支节点)。")]),t._v(" "),s("li",[t._v("所有叶子节点都在同一层，每个节点最多可以有m-1个key,并且以升序排列")])])]),t._v(" "),s("img",{staticStyle:{width:"600"},attrs:{src:"https://cdn.jsdelivr.net/gh/AJiSun/CDN/mysql-plus/7-B-tree.png"}}),t._v(" "),s("p",[t._v("如上图：（图中只是画出来一部分，实际上没有限制的，不止p1,p2,p3）")]),t._v(" "),s("p",[t._v("每个节点占用一个磁盘块，一个节点上有两个升序排列的关键字和三个指向子树根节点的指针，指针存储的是子节点所在的磁盘块地址。两个关键词划分成的三个范围域对应三个指针指向的子树的数据的范围域。以根节点为例，关键字为16和34，p1指针指向的子树的数据范围小于16，p2指针指向的子树的数据范围为16-34，p3指针指向的子树的数据范围大于34。")]),t._v(" "),s("p",[t._v("查找关键字28的过程：")]),t._v(" "),s("ol",[s("li",[t._v("根据根节点找到"),s("strong",[t._v("磁盘块1")]),t._v("，读到内存中。【第一次磁盘I/O操作】")]),t._v(" "),s("li",[t._v("比较关键字28在区间(16，34)，找到磁盘块1的指针p2。")]),t._v(" "),s("li",[t._v("根据p2指针找到"),s("strong",[t._v("磁盘块3")]),t._v("，读到内存。【第二次磁盘I/O操作】")]),t._v(" "),s("li",[t._v("比较关键字28在区间(25，31)，找到磁盘块3的指针p2。")]),t._v(" "),s("li",[t._v("根据指针p2找到"),s("strong",[t._v("磁盘块8")]),t._v("，读到内存。【第三次磁盘I/O操作】")]),t._v(" "),s("li",[t._v("在磁盘块8中的关键字列表中找到关键字28，结束。")])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("1. 每个节点都有key，同时包含data，而每个页存储空间是有限的，如果data很大的话会导致每个节点能存储的key的数量变小。\n2. 当存储的数据量很大的时候会导致深度变大，增加查询磁盘的io次数，进而影响查询性能。\n")])])]),s("h3",{attrs:{id:"b-树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b-树"}},[t._v("#")]),t._v(" B+树")]),t._v(" "),s("blockquote",[s("p",[t._v("B+树是在B树的基础上做的一种优化，变化如下：")]),t._v(" "),s("ol",[s("li",[t._v("B+树每个节点可以包含更多的节点，这个做的原因有两个，第一个原因是为了降低树的高度，第二个原因是将数据范围变成多个区间，区间越多，数据检索越快。")]),t._v(" "),s("li",[t._v("非叶子节点存储key，叶子节点存储key和数据。")]),t._v(" "),s("li",[t._v("叶子节点两两指针互相连接(符合磁盘预读的特性)，顺序查询性能更高。")])])]),t._v(" "),s("img",{staticStyle:{width:"600"},attrs:{src:"https://cdn.jsdelivr.net/gh/AJiSun/CDN/mysql-plus/7-B+-tree.png"}}),t._v(" "),s("p",[t._v("如上图：")]),t._v(" "),s("p",[t._v("在B+树上有两个头指针，一个指向根节点，另一个指向关键字的最小叶子节点，而且所有叶子节点(及数据节点)之间是一种链式环结构，因此可以对B+树进行两种查找运算：一种是对于主键的范围查找和分页查找，另一种是从根节点开始的随机查找。")]),t._v(" "),s("h3",{attrs:{id:"innodb和myisam中索引上的差异"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#innodb和myisam中索引上的差异"}},[t._v("#")]),t._v(" InnoDB和MyISAM中索引上的差异")]),t._v(" "),s("h4",{attrs:{id:"innodb-主键索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#innodb-主键索引"}},[t._v("#")]),t._v(" InnoDB-主键索引")]),t._v(" "),s("blockquote",[s("p",[t._v("叶子节点存储的是具体的行数据")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AJiSun/CDN/mysql-plus/3-InnoDB-index-primary.png",alt:"mysql-engines"}})]),t._v(" "),s("h4",{attrs:{id:"innodb-非主键索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#innodb-非主键索引"}},[t._v("#")]),t._v(" InnoDB-非主键索引")]),t._v(" "),s("blockquote",[s("p",[t._v("非主键索引的叶子节点存储的是主键值（所以查询数据基本要回表）")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AJiSun/CDN/mysql-plus/3-InnoDB-index-notPrimary.png",alt:"mysql-engines"}})]),t._v(" "),s("h4",{attrs:{id:"myisam"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#myisam"}},[t._v("#")]),t._v(" MyISAM")]),t._v(" "),s("blockquote",[s("p",[t._v("叶子节点存储的是行数据的地址，额外需要一次寻址，多一次IO")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AJiSun/CDN/mysql-plus/3-MyISAM-index.png",alt:"mysql-engines"}})]),t._v(" "),s("p",[t._v("总结：为什么mysql使用的是B+树")]),t._v(" "),s("blockquote",[s("p",[t._v("准确的表述：为什么mysql的InnoDB和MyISAM存储引擎的索引使用的是B+树")])]),t._v(" "),s("ol",[s("li",[t._v("hash表，等值查询是很快的，但是不满足常用的范围查找且相邻的两个值之间没有关系，而且hash比较消耗内存。")]),t._v(" "),s("li",[t._v("二叉树/平衡二叉树/红黑树等都是有且仅有2个分支，共性就是数据量大的时候树的深度变深，增加IO的次数。")]),t._v(" "),s("li",[t._v("B树会在节点上存储数据，这样一页存放的key的数量就会减少，增加树的深度。")]),t._v(" "),s("li",[t._v("B+树中非叶子节点去除了数据，这样就会页中key的数量，而且叶子节点之间是通过链表相连，有利于范围查找和分页。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);