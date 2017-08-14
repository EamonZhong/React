import React,{Component} from "react";
class FooterList extends Component{
  
  //通过点击切换视图
  changeView = () => {
    this.props.changeView(this.props.hash);
  }
  
  render(){
    return (
      <li>
        <a
          href={this.props.hash}
          className={(this.props.view == this.props.hash)?'selected':''}
          onClick = {this.changeView}
        >{this.props.name}</a>
      </li>
    )
  }
};
export default FooterList;