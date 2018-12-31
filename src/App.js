import React, { Component } from 'react';
import { connect } from 'react-redux'
class App extends Component {
  add3(){
    if (this.props.n%2===1){
      this.props.add1()
    }
  }
  add4(){
    setTimeout(()=>{
      this.props.add1()
    },2000)
  }
  render() {
    return (
      <div className="App">
        已经点击了 <span>{this.props.n}</span> 次
        <div>
          <button onClick={this.props.add1}>+1</button>
          <button onClick={this.props.add2}>+2</button>
          <button onClick={this.add3.bind(this)}>单数时+1</button>
          <button onClick={this.add4.bind(this)}>两秒后+1</button>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    n:state.n
  }
}
function mapDispatchToProps(dispatch){
  return {
    add1:()=>dispatch({type:'add',payload:1}),
    add2:()=>dispatch({type:'add',payload:2})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
