import './App.css';
import { Routes, Route } from 'react-router-dom';
import Resume from './pages/Resume';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
<h1>
  Welcome to my Portfolio
  <Link to="Resume">Resume</Link>
</h1>

<Routes>
<Route path="Resume" element={<Resume />} />

</Routes>
    </div>
  );
}

export default App;
