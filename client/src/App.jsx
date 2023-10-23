import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import Events from './pages/Events';
import Employees from './pages/Employees';

function App() {

  return (
    <>
      {/* nav bar with links */}
      <nav>
        <Link to="/">Events</Link>
        <Link to="/employees">Employees</Link>
      </nav>
      {/* routes here */}
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </>
  )
}

export default App
