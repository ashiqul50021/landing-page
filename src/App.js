import logo from './logo.svg';
import './App.css';
import Home from './components/HomePage/Home/Home';
import { Route, Routes } from 'react-router-dom';
import SearchPage from './components/HomePage/Searchbox/SearchPage';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchpage/" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
