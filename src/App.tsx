import React from 'react';
import { InvisibleSmartCaptcha } from '@yandex/smart-captcha';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <InvisibleSmartCaptcha
        sitekey="U7bnwGLbYiElqryaP1Qq714dW2BmcwsexmmZriSg"
        visible={true}
        onSuccess={console.log}
        test={true}
      />
      </header>
    </div>
  );
}

export default App;
