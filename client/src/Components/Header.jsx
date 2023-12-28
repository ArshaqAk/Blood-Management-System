import React, { useState } from 'react'
import { MDBBadge } from 'mdb-react-ui-kit';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBBtn,
    MDBNavbarNav,
    MDBIcon,
    MDBInputGroup
  } from 'mdb-react-ui-kit';
  import blood_icon from '../Assets/blood-icon.jpg'
  import{useSelector} from 'react-redux'
  import { Link, useLocation, useNavigate } from 'react-router-dom';
  

  
function Header({insideDashboard}) {
  const location = useLocation();
    const [openNavNoTogglerThird, setOpenNavNoTogglerThird] = useState(false);
    const { user}=useSelector(state=>state.auth)
    // console.log(user);

   //logout handler
   const navigate= useNavigate()
   const handleLogout = ()=>{
    localStorage.clear()
    alert('Logout success')
    navigate('/login')
   }


  return (
    <div style={{fontFamily:'merriweather',position:'sticky',top:'0px',zIndex:'10'}}>
        <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo03'
            aria-controls='navbarTogglerDemo03'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavNoTogglerThird(!openNavNoTogglerThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBNavbarBrand href='/'>
            <img width={'50px'} height={'50px'} src={blood_icon} alt="" />
            <span className='fw-bolder fs-4'><span style={{color:'red'}}>B</span>lood  <span  style={{color:'red'}}>B</span>ank</span></MDBNavbarBrand>
          <MDBCollapse navbar open={openNavNoTogglerThird}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                {/* <MDBNavbarLink active aria-current='page' href='#'>
                  Home
                </MDBNavbarLink> */}
              </MDBNavbarItem>
              {/* <MDBNavbarItem>
                <MDBNavbarLink href='#'>Link</MDBNavbarLink>
              </MDBNavbarItem> */}
            </MDBNavbarNav>


            { 
            insideDashboard &&(
              <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
                
              {/* <MDBBtn outline>Log Out</MDBBtn> */}
              <div className='d-flex align-items-center justify-content-center'>
                <div className='d-flex mt-3 me-3'>
                  
                <p className=''> Welcome</p>
                <p className='text-dark ms-2'>{user?.name || user?.hospitalName || user?.organisation}</p>
                <p><MDBBadge className='ms-2 bg-secondary'>{user?.role}</MDBBadge></p>

                {
                  location.pathname === "/analytics" ?(
                    <Link to={'/dashboard'} className='ms-5 text-dark'>Dashboard</Link>
                  )
                   :(
                    <Link to={'/analytics'} className='ms-5 text-dark'>Analytics</Link>
                   )
                   
                }

                </div>
                
              <button onClick={handleLogout} className='btn btn-danger text-light btn-rounded'>LogOut</button>
              </div>
             
            </MDBInputGroup> 
            )
            }


          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

    </div>
  )
}

export default Header