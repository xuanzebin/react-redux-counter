import React,{ Component } from "react"
import './Box.css'
import { themeContext } from './App.js'
class Box extends React.Component{
    render(){
        return (
            <themeContext.Consumer>
                {(theme)=><div className={`box ${theme}`}>{this.props.children}</div> }
            </themeContext.Consumer>
        )
    }
}
export default Box