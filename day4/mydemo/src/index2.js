import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div>
        <button>
          <Link to="/">回到首页</Link>
        </button>
        <p>
          你好,世界!
        </p>
      </div>
    )
  }
}

class PPA extends Component {
  render(){
    return (
      <div>
        <p>我是PPA!</p>
        <Link to="/ppa/aaa" >跳到aaa</Link>
      </div>
    )
  }
}
class PPX extends Component {
  render(){
    return (
      <div>
        <div>我是皮皮虾</div>
      </div>
    )
  }
}

 let arr = [
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

 let routers = (obj) => {
   let {match} = obj;
   let f = null;
   
   f = arr.find(e=>{
     if(e.name === match.params.id){
       return e;
     }
   });
   
   console.log(match)
   
   if(!f){
     return <App />;
   }else{
     return f.component;
   }
 }
ReactDOM.render(
  (
    <Router>
      <div>
      <button>
        <Link to="/app">跳转到App</Link>
      </button>
      <button>
        <Link to="/ppa">跳转到PPa</Link>
      </button>
      <button>
        <Link to="/ppx">跳转到PPx</Link>
      </button>
      <Route exact path="/:id" component={routers}/>
      <Route path="/ppa/aaa" component={PPX}/>
      </div>
    </Router>
  ),
  document.getElementById('app')
)



if(module.hot){
  module.hot.accept();
}
