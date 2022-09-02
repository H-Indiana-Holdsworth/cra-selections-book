import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import Me from './components/Me';
import Selection from './components/Selection';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route exact path="/callback" element={<Auth />} />
          <Route exact path="/me" element={<Me />} />
          <Route exact path="/selection" element={<Selection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
