import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Me from './components/Me/Me';
import Selection from './components/Selection/Selection';
import React from 'react';
import TableOfContents from './views/TableOfContents/TableOfContents';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route exact path="/callback" element={<Auth />} />
          <Route exact path="/me" element={<Me />} />
          <Route exact path="/selection" element={<Selection />} />
          <Route exact path="/tableofcontents" element={<TableOfContents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
