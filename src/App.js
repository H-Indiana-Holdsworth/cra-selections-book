import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import Me from './components/Me';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route exact path="/callback" element={<Auth />} />
          <Route exact path="/me" element={<Me />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
