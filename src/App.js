import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/RegisterPage.js';
import HomePage from './Pages/HomePage';
import SlotRegPage from './Pages/SlotRegPage.js';
import Adminhome from './Pages/AdminhomePage';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import AdminRecordList from './components/AdminRecordList/AdminRecordList';
import { AuthProvider } from './context/AuthContex';


function App() {
    return (
        <div>

<Router>
    <AuthProvider>

            <Routes>


               

                <Route path="/login" element={ <LoginPage/>}>
                   
                </Route>
                <Route path="/register" element={ <RegisterPage/>}>
                   
                   </Route>
                   <Route path="/slotreg" element={ <SlotRegPage/> }>
                   
                   </Route>

                   <Route path="/" element={ <HomePage/>}>
                   
                   </Route>
                   <Route path="/adminhome" element={ <Adminhome/>}>
                    <Route path='' element={<AdminDashboard/>}>

                    </Route>
                    <Route path="recordlist" element={<AdminRecordList/>}>

                    </Route>
                   </Route>

            </Routes>

            </AuthProvider>
        </Router>

        </div>
        

    );
}

export default App;
