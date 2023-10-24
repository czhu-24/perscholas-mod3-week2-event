import './App.css'
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Events from './pages/Events';
import Employees from './pages/Employees';
import ViewEmployees from './pages/ViewEmployees';
import AddEmployee from './pages/AddEmployee';

function App() {
  // conditionally hide the top level navbar with Events & Employees
  const location = useLocation();

  // array of routes where the navbar is hidden
  const routesToHideNavbar = ['/employees', '/employees/view', '/employees/add'];

  // check if current path is in routesToHideNavbar array
  const hideNavbar = routesToHideNavbar.includes(location.pathname);

  return (
    <>
      {/* nav bar with links */}
      {!hideNavbar &&
        <nav>
          <Link to="/">Events</Link>
          <Link to="/employees">Employees</Link>
        </nav>
      }

      {/* routes here */}
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/view" element={<ViewEmployees />} />
        <Route path="/employees/add" element={<AddEmployee />} />
      </Routes>
    </>
  )
}

export default App
