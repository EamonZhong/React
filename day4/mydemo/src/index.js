import React,{Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

    class App extends Component{
        render(){
            return(
                <div>
                    <button>
                        <Link to="/">回到首页</Link>
                    </button>
                    <p>
                     你好世界！
                    </p>
                </div>
            )
        }
    }
    class PPX extends Component{
        render(){
            return(<div>你好皮皮虾</div>)
        }
    }
    class PPA extends Component{
        render(){
            return(<div>你好我是PPA</div>)
        }
    }

    let arr=[
        {
            name:'app',
            component:<App />
        },
        {
            name:'ppa',
            component:<PPA />
        },
        {
            name:'ppx',
            component:<PPX />
        }
    ]
    let routers= (obj) => {
        console.log(obj)
        let {match} = obj;
        let f = null;
        f = arr.find(e=>{
            if(e.name===match.params.id){
                return e
            }
        });       
    
        if(!f){
            return <App />
        }else{
            return f.component;
        }
    }
    

    ReactDOM.render(
    (
    <Router>
    <div>
        <button>
        <Link to="/app">点击进入app</Link>
        </button>
        <button>
            <Link to="/ppa">点击进入ppa</Link>
        </button>
        <button>
            <Link to="/ppx">点击进入ppx</Link>
        </button>
        <Route  path="/:id" component={routers}/>        
    </div> 
    </Router>),document.getElementById('app'))