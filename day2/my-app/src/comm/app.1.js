import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Li from './Li.js'
class Ul extends Component{
    constructor(){
        super();
        this.state={
            arr:['today','is','Thursday'],
        }
    }
    render(){
        let {arr} = this.state;
        let list = null;
        list = arr.map((e,i)=>{
            let data={
                txt:e,
                key:i,
                num:i,
            };
            return <Li {...data}/>
        });
        return(
            <ul>{list}</ul>
        )
    }
}
export default Ul;