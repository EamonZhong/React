import React,{Component} from 'react';
import './css/Li.css'
class CToP extends Component{
    constructor(){
        super();
        this.state={
            arr:[
            {text:'一个对象',checked:false,id:0},
            {text:'两个对象',checked:false,id:1},
            {text:'三个对象',checked:false,id:2},
            {text:'四个对象',checked:false,id:3}]
        }
    }
    changeChild=(id)=>{
        let {arr} = this.state;
        let arr2 = Object.assign(arr);
        arr2.forEach((e,i)=>{
            if(e.id==id){
                e.checked=!e.checked
            }
        })
        this.setState({
            arr:arr2
        })
        console.log(this.state.arr)
    }
    render(){
        let {arr} = this.state;
        let list ='';
        list = arr.map((e,i)=>{
            let data={
                txt:e.text,
                key:i,
                num:i,
                id:e.id,
                checked:e.checked,
                changeChild:this.changeChild
            };
            return <Li {...data}/>
        });
        return(
            <ul>
            {list}
            </ul>
        )
    }
}
class Li extends Component{
    change=()=>{
        this.props.changeChild(this.props.id)
    }
    render(){
        return(
            <li>
                <input type="checkbox" checked={this.props.checked} onChange={this.change}/>
                <p>{this.props.txt}</p>
            </li>
        )
    }
}
export default CToP