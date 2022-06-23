import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import LayoutQuiz from './components/LayoutQuiz';
// import Choices from './components/Choices';


function App() {
  return (
    <div className='display'>
    <Routes>
        <Route path="/" element={<LayoutQuiz />}>
          {/* <Route path="about" element={<About />} />
          <Route path="login" element={<Dashboard />} /> */}
        </Route>
      </Routes>
    </div>
    
  );
}

export default App;
