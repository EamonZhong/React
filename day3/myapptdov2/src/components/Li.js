import React,{Component} from "react";
import PropTypes from 'prop-types';

class Li extends Component{
  constructor(){
    super();
    this.state = {
      db:false,
      storeval:''
    }
  }
  
  changeChecked = () => {
    this.props.PchangeChecked(this.props.id);
  }
  
  remove = () => {
    this.props.remove(this.props.id);
  }
  
  dbclick = () => {
    let {txt} = this.props;
    this.setState({
      db:true, 
      storeval:txt
    },()=>{
      this.db.focus();
    });
  }
  
  blur = () => {
    if(this.state.db){
      let {id,checked} = this.props;
      let relval=this.db.value?this.db.value:this.state.storeval;
      let newData = {
        id:id,
        checked:checked,
        txt:relval
      }
      this.props.changeText(newData);  
      this.setState({
        db:false,
        storeval:''
      });
    }
  }
  restore=(ev)=>{   
    if(ev.keyCode==27||ev.keyCode==13){
      let {id,checked} = this.props;
      let relval=this.state.storeval;
      if(ev.keyCode==13){
        relval=this.db.value?this.db.value:this.state.storeval;          
      }      
      let newData = {
        id:id,
        checked:checked,
        txt:relval
      }
      this.props.changeText(newData);
      this.setState({
        db:false
      });
    }
  }
  
  render(){
    let {txt,checked} = this.props;
    let sClass = checked?'completed':'';
    
    if(this.state.db){
      sClass += ' editing';
    }

    return (
      <li className={sClass}>
          <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange = {this.changeChecked}
                checked={checked}
              />
              <label
                onDoubleClick = {this.dbclick}
              >{txt}</label>
              <button
                className="destroy"
                onClick = {this.remove}
              ></button>
          </div>
          <input
            ref = {(elem) => {this.db = elem}}
            className ="edit"
            onBlur = {this.blur}
            onKeyUp = {this.restore}
          />
      </li>
    )
  }
}
Li.propTypes = {
  checked:PropTypes.bool,
  txt:PropTypes.string
}
export default Li;
