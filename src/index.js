import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

function reducer(state,action){
    if (state===undefined){
        return {n:0}
    }
    if (action.type==='add'){
        return {
            n:state.n+action.payload
        }
    }
}

var store=createStore(reducer)



function render(){
    ReactDOM.render(
        <Provider store={store}>
           <App />
        </Provider>
    , document.getElementById('root'));
}


render()
store.subscribe(render)


serviceWorker.unregister();
