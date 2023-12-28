import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';
import Footer from './Components/Footer';
import { ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProjectRoute from './Components/Routes/ProjectedRoute'
import PublicRouter from './Components/Routes/PublicRouter'
import Dashboard from './Pages/Dashboard';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Donar from './Pages/Side/Donar';
import Hospital from './Pages/Side/Hospital';
import Organisation from './Pages/Side/Organisation';
import Consumer from './Pages/Side/Consumer';
import Donation from './Pages/Donation';
import Analytics from './Pages/Side/Analytics';
import DonarList from './Pages/Admin/DonarList';
import HospitalList from './Pages/Admin/HospitalList';
import OrgList from './Pages/Admin/OrgList';
import AdminHome from './Pages/Admin/AdminHome';
function App() {
  return (
    <>
    <ToastContainer/>
    
      <Routes>

      <Route path='/' element={<Home/>}/>

        <Route path='/dashboard' element={
          <ProjectRoute>
          <Dashboard/>
          </ProjectRoute>
      }/>

      <Route path='/admin' element={
          <ProjectRoute>
          <AdminHome/>
          </ProjectRoute>
      }/>


        <Route path='/donar-list' element={
          <ProjectRoute>
          <DonarList/>
          </ProjectRoute>
      }/>

<Route path='/hospital-list' element={
          <ProjectRoute>
          <HospitalList/>
          </ProjectRoute>
      }/>


<Route path='/org-list' element={
          <ProjectRoute>
          <OrgList/>
          </ProjectRoute>
      }/>



    <Route path='/donar' element={
      <ProjectRoute>
      <Donar/>
      </ProjectRoute>
    }/>

    <Route path='/hospital' element={
    <ProjectRoute>
    <Hospital/>
    </ProjectRoute>
    }/>

    <Route path='/organisation' element={
   <ProjectRoute>
    <Organisation/>
   </ProjectRoute>
    }/>

    <Route path='/consumer' element={
    <ProjectRoute>
      <Consumer/>
    </ProjectRoute>
    }/>

<Route path='/donation' element={
    <ProjectRoute>
      <Donation/>
    </ProjectRoute>
    }/>

<Route path='/analytics' element={
    <ProjectRoute>
      <Analytics/>
    </ProjectRoute>
    }/>




        <Route path='/dashboard' element={
          <ProjectRoute>
          <Dashboard/>
          </ProjectRoute>
        }/>


        <Route path='/login' element={
          <PublicRouter>
            <Login/>
          </PublicRouter>
        }/>

        <Route path='/register' element={
          <PublicRouter>
            <Register/>
          </PublicRouter>
        }/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
