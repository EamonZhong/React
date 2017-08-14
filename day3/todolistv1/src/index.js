import React,{Component} from "react";
import ReactDOM from "react-dom";
import './todoList/css/index.css';
import HeadModel from './todoList/components/header';
import Li from './todoList/components/Li';

class App extends Component{
  constructor(){
    super();
    this.state={
      val:'',
      data:[
        {txt:'今天天气还不错',checked:false,id:0},
        {txt:'今天局地有雷暴',checked:false,id:1},
      ],
    }
  }
  PchangeChecked = (id) =>{
     let {data} = this.state;
     let data2 = Object.assign(data);
     data2.forEach(e=>{
       if(e.id==id){
         e.checked=!e.checked;
       }
     })
     this.setState({
       data:data2
     })
  }
  changeData = (newData)=>{
    let {data} =this.state;
    let data2 =Object.assign(data);
    data2.push(newData);
    this.setState({
      data:data2,
      val:''
    })
  }
  changeVal=(newVal)=>{
    this.setState({
      val:newVal
    })
  }
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
  allChange=(ev)=>{
    let {checked} = ev.target;
    let {data} =this.state;
    let data2 = Object.assign(data);
    data2.forEach(e =>e.checked=checked);
    this.setState({
      data:data2
    })
  }
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
  render(){
    let {data} = this.state;
    let list=null;
    let all=false;
    all = data.every(e=>e.checked);
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
    })
    return (      
      <div>
        <HeadModel changeData={this.changeData} val={this.state.val} changeVal={this.changeVal}/>
        <section className="main">
          <input
            className="toggle-all"
            type="checkbox"
            onChange={this.allChange}
            checked={all}
            />
          <ul className="todo-list">
            {list}
          </ul>
        </section>
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'))

if (module.hot) {
  module.hot.accept();
}
