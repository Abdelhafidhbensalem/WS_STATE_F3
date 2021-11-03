import React, { Component, useEffect, useState } from 'react'
import Counter from './components/Counter/Counter';
import './App.css';

/////////Functional Component ////////
const App = () => {
  const [toggle, setToggle] = useState(false)
  const [time, setTime] = useState(0)

  const handleTogle = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time => time + 1)
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div>
      <div>
        <div>
          <header>
            <button className="btn-hover color-8" onClick={handleTogle}>{!toggle ? "show" : "hide"}</button>
            {toggle && <Counter />}
            <h1>{time}</h1>
          </header>
        <section id="a1" />
        <section id="a2" />
        <section id="a3" />
        <section id="a4" />
        <section id="a5" />
        <section id="a6" />
        <section id="a7" />
        <section id="a8" />
        <section id="a9" />
        <section id="a10" />
        <section id="a11" />
        <section id="a12" />
      </div>
    </div>
    </div >
  )
}

export default App


/////////Component based Class////////
/*export class App extends Component {
  state={
    toggle:false,
    time:0,
  }

  componentDidMount(){
    console.log("component App did mount")
    setInterval(() => {this.setState({time:this.state.time+1})
    }, 1000);
  }
  componentDidUpdate(){
    console.log("component App updated")
  }
  handleTogle=()=>{
this.setState({toggle:!this.state.toggle})
  }
  render() {
    return (
      <div>
        <button onClick={this.handleTogle}>{!this.state.toggle?"show":"hide"}</button>
{this.state.toggle&&<Counter/>}
<h1>{this.state.time}</h1>
      </div>
    )
  }
}

export default App*/



