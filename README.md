# React

##jsx语法需要注意的问题
1. 渲染的元素要有一个父节点包裹
2. jsx 中用{/* */}的注释形式
3. class=>要写成className的形式
4. 事件例如onClick要使用驼峰式的写法
5. 在 jsx 中使用循环，一般会用到Array.prototype.map（来自ES5标准
6. jsx中使用判断一般会用到三元表达式（表达式也是放在{}中的）

##React的生命周期
1. getInitialState   
初始化组件 state 数据，但是在 es6 的语法中，我们可以使用以下
2. render   
最常用的hook，返回组件要渲染的模板。
3. comopentDidMount   
组件第一次加载时渲染完成的事件，一般在此获取网络数据。实际开始项目开发时，会经常用到。
4. shouldComponentUpdate    
主要用于性能优化，React 的性能优化也是一个很重要的话题，后面一并讲解。
5. componentDidUpdate    
组件更新了之后触发的事件，一般用于清空并更新数据。实际开始项目开发时，会经常用到。
6. componentWillUnmount    
组件在销毁之前触发的事件，一般用户存储一些特殊信息，以及清理setTimeout事件等
