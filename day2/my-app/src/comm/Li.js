import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './css/Li.css'
class Li extends Component{
    render(){
       return(
           <li className="box">
                <span>{this.props.num}</span>
                <p>{this.props.txt}</p>
           </li>
       ) 
    }
}
export default Li