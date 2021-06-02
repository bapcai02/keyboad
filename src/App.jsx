
import React, { useState } from 'react';
import './app.css';

function App() {
    const [text, setText] = useState();
    const [caps, setCab] = useState(false);
    const handlevent = (value) => {
      const old_text = text ? text.toString() : '';
      if(caps == false){
        setText(old_text + (value.toString()).toLowerCase())
      }else{
        setText(old_text + (value.toString()).toUpperCase());
      }
    }
    const handleEventDelete = () =>{
      const string = text.length > 0 ? text.slice(0, text.length -1) : '';
      setText(string);
    }
    const handleCab = () => {
      if(caps == false){
        setCab(true)
      }else{
        setCab(false)
      }
    }
    console.log(caps);
    return ( 
      <div className = "App">
        <div className = "md-form" >
          <textarea rows="3" value={text}> </textarea> 
        </div> 
        <div className = "container" >
          <div className = "row one" >
          <button > `</button>
          <button onClick = {()=>handlevent(1)}>1</button>
          <button onClick = {()=>handlevent(2)}>2</button>
          <button onClick = {()=>handlevent(3)}>3</button>
          <button onClick = {()=>handlevent(4)}>4</button>
          <button onClick = {()=>handlevent(5)}>5</button>
          <button onClick = {()=>handlevent(6)}>6</button>
          <button onClick = {()=>handlevent(7)}>7</button>
          <button onClick = {()=>handlevent(8)}>8</button>
          <button onClick = {()=>handlevent(9)}>9</button>
          <button onClick = {()=>handlevent(0)}>0</button>
          <button onClick = {()=>handlevent("-")}>-</button>
          <button onClick = {()=>handlevent("=")}>=</button>
          <button onClick = {()=>handleEventDelete()} className="back">Backspace</button>
        </div>
        <div className="row two">
          <button onClick= {() => handlevent("    ")} className="tab">Tab</button>
          <button onClick = {()=>handlevent("q")}>Q</button>
          <button onClick = {()=>handlevent("w")}>W</button>
          <button onClick = {()=>handlevent("e")}>E</button>
          <button onClick = {()=>handlevent("r")}>R</button>
          <button onClick = {()=>handlevent("t")}>T</button>
          <button onClick = {()=>handlevent("y")}>Y</button>
          <button onClick = {()=>handlevent("u")}>U</button>
          <button onClick = {()=>handlevent("i")}>I</button>
          <button onClick = {()=>handlevent("o")}>O</button>
          <button onClick = {()=>handlevent("p")}>P</button>
          <button onClick = {()=>handlevent("[")}>[</button>
          <button onClick = {()=>handlevent("]")}>]</button>
          <button onClick = {()=>handlevent("|")} className="slace">|</button>
        </div>
        <div className="row three">
          <button onClick = {() => handleCab()} className="cap">Caps</button>
          <button onClick = {()=>handlevent("a")}>A</button>
          <button onClick = {()=>handlevent("s")}>S</button>
          <button onClick = {()=>handlevent("d")}>D</button>
          <button onClick = {()=>handlevent("f")}>F</button>
          <button onClick = {()=>handlevent("g")}>G</button>
          <button onClick = {()=>handlevent("h")}>H</button>
          <button onClick = {()=>handlevent("j")}>J</button>
          <button onClick = {()=>handlevent("k")}>K</button>
          <button onClick = {()=>handlevent("l")}>L</button>
          <button onClick = {()=>handlevent(";")}>;</button>
          <button onClick = {()=>handlevent("'")}>'</button>
          <button className="ent-btn">Enter</button>
        </div>
        <div className="row four">
          <button className="shift">Shift</button>
          <button onClick = {()=>handlevent("z")}>Z</button>
          <button onClick = {()=>handlevent("x")}>X</button>
          <button onClick = {()=>handlevent("c")}>C</button>
          <button onClick = {()=>handlevent("v")}>V</button>
          <button onClick = {()=>handlevent("b")}>B</button>
          <button onClick = {()=>handlevent("n")}>N</button>
          <button onClick = {()=>handlevent("m")}>M</button>
          <button onClick = {()=>handlevent(",")}>,</button>
          <button onClick = {()=>handlevent(".")}>.</button>
          <button onClick = {()=>handlevent("?")}>?</button>
          <button className="shift">Shift</button>
        </div>
        <div className="row five">
          <button className="other">Crtl</button>
          <button className="other">Win</button>
          <button className="other">Alt</button>
          <button  onClick = {()=>handlevent(" ")} className="space">Space</button>
          <button className="other">Alt</button>
          <button className="other">Win</button>
          <button className="other">Crtl</button>
        </div>
      </div>
    </div>
  );
}

export default App;