import logo from './logo.svg';
import './app.css';

function App() {
  return (
    <div className="App">
      <div className="md-form">
          <textarea rows="3"></textarea>
        </div>
      <div className="container">

        <div className="row one">
          <button>`</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>-</button>
          <button>=</button>
          <button className="back">Backspace</button>
        </div>
        <div className="row two">
          <button className="tab">Tab</button>
          <button>Q</button>
          <button>W</button>
          <button>E</button>
          <button>R</button>
          <button>T</button>
          <button>Y</button>
          <button>U</button>
          <button>I</button>
          <button>O</button>
          <button>P</button>
          <button>[</button>
          <button>]</button>
          <button className="slace">\</button>
        </div>
        <div className="row three">
          <button className="cap">Caps</button>
          <button>A</button>
          <button>S</button>
          <button>D</button>
          <button>F</button>
          <button>G</button>
          <button>H</button>
          <button>J</button>
          <button>K</button>
          <button>L</button>
          <button>;</button>
          <button>'</button>
          <button className="ent-btn">Enter</button>
        </div>
        <div className="row four">
          <button className="shift">Shift</button>
          <button>Z</button>
          <button>X</button>
          <button>C</button>
          <button>V</button>
          <button>B</button>
          <button>N</button>
          <button>M</button>
          <button>,</button>
          <button>.</button>
          <button>?</button>
          <button className="shift">Shift</button>
        </div>
        <div className="row five">
          <button className="other">Crtl</button>
          <button className="other">Win</button>
          <button className="other">Alt</button>
          <button className="space">Space</button>
          <button className="other">Alt</button>
          <button className="other">Win</button>
          <button className="other">Crtl</button>
        </div>
      </div>
    </div>
  );
}

export default App;
