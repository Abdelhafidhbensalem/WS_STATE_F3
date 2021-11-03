import React, { Component, useEffect, useState } from 'react'
import "./Counter.css"

/////////Functional Component ////////
const Counter = () => {

    const [time2, setTime2] = useState(0)
    const [counter, setCounter] = useState(0)
    const [text, setText] = useState("")

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        counter > 0 && setCounter(counter - 1)
    }

    const addText = (e) => {
        setText(e.target.value)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTime2(time2 => time2 + 1)
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    return (
        <div>
            <div  id="tv" style={{ background: "black", color: "white", display: "flex", flexDirection: "column", alignItems:"center" }}>
                <h1> this is a Counter</h1>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button className="btn-hover color-2" onClick={increment}>+</button>
                    <p>{counter}</p>
                    <button onClick={decrement} className="btn-hover color-7">-</button>
                </div>
                <div ><input type="text" onChange={addText} /></div>
                <div>{text && <h4>{text}</h4>}</div>
                <h3>{time2}</h3>
            </div>
        </div>
    )
}

export default Counter


/////////Component based Class////////

/*class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { time2:0,
        counter:0,text:"" }
    }

    componentDidMount(){
        console.log("component Counter did mount")
        setInterval(() => {this.setState({time2:this.state.time2+1})
    }, 1000);
      }
increment=()=>{
this.setState({counter:this.state.counter+1})
}

decrement=()=>{
    this.state.counter>0&&this.setState({counter:this.state.counter-1})
    }
addText=(e)=>{
    this.setState({text:e.target.value})
}
      componentWillUnmount(){
        console.log("component Counter did unmount")
      }
    render() {
        return ( <div style={{background:"black",color:"white"}}>
           <h1> this is a Counter</h1>
           <div style={{display:"flex"}}>
           <button onClick={this.increment}>+</button>
           <p>{this.state.counter}</p>
           <button onClick={this.decrement}>-</button>
           </div>
           <input type="text"  onChange={this.addText}/>
           {this.state.text&&<h4>{this.state.text}</h4>}
            <h3>{this.state.time2}</h3>
        </div> );
    }
}

export default Counter;*/