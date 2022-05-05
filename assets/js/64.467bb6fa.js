(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{549:function(t,r,e){"use strict";e.r(r);var a=e(21),v=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"重构单体应用为微服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重构单体应用为微服务"}},[t._v("#")]),t._v(" 重构单体应用为微服务")]),t._v(" "),e("p",[t._v("你正忙于大型复杂的单体应用上，这是相当不错的机会。然而，你开发和部署应用的日常操作是缓慢而痛苦的。微服务似乎是一个遥不可及的天堂。幸运的是，有一些策略可以帮你逃离单体应用的地狱。在本文中，我将描述如何将单体应用逐渐重构为一组微服务。")]),t._v(" "),e("p",[e("a",{attrs:{id:"overview-of-refactoring-to-microservices"}})]),t._v(" "),e("h2",{attrs:{id:"微服务重构概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微服务重构概述"}},[t._v("#")]),t._v(" 微服务重构概述")]),t._v(" "),e("p",[t._v("单体应用转换为微服务的过程是"),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Software_modernization",target:"_blank",rel:"noopener noreferrer"}},[t._v("应用现代化"),e("OutboundLink")],1),t._v("的一种形式。这是几十年来开发人员一直在做的事情。因此，在将应用重构为微服务时，有一些想法是可以重用的。")]),t._v(" "),e("p",[t._v('一个不要使用的策略是「爆炸式」重写。就是你将所有的开发工作都集中在从头开始构建新的基于微服务的应用。虽然这听起来很吸引人，但非常危险，有可能会失败.据 Martin Fowler 讲到：「爆炸式重写的唯一保证就是大爆炸！」（"the only thing a Big Bang rewrite guarantees is a Big Bang!"）。')]),t._v(" "),e("p",[t._v("你应该逐步重构单体应用，而不是通过爆炸式重写来实现。你可以逐渐添加新功能，并以微服务的形式创建现有功能的扩展 —— 以互补的形式修改单体应用，并且与单体应用共同运行。随着时间推移，单体应用实现的功能量会慢慢减少，直到它完全消失或变成另一个微服务。这种策略类似于在 70 公里/小时的高速公路上维修一辆汽车，很有挑战性，但至少比尝试爆炸式重写的风险要小得多。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/7.png",alt:""}})]),t._v(" "),e("p",[t._v("Martin Fowler 将这种应用现代化策略称为"),e("a",{attrs:{href:"http://www.martinfowler.com/bliki/StranglerApplication.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("绞杀者应用"),e("OutboundLink")],1),t._v("（Strangler Application）。这个名字来自发现于热带雨林中的葡萄树（也称为绞杀榕）。一棵葡萄树生长在一棵树上，以获取森林冠层之上的阳光。有时，树死了，留下一条树形的腾。应用现代化也遵循相同的模式。我们将围绕遗留应用来构建一个由微服务组成的新应用，遗留应用将慢慢缩小最终消亡。")]),t._v(" "),e("p",[t._v("让我们来看看能做到这点的策略。")]),t._v(" "),e("p",[e("a",{attrs:{id:"strategy-1-Stop-digging"}})]),t._v(" "),e("h2",{attrs:{id:"策略一-停止挖掘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#策略一-停止挖掘"}},[t._v("#")]),t._v(" 策略一：停止挖掘")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Law_of_holes",target:"_blank",rel:"noopener noreferrer"}},[t._v("洞穴定律"),e("OutboundLink")],1),t._v("讲到，当你身处在一个洞穴中时，你应该停止挖掘。当你的单体应用变得难以管理时，这是一个不错的建议。换句话说，你应该停止扩张，避免使单体变得更大。这意味着当你要实现新功能时，你就不应该向单体添加更多的代码。相反，这一策略的主要思想是将新代码放到独立的微服务中。")]),t._v(" "),e("p",[t._v("应用此方法后，系统架构如图 7-1 所示。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/7-1.png",alt:""}})]),t._v(" "),e("p",[t._v("除了新服务和遗留的单体应用，还有另外两个组件。第一个是请求路由，它处理传入的（HTTP）请求，类似于"),e("RouterLink",{attrs:{to:"/01.后端/05.设计模式和架构/2-using-an-api-gateway.html"}},[t._v("第二章")]),t._v("中描述的 API 网关。路由向新服务发送与新功能相对应的请求。它将遗留系统的请求路由到单体应用。")],1),t._v(" "),e("p",[t._v("另一个组件是粘合代码，它将微服务与单体应用集成。服务很少孤立存在，通常需要访问单体应用的数据。位于单体应用、微服务或两者中间的粘合代码负责数据集成。该微服务使用粘合代码来读取和写入单体应用数据。")]),t._v(" "),e("p",[t._v("服务可以使用三种策略来访问单体应用的数据：")]),t._v(" "),e("ul",[e("li",[t._v("调用由单体应用提供的远程 API")]),t._v(" "),e("li",[t._v("直接访问单体应用的数据库")]),t._v(" "),e("li",[t._v("维护自己的数据副本，与单体应用的数据库同步")])]),t._v(" "),e("p",[t._v("粘合代码有时被称为防护层（anti-corruption layer）。这是因为粘合代码阻止了服务被遗留的单体应用领域模型的概念所污染，这些服务拥有属于自己的新领域模型。粘合代码在两种不同的模型之间转换。防护层一词最初出现在埃里克·埃文斯（Eric Evans）所著的必读图书"),e("a",{attrs:{href:"http://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215/ref=sr_1_1?ie=UTF8&s=books&qid=1238687848&sr=8-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("《领域驱动设计》"),e("OutboundLink")],1),t._v("（Domain Driven Design）中，并在"),e("a",{attrs:{href:"http://docs.scala-lang.org/overviews/core/futures.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("白皮书"),e("OutboundLink")],1),t._v("中进行了改进。开发一个防护层并不是一件简单的事。但是，如果你想要从单体应用地狱中走出来，这是必不可少的步骤。")]),t._v(" "),e("p",[t._v("使用轻量级服务来实现新功能有几个好处。它防止单体变得更加难以管理。该服务可以独立于单体应用开发、部署和扩展。可让你创建的每个新服务体验到微服务架构的优势。")]),t._v(" "),e("p",[t._v("然而，这种方法没有解决单体应用的问题。要解决这些问题，你需要分解单体应用。让我们来看看这样做的策略。")]),t._v(" "),e("p",[e("a",{attrs:{id:"strategy-2-split-frontend-and-backend"}})]),t._v(" "),e("h2",{attrs:{id:"策略二-前后端分离"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#策略二-前后端分离"}},[t._v("#")]),t._v(" 策略二：前后端分离")]),t._v(" "),e("p",[t._v("缩小单体应用的一个策略是从业务逻辑层和数据访问层拆分出表现层。一个典型的企业应用由至少三种不同类型的组件组成：")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("表现层（Presentation Layer，PL）")])]),t._v(" "),e("p",[t._v("处理 HTTP 请求并实现（REST）API 或基于 HTML 的 Web UI 组件。在有复杂用户界面的应用中，表现层通常存在大量代码。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("业务逻辑层（Business Logic Layer，BLL）")])]),t._v(" "),e("p",[t._v("作为应用核心，实现业务规则的组件。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("数据访问层（Data Access Layer，DAL）")])]),t._v(" "),e("p",[t._v("数据访问基础设施组件，如数据库和消息代理。")])])]),t._v(" "),e("p",[t._v("表现逻辑部分与业务和数据访问逻辑部分之间通常有一个清晰的界限。业务层有由一个或多个门面组成的粗粒度 API，其封装了业务逻辑组件。这个 API 是一个天然边界，你可以沿着该边界将单体应用拆分成两个较小的应用。一个应用包含表现层。另一个应用包含业务和数据访问逻辑。分割后，表现逻辑应用远程调用业务逻辑应用。")]),t._v(" "),e("p",[t._v("重构之前和之后的架构如图 7-2 所示。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/7-2.png",alt:""}})]),t._v(" "),e("p",[t._v("以这种方式拆分单体应用有两个主要优点。它使你能够独立于彼此开发、部署和扩展这两个应用。特别是它允许表现层开发人员在用户界面上快速迭代，并且可以轻松执行 A/B 测试。这种方法的另一个优点是它暴露了可以被微服务调用的远程 API。")]),t._v(" "),e("p",[t._v("然而，这一策略只是一个局部解决方案。两个应用中的一个或两个很可能在将来会膨胀成一个无法管理的单体应用。你需要使用第三种策略来继续缩小单体应用。")]),t._v(" "),e("p",[e("a",{attrs:{id:"strategy-3-extract-services"}})]),t._v(" "),e("h2",{attrs:{id:"策略三-提取服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#策略三-提取服务"}},[t._v("#")]),t._v(" 策略三：提取服务")]),t._v(" "),e("p",[t._v("第三个重构策略是将庞大的现有模块转变为独立的微服务。每次提取一个模块并将其转换成微服务时，单体就会缩小。一旦你转换了足够多的模块，单体应用将不再是问题。它将完全消失，或者变得小到可以被当做一个服务看待。")]),t._v(" "),e("p",[e("a",{attrs:{id:"prioritizing-which-modules-to-convert-into-services"}})]),t._v(" "),e("h3",{attrs:{id:"优先将哪些模块转换为微服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优先将哪些模块转换为微服务"}},[t._v("#")]),t._v(" 优先将哪些模块转换为微服务")]),t._v(" "),e("p",[t._v("一个庞大而复杂的单体应用由几十个或几百个模块组成，所有模块都是待提取部分。弄清楚要先转换哪些模块往往是件令人头疼的事。一个好的方法是从容易提取的几个模块开始。这样可以给你的微服务开发带较好的体验，特别是在提取方面。之后，你应该提取那些能给你最大收益的模块。")]),t._v(" "),e("p",[t._v("将模块转换为服务通常是耗时的，可按照你将获得的收益对模块进行排列。优先考虑提取频繁更改的模块。一旦将模块转换为服务，你就可以独立于单体应用开发和部署，加快开发工作。")]),t._v(" "),e("p",[t._v("也有可以优先考虑提取单体应用中相对耗资源的模块。例如，将有一个使用到内存数据库的模块转换为服务，这样可以部署到有大量内存的主机上。同样，提取实现了大量复杂算法的模块也是值得的，因为该服务可以部署到有大量 CPU 的主机上。通过将有特定资源需求的模块转换为服务，你可以使应用更加容易、廉价地扩展。")]),t._v(" "),e("p",[t._v("当找到要提取的模块时，寻找现有的粗粒度边界（又称为接缝）。它们使模块转成服务更加容易。有关这种边界的一个例子是一个仅通过异步消息与应用的其他部分进行通信的模块。将该模块转变为微服务相对比较廉价和简单。")]),t._v(" "),e("p",[e("a",{attrs:{id:"how-to-extract-a-module"}})]),t._v(" "),e("h2",{attrs:{id:"如何提取模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何提取模块"}},[t._v("#")]),t._v(" 如何提取模块")]),t._v(" "),e("p",[t._v("提取模块的第一步，在模块和单体应用之间定义一个粗粒度的接口。它可能是一个双向 API，因为单体应用需要服务的数据，反之亦然。由于该模块和应用的其它模块之间存在着复杂的依赖关系和细粒度的交互模式，因此实现这样的 API 存在一定的难度。领域模型类之间存在众多关联，重构使用"),e("a",{attrs:{href:"http://martinfowler.com/eaaCatalog/domainModel.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("领域模型模式"),e("OutboundLink")],1),t._v("实现的业务逻辑更加困难。你需要进行大量的代码更改才能打破这些依赖。图 7-3 展示了重构。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Ezuy-Lee/RainzeDrawingBed/media/7-3.png",alt:""}})]),t._v(" "),e("p",[t._v("一旦实现了粗粒度的接口，你就可以将模块变成独立的服务。要做到这点，你必须编写代码使单体应用和服务可通过进程间通信（IPC）机制的 API 进行通信。图 7-3 显示了重构前、重构中和重构后的架构。")]),t._v(" "),e("p",[t._v("在此例中，模块 Z 是要提取的候选模块。它被模块 X 调用，并且它调用了模块 Y。第一个重构步骤是定义一对粗粒度的 API。第一个接口是一个使用模块 X 来调用模块 Z 的入站接口。第二个接口是一个使用模块 Z 调用模块 Y 的出站接口。")]),t._v(" "),e("p",[t._v("第二个重构步骤是将模块转换为一个独立服务。入站和出站接口使用 IPC 机制的代码来实现。你很可能需要将 Module Z 与 "),e("a",{attrs:{href:"http://microservices.io/patterns/microservice-chassis.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("微服务框架"),e("OutboundLink")],1),t._v(" 框架相结合来构建服务，该框架负责处理诸如服务发现之类的横切点。")]),t._v(" "),e("p",[t._v("一旦你提取了一个模块，你就可以独立于单体应用和其他服务进行开发、部署和扩展服务。你甚至可以从头开始重写服务。在这种情况下，整合服务与单体应用的 API 代码成为在两个领域模型之间转换的防护层。每次提取服务时，你都会朝微服务的方向迈近一步。随着时间的推移，单体将缩小，你将拥有越来越多的微服务。")]),t._v(" "),e("p",[e("a",{attrs:{id:"summary"}})]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("将现有应用迁移到微服务的过程是应用现代化的一种形式。你不应该从头开始重写你的应用来迁移到微服务。相反，你应该将应用逐渐重构为一组微服务。可以使用这三种策略：将新功能实现为微服务；从业务组件和数据访问组件中分离出表现组件；将单体中的现有模块转换为服务。随着重构工作不断进行，微服务的数量将会增长，开发团队的灵活性和速度也同样会得到提升。")]),t._v(" "),e("p",[e("a",{attrs:{id:"microservices-in-action"}})]),t._v(" "),e("h2",{attrs:{id:"微服务实战-使用-nginx-征服单体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微服务实战-使用-nginx-征服单体"}},[t._v("#")]),t._v(" 微服务实战：使用 NGINX 征服单体")]),t._v(" "),e("p",[t._v("如本章所述，将单体转换为微服务可能是一个缓慢而困难的过程，但这同样有许多好处。使用 NGINX，你可以在实际开始转换过程之前获得微服务器的部分优势。")]),t._v(" "),e("p",[t._v("你可以通过将 NGINX 放在你现有的单体应用之前，以节省迁移微服务所花费的大量时间。以下简要说明与微服务相关的好处：")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("更好地支持微服务")])]),t._v(" "),e("p",[t._v("如第五章尾栏所述，NGINX 和 "),e("a",{attrs:{href:"https://www.nginx.com/products/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NGINX Plus"),e("OutboundLink")],1),t._v(" 有利于开发基于微服务的应用的功能。当你开始重新设计单体应用时，结合 NGINX 的功能，你的微服务将执行得更好、更易于管理。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("跨环境的功能抽象")])]),t._v(" "),e("p",[t._v("从你管理的服务器甚至是各种公共云、私有云和混合云上将功能迁移，将 NGINX 作为反向代理服务器可以减少部署到新环境中的设施数量的变化。这补充扩展了微服务所固有的灵活性。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("NGINX 微服务参考架构可用性")])]),t._v(" "),e("p",[t._v("当你迁移到 NGINX 时，你可以借鉴 "),e("a",{attrs:{href:"https://www.nginx.com/blog/introducing-the-nginx-microservices-reference-architecture/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NGINX 微服务参考架构"),e("OutboundLink")],1),t._v("（MRA，Microservices Reference Architecture），以便在迁移到微服务后定义应用的最终结构，并根据需要使用 MRA 部分应用在你的新微服务中。")])])]),t._v(" "),e("p",[t._v("总而言之，使用 NGINX 作为你转型的第一步，压倒你的单体应用，使其更容易获得微服务的所有优势，并为你提供用于转换的模型。你可以了解有关 MRA 的更多信息，并获得 NGINX Plus 的免费试用版。")])])}),[],!1,null,null,null);r.default=v.exports}}]);