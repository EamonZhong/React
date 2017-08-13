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
      data:[
        {txt:'今天天气还不错',checked:false,id:1},
        {txt:'今天局地有雷暴',checked:false,id:2}
      ]
    }
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
    
    console.log(this.refs.head);
    
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
    console.log(data2);
    
  }
  
  render(){
    let {data} = this.state;
    let list = null;
    let all = false;
    
    list = data.map((e,i)=>{
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
    
    all = data.every(e => e.checked);
    
    
    return (
      <div>
        <HeadModel
          changeData = {this.changeData}
          val={this.state.val}
          changeVal={this.changeVal}
          
        />
        <section className="main" ref = {(elem)=>{this.main = elem}}>
            <input
              className="toggle-all"
              type="checkbox"
              checked = {all}
              onChange = {this.allChange}
              ref = {(elem) => {this.all = elem}}
            />
            <ul className="todo-list">
              {list}
            </ul>
        </section>
        <Footer />      
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'))

if (module.hot) {
  module.hot.accept();
}
