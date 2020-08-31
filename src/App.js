import React from 'react';
import './style.css'
import './App.css';
import imageInSrc from '.imageInSrc/go.jpg'
function App() {
  return (
    <div className="App">
      <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>
        <h1 className="title red"> Nadhem Ltifi </h1>
        <br />
        <img src={imageInSrc} /> <br />
        <img src="/images/h.jpg" />

      </div>
      <video width={320} height={240} controls>
        <source src="/video/What is JSX.mp4" type="video/mp4" />
      </video>

    </div>
  );
}

export default App;
