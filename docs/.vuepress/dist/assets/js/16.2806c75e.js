(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{475:function(s,a,t){"use strict";t.r(a);var e=t(18),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"虚拟机性能监控基础工具-jstat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机性能监控基础工具-jstat"}},[s._v("#")]),s._v(" 虚拟机性能监控基础工具-jstat")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AJiSun/CDN/jvm-img/jvm-9.png",alt:"图片"}})]),s._v(" "),t("p",[s._v("上一篇文章我们说了其他几个虚拟机的命令及其含义，本文来单独说下命令"),t("strong",[s._v("jstat")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"jstat-查看虚拟机运行时信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jstat-查看虚拟机运行时信息"}},[s._v("#")]),s._v(" jstat: 查看虚拟机运行时信息")]),s._v(" "),t("p",[t("strong",[s._v("jstat(JVM Statistics Monitoring Tool)")]),s._v(" 是用于监视虚拟机各种运行状态信息的命令工具。是比较强大的，可以用来查看堆信息的详细情况。")]),s._v(" "),t("p",[s._v("使用语法如下(自己可以用命令 jstat -help看看)")]),s._v(" "),t("blockquote",[t("p",[s._v("jstat -{option} [-t] [-h{lines}] {vmid} [{interval} [{count}]]")])]),s._v(" "),t("ul",[t("li",[s._v("选项option\n"),t("ul",[t("li",[s._v("-class: 监视类装载、卸载数量、中空间及类装载所耗费的时间。")]),s._v(" "),t("li",[s._v("-compiler: 显示JIT编译的相关信息。")]),s._v(" "),t("li",[s._v("-gc: 监视Java堆状况，包括Eden区、2个Survivor区、老年代、永久代等容量、已用空间、GC合计时间等信息。")]),s._v(" "),t("li",[s._v("-gccapacity: 监视内容与-gc基本相同，但输出主要关注java堆各区域使用到的最大和最小空间。")]),s._v(" "),t("li",[s._v("-gcutil: 监控内容与-gc基本相同，但输出主要关注已使用空间占总空间的百分比。")]),s._v(" "),t("li",[s._v("-gccause: 与-gcutil功能一样，但是会额外输出导致上一次GC产生的原因。")]),s._v(" "),t("li",[s._v("-gcnew: 监视新生代GC的状况。")]),s._v(" "),t("li",[s._v("-gcnewcapacity: 监视内容与-gcnew基本相同，输出主要关注使用到的最大和最小空间。")]),s._v(" "),t("li",[s._v("-gcold: 监视老年代垃圾收集状况。")]),s._v(" "),t("li",[s._v("-gcoldcapacity: 视内容与-gcold基本相同，输出主要关注使用到的最大和最小空间。")]),s._v(" "),t("li",[s._v("-gcmetacapacity: 输出元空间使用到的最大和最小空间。")]),s._v(" "),t("li",[s._v("-printcompilation: 输出已被JIT编译的方法。")])])]),s._v(" "),t("li",[s._v("-t 参数可以在输出信息前加上一个Timestamp列，显示程序的运行时间。")]),s._v(" "),t("li",[s._v("-h 参数可以在周期性数据输出时，输出多少行数据后，跟着输出一个表头信息。")]),s._v(" "),t("li",[s._v("interval 参数用于指定输出统计数据的周期，单位是毫秒。")]),s._v(" "),t("li",[s._v("count 参数用于指定一共输出多少次数据。")])]),s._v(" "),t("blockquote",[t("p",[s._v("参数interval和count代表查询间隔和次数，如果省略这2个参数，说明只查询一次。假设需要每250毫秒查询一次进程537垃圾收集状况，一共查询20次，命令应该是：jstat -gc 537  250  20")])]),s._v(" "),t("h3",{attrs:{id:"_1-如下输出java进程537的类信息-class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-如下输出java进程537的类信息-class"}},[s._v("#")]),s._v(" 1. 如下输出Java进程537的类信息：-class")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ajisun@ajisun-2 /"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" jstat -class  -t "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537")]),s._v("\nTimestamp       Loaded  Bytes  Unloaded  Bytes     Time   \n       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("839950.5")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1888")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3788.9")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.80")]),s._v("\n")])])]),t("p",[s._v("在上面输出的内容中 Loaded表示载入类的数量，Bytes表示载入类的合计大小，Unloaded表示卸载类的数量，接着后面一个Bytes表示卸载类的大小，Time表示在加载和卸载类上所花费的时间。")]),s._v(" "),t("h3",{attrs:{id:"_2-查看jit编译的信息-compiler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看jit编译的信息-compiler"}},[s._v("#")]),s._v(" 2. 查看JIT编译的信息：-compiler")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ajisun@ajisun-2 /"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" jstat -compiler "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537")]),s._v("\nCompiled Failed Invalid   Time   FailedType FailedMethod\n     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("992")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.63")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" java/util/jar/Attributes "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v("\n")])])]),t("ul",[t("li",[s._v("Compiled：编译数量。")]),s._v(" "),t("li",[s._v("Failed：失败数量")]),s._v(" "),t("li",[s._v("Invalid：不可用数量")]),s._v(" "),t("li",[s._v("Time：编译总时间")]),s._v(" "),t("li",[s._v("FailedType：最后一次编译失败的类型")]),s._v(" "),t("li",[s._v("FailedMethod：最后一次编译失败的类名和方法名")])]),s._v(" "),t("h3",{attrs:{id:"_3-显示gc的命令和相关的输出-gc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-显示gc的命令和相关的输出-gc"}},[s._v("#")]),s._v(" 3. 显示gc的命令和相关的输出：-gc")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ajisun@ajisun-2 /"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" jstat -gc "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537")]),s._v("              \nS0C    S1C    S0U    S1U      EC       EU        OC         OU       MC     MU    CCSC   CCSU   YGC     YGCT    FGC    FGCT     GCT   \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512.0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512.0")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("96.0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31232.0")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6247.0")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("175104.0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2688.4")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11904.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11467.9")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1408.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1266.3")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("247")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.518")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.518")]),s._v("\n")])])]),t("ul",[t("li",[s._v("S0C : 年轻代中第一个survior（幸存区）的容量（kb）")]),s._v(" "),t("li",[s._v("S1C : 年轻代中第二个survior（幸存区）的容量（kb）")]),s._v(" "),t("li",[s._v("S0U : 年轻代中第一个survior（幸存区）目前已使用的容量（kb）")]),s._v(" "),t("li",[s._v("S1U : 年轻代中第二个survior（幸存区）目前已使用的容量（kb）")]),s._v(" "),t("li",[s._v("EC : eden区的容量（kb）")]),s._v(" "),t("li",[s._v("EU : eden区目前已使用的容量（kb）")]),s._v(" "),t("li",[s._v("OC : 老年代的容量（kb）")]),s._v(" "),t("li",[s._v("OU : 老年代目前已使用的容量（kb）")]),s._v(" "),t("li",[s._v("MC : 元数据区的容量（kb）")]),s._v(" "),t("li",[s._v("MU : 元数据区目前已使用的容量（kb）")]),s._v(" "),t("li",[s._v("CCSC : 压缩类空间大小（kb）")]),s._v(" "),t("li",[s._v("CCSU : 压缩类空间使用大小（kb）")]),s._v(" "),t("li",[s._v("YGC : 从应用程序启动到采集时年轻代中gc次数")]),s._v(" "),t("li",[s._v("YGCT : 从应用程序启动到采集时年轻代中gc所用时间（秒）")]),s._v(" "),t("li",[s._v("FGC : 从应用程序启动到采集时老年代中gc次数")]),s._v(" "),t("li",[s._v("FGCT : 从应用程序启动到采集时老年代gc所用的时间（秒）")]),s._v(" "),t("li",[s._v("GCT : 从应用程序启动到采集时gc所用的总时间（秒）")])]),s._v(" "),t("blockquote",[t("p",[s._v("号外 : 之前的PC 和PU 被MC MU取代了，而且增加了CCSC ，CCSU")])]),s._v(" "),t("h3",{attrs:{id:"_4-查看java堆的各个代当前大小以及其最大值最小值-gccapacity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-查看java堆的各个代当前大小以及其最大值最小值-gccapacity"}},[s._v("#")]),s._v(" 4. 查看Java堆的各个代当前大小以及其最大值最小值：-gccapacity")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ajisun@ajisun-2 /"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" jstat -gccapacity "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537")]),s._v(" \nNGCMN    NGCMX     NGC     S0C   S1C       EC      OGCMN      OGCMX       OGC         OC       MCMN     MCMX      MC     CCSMN    CCSMX     CCSC    YGC    FGC \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("87040.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1397760.0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("87040.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10752.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10752.0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536.0")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("175104.0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2796544.0")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("175104.0")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("175104.0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1060864.0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11904.0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1048576.0")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1408.0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),t("ul",[t("li",[s._v("NGCMN：新生代最小容量（kb）")]),s._v(" "),t("li",[s._v("NGCMX：新生代最大容量（kb）")]),s._v(" "),t("li",[s._v("NGC：当前新生代容量（kb）")]),s._v(" "),t("li",[s._v("S0C：第一个幸存区大小（kb）")]),s._v(" "),t("li",[s._v("S1C：第二个幸存区的大小（kb）")]),s._v(" "),t("li",[s._v("EC：伊甸园区的大小（kb）")]),s._v(" "),t("li",[s._v("OGCMN：老年代最小容量（kb）")]),s._v(" "),t("li",[s._v("OGCMX：老年代最大容量（kb）")]),s._v(" "),t("li",[s._v("OGC ：当前老年代大小（kb）")]),s._v(" "),t("li",[s._v("OC : 当前老年代大小（kb）")]),s._v(" "),t("li",[s._v("MCMN: 最小元数据容量（kb）")]),s._v(" "),t("li",[s._v("MCMX：最大元数据容量（kb）")]),s._v(" "),t("li",[s._v("MC：当前元数据空间大小（kb）")]),s._v(" "),t("li",[s._v("CCSMN：最小压缩类空间大小（kb）")]),s._v(" "),t("li",[s._v("CCSMX：最大压缩类空间大小（kb）")]),s._v(" "),t("li",[s._v("CCSC：当前压缩类空间大小（kb）")]),s._v(" "),t("li",[s._v("YGC：年轻代gc次数")]),s._v(" "),t("li",[s._v("FGC：老年代GC次数")])]),s._v(" "),t("h3",{attrs:{id:"_5-已使用空间占总空间的百分比-gcutil"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-已使用空间占总空间的百分比-gcutil"}},[s._v("#")]),s._v(" 5. 已使用空间占总空间的百分比：-gcutil")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ajisun@ajisun-2 /"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" jstat -gcutil "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537")]),s._v(" \nS0     S1     E      O      M     CCS    YGC     YGCT    FGC    FGCT     GCT   \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("57.42")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28.14")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.02")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("95.16")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("89.32")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.015")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.015")]),s._v("\n")])])]),t("ul",[t("li",[s._v("S0：幸存1区当前使用比例")]),s._v(" "),t("li",[s._v("S1：幸存2区当前使用比例")]),s._v(" "),t("li",[s._v("E：伊甸园区使用比例")]),s._v(" "),t("li",[s._v("O：老年代使用比例")]),s._v(" "),t("li",[s._v("M：元数据区使用比例")]),s._v(" "),t("li",[s._v("CCS：压缩使用比例")]),s._v(" "),t("li",[s._v("YGC：年轻代垃圾回收次数")]),s._v(" "),t("li",[s._v("YGCT：年轻代中gc所用时间（秒）")]),s._v(" "),t("li",[s._v("FGC：老年代垃圾回收次数")]),s._v(" "),t("li",[s._v("FGCT：老年代垃圾回收消耗时间")]),s._v(" "),t("li",[s._v("GCT：垃圾回收消耗总时间")])]),s._v(" "),t("h3",{attrs:{id:"_6-显示最近一次gc的原因以及当前gc的原因-gccause"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-显示最近一次gc的原因以及当前gc的原因-gccause"}},[s._v("#")]),s._v(" 6. 显示最近一次GC的原因以及当前GC的原因：-gccause")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ajisun@ajisun-2 /"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" jstat -gccause "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537")]),s._v(" \nS0     S1     E      O      M     CCS    YGC     YGCT    FGC    FGCT     GCT    LGCC                 GCC                 \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("57.42")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31.48")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.02")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("95.16")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("89.32")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.015")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.015")]),s._v(" Allocation Failure   No GC \n")])])]),t("ul",[t("li",[s._v("LGCC：上次GC的原因")]),s._v(" "),t("li",[s._v("GCC：当前GC的原因")])]),s._v(" "),t("p",[s._v("其他输出含义请参考"),t("code",[s._v("-gcutil")]),s._v(","),t("code",[s._v("-gc")])]),s._v(" "),t("h3",{attrs:{id:"_7-查看新生代gc的状况-gcnew"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-查看新生代gc的状况-gcnew"}},[s._v("#")]),s._v(" 7. 查看新生代GC的状况：-gcnew")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ajisun@ajisun-2 /"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" jstat -gcnew "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537")]),s._v("\nS0C    S1C    S0U    S1U   TT MTT  DSS      EC       EU     YGC     YGCT  \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10752.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10752.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6173.9")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10752.0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536.0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21728.3")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.015")]),s._v("\n")])])]),t("ul",[t("li",[s._v("TT：新生代对象晋升到老年代对象的年龄")]),s._v(" "),t("li",[s._v("MTT：新生代对象晋升到老年代对象的年龄最大值")]),s._v(" "),t("li",[s._v("DSS：需要的幸存区大小")])]),s._v(" "),t("p",[s._v("其他输出含义请参考"),t("code",[s._v("-gcutil")]),s._v(","),t("code",[s._v("-gc")])]),s._v(" "),t("h3",{attrs:{id:"_8-查看新生代各个区的大小信息-gcnewcapacity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-查看新生代各个区的大小信息-gcnewcapacity"}},[s._v("#")]),s._v(" 8. 查看新生代各个区的大小信息：-gcnewcapacity")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ajisun@ajisun-2 /"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" jstat -gcnewcapacity "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537")]),s._v("\nNGCMN      NGCMX       NGC      S0CMX     S0C     S1CMX     S1C       ECMX        EC      YGC   FGC \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("87040.0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1397760.0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("87040.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("465920.0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10752.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("465920.0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10752.0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1396736.0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536.0")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),t("ul",[t("li",[s._v("S0CMX：s0区的最大值(kb)")]),s._v(" "),t("li",[s._v("S1CMX：s1区的最大值(kb)")]),s._v(" "),t("li",[s._v("ECMX：伊甸园区最大值(kb)")])]),s._v(" "),t("p",[s._v("其他输出含义请参考"),t("code",[s._v("-gcutil")]),s._v(","),t("code",[s._v("-gc")])]),s._v(" "),t("h3",{attrs:{id:"_9-查看老年代gc状况-gcold"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-查看老年代gc状况-gcold"}},[s._v("#")]),s._v(" 9. 查看老年代GC状况：-gcold")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ajisun@ajisun-2 /"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" jstat -gcold "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537")]),s._v("\nMC       MU      CCSC     CCSU       OC          OU       YGC    FGC    FGCT     GCT   \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11904.0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11328.4")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1408.0")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1257.7")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("175104.0")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32.0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.015")]),s._v("\n")])])]),t("p",[s._v("具体输出含义请参考"),t("code",[s._v("-gcutil")]),s._v(","),t("code",[s._v("-gc")])]),s._v(" "),t("h3",{attrs:{id:"_10-查看老年代的容量信息-gcoldcapacity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-查看老年代的容量信息-gcoldcapacity"}},[s._v("#")]),s._v(" 10. 查看老年代的容量信息：-gcoldcapacity")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ajisun@ajisun-2 /"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" jstat -gcoldcapacity "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537")]),s._v("\nOGCMN       OGCMX        OGC         OC       YGC   FGC    FGCT     GCT   \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("175104.0")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2796544.0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("175104.0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("175104.0")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.015")]),s._v("\n")])])]),t("p",[s._v("具体输出含义请参考"),t("code",[s._v("-gcutil")]),s._v(","),t("code",[s._v("-gc")])]),s._v(" "),t("h3",{attrs:{id:"_11-查看元空间的使用情况-gcmetacapacity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-查看元空间的使用情况-gcmetacapacity"}},[s._v("#")]),s._v(" 11.  查看元空间的使用情况：-gcmetacapacity")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ajisun@ajisun-2 /"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" jstat -gcmetacapacity "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537")]),s._v("\nMCMN       MCMX        MC       CCSMN      CCSMX       CCSC     YGC   FGC    FGCT     GCT   \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1060864.0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11904.0")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1048576.0")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1408.0")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.015")]),s._v("\n")])])]),t("p",[s._v("具体输出含义请参考"),t("code",[s._v("-gcutil")]),s._v(","),t("code",[s._v("-gc")])]),s._v(" "),t("h3",{attrs:{id:"_12-输出已被即时编译的方法-printcompilation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-输出已被即时编译的方法-printcompilation"}},[s._v("#")]),s._v(" 12. 输出已被即时编译的方法：-printcompilation")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ajisun@ajisun-2 /"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" jstat -printcompilation "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537")]),s._v("\nCompiled  Size  Type Method\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1008")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("38")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("   java/util/concurrent/TimeUnit"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v(" toNanos\n")])])]),t("ul",[t("li",[s._v("Compiled：最近编译方法的数量")]),s._v(" "),t("li",[s._v("Size：最近编译方法的字节码数量")]),s._v(" "),t("li",[s._v("Type：最近编译方法的编译类型。")]),s._v(" "),t("li",[s._v("Method：方法名标识。")])]),s._v(" "),t("blockquote",[t("p",[s._v("号外：jstat命令可以详细的查看Java应用程序堆的使用情况以及GC情况")])])])}),[],!1,null,null,null);a.default=r.exports}}]);