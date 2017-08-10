import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Li from './Li.js'
class Todo extends Component{
    constructor(){
        super();
        this.state={
            val:'12423',
            arr:['这是一条数据']
        }
    }
    
    keyup=(ev)=>{
        if(ev.keyCode == 13){
            let {arr} =this.state;
            let arr2=Object.assign(arr);
            arr2.push(ev.target.value);
            this.setState({
                arr:arr2,
                val:''
            });
        }
    }
    change=(ev)=>{
        this.setState({
            val:ev.target.val
        })
    }
    render(){
        let {arr} = this.state;
        let arr2 = [];
        let list ='';
        list = arr.map((e,i)=>{
            let data={
                txt:e,
                key:i,
                num:i,
            };
            return <Li {...data}/>
        });
        return(
            <div>
                <input type="text" value={this.state.val} onChange={this.change} onKeyUp={this.keyup}/>
                <ul>
                    {list}
                </ul>
            </div>
        )              
    }
}
export default Todo