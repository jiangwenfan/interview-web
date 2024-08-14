import React from 'react';
// import AddQA from './components/AddQA';
// import ShowQA from "./components/ShowQA";
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';

// const apiUrl = process.env.REACT_APP_API_HOME_URL

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
