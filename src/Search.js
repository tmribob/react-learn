import React from "react"
import Header from "./components/Header"
import Board from "./components/Board"

let url ="https://api.hh.ru/vacancies/?area=52"

class App extends React.Component{
    constructor(props){
        super(props)
        axios.get(BaseUrl).then((res) => {
            this.setState({users: res.data.data})
          })
        this.state = {
            vacancy: []
   