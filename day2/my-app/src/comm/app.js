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
    click=()=>{
        let {arr} =this.state;
        let arr3 = Object.assign(arr);
        arr3.push('呵呵');
        this.setState({
            arr:arr3
        });
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
           <div>
                <button onClick={this.click}>
                添加
                </button>
                <ul>
                    {list}
                </ul>
           </div>
        )
    }
}
export default Ul;