import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [facebook, setFacebook] = useState(250);
  const [counTwitter, setTwitter] = useState(280);
  const [countGoogle, setcountGoogle] = useState(300);
  const handleCountChange = (em) => {
    const currentValue = em.target.value;
    setCharacterCount(currentValue.length);

    const words = currentValue.split(/\s+/).filter((word) => word.length !== 0);

    setWordCount(words.length);
    const twitt = 280 - currentValue.length;
    setTwitter(twitt);
    const goog = 300 - currentValue.length;
    setcountGoogle(goog);
    const face = 250 - currentValue.length;
    setFacebook(face);
  };
  return (
    <div>
      <div className="row">
        <div className="header">
          <h3>word counter</h3>
          <p className="grammar">Grammar check</p>
        </div>
      </div>
      <div className="row">
        <div class="box">
          <h4>word</h4>
          <p>{wordCount}</p>
        </div>
        <div className="box">
          <h4>Character</h4>
          <p>{characterCount}</p>
        </div>
        <div className="box">
          <h4>facebook</h4>
          <p className="plan-price">
            {facebook}
            <span>/250</span>
          </p>
        </div>
        <div className="box">
          <h4>twitter</h4>
          <p className="plan-price">
            {counTwitter}
            <span>/280</span>
          </p>
        </div>
        <div className="box">
          <h4>google</h4>
          <p className="plan-price">
            {countGoogle}
            <span>/300</span>
          </p>
        </div>
      </div>
      <form className="contact-form" method="post" action="#">
        <div class="row">
          <textarea
            cols="30"
            placeholder="Type or paste your text"
            name="text"
            onChange={handleCountChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default App;
