import React,{Component} from "react";
import PropTypes from 'prop-types';
class Li extends Component{
  constructor(){
    super();
    this.state={
      db:false
    }
  }
  changecheck=()=>{
    this.props.PchangeChecked(this.props.id)
  }
  remove = () => {
    this.props.remove(this.props.id);
  }
  dbclick = () => {   
    this.setState({
      db:true
    },()=>{
      this.db.focus();
    });
  }
  blur = () => {
    let {id,checked} = this.props;
    let newData = {
      id:id,
      checked:checked,
      txt:this.db.value
    }
    this.props.changeText(newData);   
    this.setState({
      db:false
    });
  }
  render(){
    let {txt,checked}=this.props;
    let sClass= checked?'completed':'';
    if(this.state.db){
      sClass += ' editing';
    }
    return (
      <li className={sClass}>
          <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange={this.changecheck}
                checked={checked} />
              <label onDoubleClick={this.dbclick}>{txt}</label>
              <button onClick={this.remove} className="destroy"></button>
          </div>
          <imput 
          className="edit" 
          onBlur = {this.blur}
          ref = {(elem) => {this.db = elem}}
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
