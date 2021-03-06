import React,{Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom'


class App extends Component{
    constructor(){
        super();
        this.state={
            bool:false
        }
    }
    logout = ()=>{
    	this.setState({
     	 	bool:false
    	})
  	}
    render(){
        let {bool} = this.state;
        let h = null;
        if(!bool){
        	h = <h1>你没有登录</h1>
        }else{
        	h = <h1>Welcome<button>
        	<Link to="/login" onClick={this.logout}>退出</Link>
        	</button></h1>
        }
        return(
            <div className="App">
          		{h}
                <Link to="/public">公共页面</Link> <br/>
                <Link to="/protected">受限页面</Link> <br/>
                <Route path="/public" component={Public} />
                <Route path="/protected" render={()=>{
                    if(bool){
                        return <Protected />
                    }
                    else{
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/login" render={(props)=>{
          			return <Login changeBool={this.changeBool} />
        		}} />
            </div>
        )
    }
    changeBool = () =>{
    this.setState({
      bool:true
    })
  }
}
class Public extends Component{
    render(){
        return(
            <div>我是公共页面</div>
        )
    }
}
class Protected extends Component{
    render(){
        return(
            <div>登录成功,我是个人组件</div>
        )
    }
}
class Login extends Component{
	constructor(){
    	super();
	    this.state={
	      b:false
	    }
  	}
	click = () =>{
    let {changeBool}=this.props;
    let {b} = this.state
    setTimeout(()=>{
      changeBool();
      this.setState({
        b:true
      })
    },1000)
  }
    render(){
        if (this.state.b) {
        return (<Redirect to="/protected" />)
      }
      return(
        <div>
          <button onClick={this.click}>
            请登录
          </button>
          <p>需要登录才能查看受限页面</p>
        </div>
      )
    }
}
ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={App}/>
        </div>
    </Router>,document.getElementById('app'))


if (module.hot) {
    module.hot.accept();
  }