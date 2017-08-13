import React,{Component} from "react";
import ReactDOM from "react-dom";

class Footer extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <footer
            className="footer" >
            <span className="todo-count">
              <strong>0</strong>
              <span>条未选中</span>
            </span>
            <ul className="filters">
              <li>
                <a href="#/all" className="selected">全部</a>
              </li>
              <li>
                <a href="#/active">未完成</a>
              </li>
              <li>
                <a href="#/completed">已完成</a>
              </li>
            </ul>
            <button
              className="clear-completed"
            >
                清除完成项
            </button>
          </footer>
        )
    }
}

export default Footer