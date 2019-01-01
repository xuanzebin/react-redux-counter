import React, { Component } from 'react';
import Box from './Box.js'
import Button from './Button.js'

export const themeContext=React.createContext()

class App extends Component {
  constructor(){
    super()
    this.state={
      theme:'green'
    }
  }
  changeTheme(){
    this.setState({
      theme:this.state.theme==='green'?'red':'green'
    })
  }
  render() {
    return (
      <themeContext.Provider value={this.state.theme}>
        <div className="App">
          <button onClick={this.changeTheme.bind(this)}>clickMe</button>
          <Box>
            <Button/>
          </Box>
        </div>
      </themeContext.Provider>
    );
  }
}

export default App
