import React from "react"
import ReactDom from "react-dom"
import "./index.css"
import logo from './react.png'

const container = document.getElementById("root");
const App = ()=> (
    <div className="app">
        <h1> Hola React!!</h1>
        <img  src={logo} />
    </div>
)


ReactDom.render(<App />,container);