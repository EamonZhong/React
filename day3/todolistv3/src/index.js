import React,{Component} from "react";
import ReactDOM from "react-dom";
import './css/index.css';
import HeadModel from './components/header';
import Li from './components/Li';
import Footer from './components/footer'

class App extends Component{
  constructor(){
    super();
  
    this.state = {
      val:'',
      data:[],
      num:0,
      hash:'#/all'
    }
  }
  componentDidMount(){
    this.setState({
      data:getItem('data')
    });
  }
  //切换checked
  PchangeChecked = (id) => {
    let {data} = this.state;
    let data2 = Object.assign(data);    
    data2.forEach(e=>{
      if(e.id === id){
        e.checked = !e.checked
      }
    });
    
    this.setState({
      data:data2
    });
    
  }
  //修改输入框的内容
  changeVal = (newVal) => {
    this.setState({
      val:newVal
    })
  }
  click = () => {
    this.setState({
      val:'3213skldjsakdjsakd'
    })
  }
  
  //添加数据
  changeData = (newData) => {
    let {data} = this.state;
    let data2 = Object.assign(data);
    data2.unshift(newData);
    this.setState({
      data:data2,
      val:''
    })
  }
  
  //删除
  remove = (id) => {
    let {data} = this.state;
    let data2 = null;  
    data2 = data.filter((e,i)=>{
      return e.id != id;
    });
    
    this.setState({
      data:data2
    });

  }
  //全选
  allChange = () => {
    let {checked} = this.all;
    let {data} = this.state;
    let data2 = Object.assign(data);
    data2.forEach(e => e.checked = checked);
    this.setState({
      data:data2
    });
  }
  
  //替换数据
  changeText = (newData) => {
    let {data} = this.state;
    let data2 = Object.assign(data);
    data2.forEach((e,i)=>{
      if(e.id === newData.id){
        data2.splice(i,1,newData)
      }
    });    
    this.setState({
      data:data2
    });    
  }
 	//清除完成项
	clearFinish = () => {
    let {data} = this.state;
    let data2 = Object.assign(data);
    
    data2 = data2.filter(e=>{
      return !e.checked;
    });
    
    this.setState({
      data:data2
    });
  }
	//改变视图
  changeView = (newView) => {
    this.setState({
      view:newView
    });
  }
  render(){
    let {data} = this.state;
    let list = null;
    let all = false;
    let changeAll = null;
    let footer = null;
    let filterView = Object.assign(data);
    let len = data.length;
    
    filterView = filterView.filter(e=>{
    	if(e.checked)len--;
    	switch (this.state.view){
    		case '#/active':
    			return !e.checked;
    			break;
    		case '#/completed':
    			return e.checked;
    			break;
    		default:
    			return Object.assign(data);
    			break;
    	}
    });
    list = filterView.map((e,i)=>{
      let data = {
        key:i,
        id:e.id,
        txt:e.txt,
        checked:e.checked,
        PchangeChecked:this.PchangeChecked,
        remove:this.remove,
        changeText:this.changeText
      }
      return <Li {...data} />
    });
    
		if(data.length){
			all = data.every(e=>e.checked)
			changeAll = (
	    <input
	      className="toggle-all"
	      type="checkbox"
	      checked = {all}
	      onChange = {this.allChange}
	      ref = {(elem) => {this.all = elem}}
	    />
   )	
		let footerData = {
        num:len,
        clearFinish:this.clearFinish,
        changeView:this.changeView,
        view:this.state.view
       
      }
      footer = (<Footer {...footerData}/>);
      
     localStorage.setItem('data',JSON.stringify(data)); 
      
		}
		
		
      
    return (
      <div>
        <HeadModel
          changeData = {this.changeData}
          val={this.state.val}
          changeVal={this.changeVal}
          
        />
        <section className="main" ref = {(elem)=>{this.main = elem}}>
						{changeAll}	
            <ul className="todo-list">
              {list}
            </ul>
        </section>
        {footer}      
      </div>
    )
  }
}
function getItem(data){
  return JSON.parse(localStorage.getItem(data)) || [{checked:false,txt:'呵呵',id:1}];
}

ReactDOM.render(<App />,document.getElementById('app'))

if (module.hot) {
  module.hot.accept();
}
