import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import {Toaster} from 'react-hot-toast';
function App() {
  

  return (
      
      <BrowserRouter>
      <Toaster position="top-right"/>
      <Routes>
       <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/"element={<Landing/>}/>
      
      </Routes>
    </BrowserRouter>
  );
}
  export default App