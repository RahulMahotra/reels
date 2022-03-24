import Signup from './Components/Signup';
import Login from './Components/Login';
import Feed from './Components/Feed';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import {AuthProvider} from './Context/AuthContext'
import PrivateRoute from './Components/PrivateRoute'
import Profile from './Components/Profile'

function App() {
  return (
    <Router>
    <AuthProvider>
    <Routes>
      <Route path = "/login" element={<Login />} />
      <Route path = "/signup" element={<Signup />} /> 
      <Route path = "/profile/:id" element={ <PrivateRoute  component={ Profile }  /> } />
      <Route path = "/*" element={ <PrivateRoute  component={ Feed }  /> } />
    </Routes>
    </AuthProvider> 
    </Router>
      
  );
}

export default App;
