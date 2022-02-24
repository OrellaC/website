import './App.css';
import { Routes, Route } from 'react-router-dom';
import Resume from './pages/Resume';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
  <Link to="Resume">Resume</Link>

<Routes>
<Route path="Resume" element={<Resume />} />

</Routes>
    </div>
  );
}

export default App;
