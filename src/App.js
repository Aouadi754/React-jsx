import React from 'react';
import './App.css';
import tree from "./tree.jpg";
import "./style.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">Your name here</h1>
    <br />
    <img src={tree} />
    <br />
    <img src="/mountain.jpg" />
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</div> 

      </header>
    </div>
  );
}

export default App;
