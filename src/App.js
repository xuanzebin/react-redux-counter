import React, { Component,useState,useEffect } from 'react';

export const themeContext=React.createContext()

function App(){
  const [count,setCount]=useState(0)
  return (
    <div>
      {count}
    </div>
  )
}

export default App
