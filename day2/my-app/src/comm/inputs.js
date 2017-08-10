import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Inputs extends Component{
    constructor(){
        super();
        this.state={
            val:"miaov1234",
            city:"上海"
        }
    }
    changeValue=(ev)=>{
        this.setState({
            val:ev.target.value,
        })
    }
    changeSelect=(ev)=>{
        this.setState({
            city:ev.target.val,
        })
    }
    render(){
        return(
            <div>
                <input
                onChange ={this.changeValue} 
                type = "text" 
                value = {this.state.val}/>
                <select onChange={this.changeSelect}>
                    <option>北京</option>
                    <option>上海</option>
                    <option>广州</option>
                </select>
                <input type="checkbox" defaultChecked/>
            </div>
        )
    }
}
export default Inputs