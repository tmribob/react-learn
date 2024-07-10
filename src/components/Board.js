import React from "react"
import { HiArrowLongRight } from "react-icons/hi2";

class Board extends React.Component{
    search_params={}
    constructor(props){
        super(props)
        this.state = {
            name:"",
            salary:""
        }

    }
    render(){
        return (<div className="board"><form ref={(e) => this.form =e}>
                <input type="text" placeholder="Введите название должности" onChange={(e) => this.setState({name: e.target.value})} />
                <input type="number" pattern="[0-9]*" placeholder="Введите уровень дохода" onChange={(e) => this.setState({salary: e.target.value})} />
                <button type="button" onClick={() => {
                    this.form.reset()
                    console.log(this.state.name ,this.state.salary)
                }}><span>Найти </span><svg stroke="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" class="arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="customGradient">
                            <stop offset="0%" stop-color="#B17B7B"/> 
                            <stop offset="100%" stop-color="#635050"/>
                        </linearGradient>
                    </defs><path fill="url(#customGradient)" fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path></svg></button>
        </form></div>)
      }
}

export default Board

