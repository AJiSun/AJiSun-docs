(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{470:function(a,v,t){"use strict";t.r(v);var _=t(18),r=Object(_.a)({},(function(){var a=this,v=a.$createElement,t=a._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"jvm运行时数据区域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm运行时数据区域"}},[a._v("#")]),a._v(" JVM运行时数据区域")]),a._v(" "),t("p",[a._v("Java虚拟机在执行Java程序的过程中会把它所管理的内存区域划分为不同的数据区域，每个区域都有不同的作用。我们要先了解JVM，就要先对其有个整体了解，知道内存区域是怎么划分，每一块有代表了什么(本文主要是内存区域的几种概念)。")]),a._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AJiSun/CDN/jvm-img/jvm-3-runtime.png"}}),a._v(" "),t("h3",{attrs:{id:"_1-方法区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-方法区"}},[a._v("#")]),a._v(" 1. 方法区")]),a._v(" "),t("p",[a._v("方法区(Method Area) 是一块各个线程共享的内存区域，用于存储"),t("strong",[a._v("被虚拟机加载的类信息")]),a._v("，"),t("strong",[a._v("常量")]),a._v("，"),t("strong",[a._v("静态变量")]),a._v("以及"),t("strong",[a._v("即时编译器编译后的代码")]),a._v("等数据。方法区还有一个别名叫Non-Heap(非堆)，目的应该是和Java堆区分开来。")]),a._v(" "),t("p",[a._v("对于HotSpot虚拟机来说，方法区也被称为永久代，其实本质上两者是不等价的，仅仅是HotSpot虚拟机把GC分代收集扩展到方法区，或者说使用永久代来实现方法区而已，这样HotSpot的垃圾收集器可以像管理Java堆一样管理这部分内存，不需要专门处理方法区的内存管理了。其他虚拟机是没有永久代的概念的，HotSpot也放弃永久代改采用Native Memory来实现方法区的规划了，目前JDK1.7中的HotSpot中，已经把原来存放在永久代的字符串常量池移除。")]),a._v(" "),t("p",[a._v("方法区除了和Java堆一样不需要连续的内存和可以选择固定大小或者可扩展外，还可以选择不实现垃圾收集。")]),a._v(" "),t("p",[a._v("当方法区无法满足内存分配需求时，将抛出OutOfMemoryError 异常。")]),a._v(" "),t("h3",{attrs:{id:"_2-java堆"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-java堆"}},[a._v("#")]),a._v(" 2. Java堆")]),a._v(" "),t("p",[a._v("对于大多数应用来说，Java堆(Java Heap)是Java虚拟机所管理的内在中最大的一块。Java堆是被所有线程共享的一块内在区域，在虚拟机启动时创建。此内存区域的唯一目的就是存放对象实例，几乎所有的对象实例都在这里分配内存。Java虚拟机规范中的描述是：所有类的实例与数组对象都要在堆中分配。随着技术的发展，所有对象都分配在堆上变得不再那么“绝对”了。")]),a._v(" "),t("p",[a._v("Java堆是垃圾收集器作用的主要区域，因此很多时候也被称为GC堆(Garbage Collected Heap)。如果从内存回收的角度看，由于现在的收集器基本都是采用分代收集算法，所以Java堆中还可以更细分一下，具体参考历史文章"),t("strong",[a._v("堆内存分代")]),a._v("。 如果从内存分配的角度看，线程共享的Java堆中可能划分出多个线程私有的分配缓冲区(Thread Local Allocation Buffer, TLAB)。不过无论如何划分，都与存放内容无关，无论哪个区域，存储的仍然是对象实例，进一步划分其目的只是为了更好的回收内存或者更快的分配内存。")]),a._v(" "),t("p",[a._v("根据Java虚拟机规范的规定，Java堆可以处于物理上不连续的内存空间，只要是逻辑上连续的即可。即可以实现成固定大小的，也可以实现成动态扩展与收缩的，不过当前主流的虚拟机都是可以进行动态扩展与收缩的(通过-Xmx与-Xms控制)。如果在堆中没有足够的内存完成实例分配，并且堆也无法再扩展时，将会抛出OutOfMemory错误。")]),a._v(" "),t("h3",{attrs:{id:"_3-java虚拟机栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-java虚拟机栈"}},[a._v("#")]),a._v(" 3. Java虚拟机栈")]),a._v(" "),t("p",[a._v("Java虚拟机栈(Java Virtual Machine Stacks)也是线程私有的，它的生命周期与线程相同。虚拟机栈描述的是Java方法执行的内存模型：每个方法被执行的同时都会创建一个栈桢(Stack Frame)用于存储局部变量表、操作数栈、动态链接、方法出口等信息。每个方法从调用直至执行完成的过程，就对应着一个栈帧在虚拟机栈中的入栈出栈的过程。")]),a._v(" "),t("p",[a._v("在Java虚拟机规范中，对这个区域规定了两种异常状况：")]),a._v(" "),t("p",[a._v("如果线程请求栈深度超过虚拟机允许的深度，虚拟机将会抛出一个StackOverflowError错误；")]),a._v(" "),t("p",[a._v("如果虚拟机栈可以动态扩展(当前大部分虚拟机都可以动态扩展，只不过Java虚拟机规范允许固定长度的虚拟机栈)，当扩展时无法申请到足够的内存或者在创建一条新的线程时没有足够的内存创建一个初始大小的虚拟机栈时，Java虚拟机将抛出OutOfMemoryError错误。")]),a._v(" "),t("h3",{attrs:{id:"_4-本地方法栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-本地方法栈"}},[a._v("#")]),a._v(" 4. 本地方法栈")]),a._v(" "),t("p",[a._v("本地方法栈(Native Method Stacks)和Java虚拟机栈的作用基本是相似的，区别在于Java虚拟机栈是为虚拟机使用Java方法服务的，而本地方法栈则是为虚拟机使用native方法服务的。其是对Java虚拟机重要的扩展，Java虚拟机允许Java通过JNI直接调用本地方法库(C/C++)")]),a._v(" "),t("p",[a._v("Java源码中有很多native方法，Object 是所有Java的父类,Object.java文件中很多方法都是native修饰的 例如："),t("code",[a._v("public native int hashcode()")])]),a._v(" "),t("h3",{attrs:{id:"_5-程序计数器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-程序计数器"}},[a._v("#")]),a._v(" 5. 程序计数器")]),a._v(" "),t("p",[a._v("程序计数器(Program Counter Register) 是一块较小的内存区域，也是线程私有的。它可以看作是当前线程所执行的字节码的行号指令器。字节码解释器工作时就是通过改为这个计数器的值来选取下一条需要执行的字节码指令，分支、循环、跳转、异常处理、线程恢复等基础功能都需要依赖这个计数器来完成。")]),a._v(" "),t("p",[a._v("Java虚拟机的多线程是通过线程轮流切换CPU时间片的方式实现的，在任何一个确定的时刻，一个处理器(对于多核处理器来说是一个内核)都只会执行一条线程中的指令。因此为了线程切换后能够恢复到正确的执行位置，每个线程都需要一个独立的程序计数器且互不影响，独立存储。")]),a._v(" "),t("p",[a._v("如果线程正在执行的是一个Java方法，这个计数器记录的是正在执行的虚拟机字节码指令的地址；如果正在执行的是一个Native方法，这个计数器的值为空(Undefined)。此内存区域是唯一一个在Java虚拟机器中没有规定任何OutOfMemoryError的区域。")]),a._v(" "),t("h3",{attrs:{id:"_6-运行时常量池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-运行时常量池"}},[a._v("#")]),a._v(" 6. 运行时常量池")]),a._v(" "),t("p",[a._v("运行时常量池(Runtime Contant Pool)是方法区的一部分。class方法中除了有类的版本、字段、方法、接口等描述信息外，还有一项信息是常量表(Constant Pool Table)，用于存储编译期生成的各种字面量和符号引用，这部分内容将在类加载后存放到方法区的运行时常量池中。")]),a._v(" "),t("p",[a._v("运行时常量池相对于class文件常量池的一个重要特征就是具备动态性，Java语言并不要求常量一定只能在编译期产生，也就是并非预置入class方法中的常量池中的内容才能进入到方法区的运行时常量池，程序运行期间也可以将新的常量放入常量池中，例如String类的intern()方法。")]),a._v(" "),t("p",[a._v("因为运行时常量池是方法区的一部分，所以也会受到方法区内存大小的限制，当常量池无法再申请到内存时会抛出OutOfMemory异常。")]),a._v(" "),t("h3",{attrs:{id:"_7-直接内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-直接内存"}},[a._v("#")]),a._v(" 7. 直接内存")]),a._v(" "),t("p",[a._v('直接内存(Direct Memory)并不是虚拟机运行时数据区的一部分，也不是Java虚拟机规范中定义的内存区域，但是这部分内存也被频繁地使用，而且也可能导致OutOfMemoryError错误出现。垃圾进行收集时，虚拟机虽然会对直接内存进行回收，但却不能像新生代与老年代那样，发现空间不足了就通知收集器进行垃圾回收，它只能等到老年代满了后FullGC时，然后"顺便"清理掉直接内存中废弃的对象。')]),a._v(" "),t("p",[a._v("在JDK1.4中新加入了NIO，引入了一种基于通道(Channel)与缓冲区(Buffer)的I/O方法，它可以使用Native函数库直接分配堆外内存，然后通过一个存储在Java堆里面的DirectByteBuffer对象作为这块内存的引用进行操作。这样能在一些场景中显著提高性能，因为避免了在Java堆和Native堆中来回复制数据。")]),a._v(" "),t("p",[a._v("本机直接内存的分配不会受到Java堆大小的限制，但是会受到本机总内存大小以及处理器寻址空间的限制。")]),a._v(" "),t("p",[a._v("运行时数据区主要是前5种 "),t("strong",[a._v("方法区")]),a._v("，"),t("strong",[a._v("Java堆")]),a._v("，"),t("strong",[a._v("Java虚拟机栈")]),a._v("，"),t("strong",[a._v("本地方法栈")]),a._v("，"),t("strong",[a._v("程序计数器")]),a._v("，后面两种"),t("strong",[a._v("运行时常量池")]),a._v("可以归结在方法区中，而"),t("strong",[a._v("直接内存")]),a._v("其实不属于运行时数据区的一部分。")]),a._v(" "),t("p",[a._v("参考《深入理解Java虚拟机》，《实战Java虚拟机》")])])}),[],!1,null,null,null);v.default=r.exports}}]);