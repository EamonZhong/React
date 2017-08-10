import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CToP from './comm/CToP';
//import Todo from './comm/todo'
//import Inputs from './comm/inputs'
//import Ul from './comm/app'
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<Ul />,document.getElementById('root'))
//ReactDOM.render(<Inputs />,document.getElementById('root'))
//ReactDOM.render(<Todo />,document.getElementById('root'))
ReactDOM.render(<CToP />,document.getElementById('root'))
//registerServiceWorker();
if(module.hot){
    module.hot.accept();
}