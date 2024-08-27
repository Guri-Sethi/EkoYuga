import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import IntroPage from './components/IntroPage/IntroPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<IntroPage/>}></Route>      
      </Routes>
    </Router>
  );
}

export default App;
