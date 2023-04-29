
import './App.css';
import { Routes, Route} from 'react-router-dom'
import HomPage from './pages/HomPage';
import Login from './pages/Login';
import Register from './pages/Register';
import AddUserInfo from './pages/AddUserInfo';
import UserSectorInfo from './pages/UserSectorInfo';
import PrivateRoute from "./components/Routes/Private";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={< HomPage />} />
          <Route path="/:id" element={< HomPage />} />
          <Route path="/add-users" element={< AddUserInfo />} />
          <Route path="/add-users/:id" element={< AddUserInfo />} />
          <Route path="/user-list" element={< UserSectorInfo />} />
        </Route>
        <Route path="/login" element={< Login />} />
        <Route path="/register" element={< Register />} />
      </Routes>
    </>
  );
}

export default App;
