import React, { useState } from 'react'
import InputType from './InputType'
import { MDBRadio } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom'
import { handleLogin, handleRegister } from '../../../Services/authService';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
 
function Form({formType,submitBtn,formTitle,}) {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [role,setRole]=useState('donar')
  const [name,setName]=useState('')
  const [organisationName,setOrganisationName]=useState('')
  const [hospitalName,setHospitalName]=useState('')
  const [website,setWebsite]=useState('')
  const [address,setAddress]=useState('')
  const [phone,setPhone]=useState('')
  return (
    <>
    <div className="container shadow-lg rounded logSwitch">
      <div className="row d-flex h-100">
      <div className="col-lg-3 col-sm-12 text-center logSwitchbg" style={{backgroundColor:'rgba(255, 0, 0, 0.742)',color:'white'}}> 
        <div className=' align-item-center justify-content-center mt-4'>
        
          {
            formType==='register'? <div><h2>One of us?</h2><Link to={'/login'}><button className='btn btn-light  btn-rounded btn-sm'>Login</button> </Link></div>: <div><h2>New to here?</h2><Link to={'/register'}><button className='btn btn-light btn-rounded btn-sm'>Register</button></Link></div>

          }
          <Link style={{textDecoration:'none',color:'#fff'}} to={'/'}><p className='mt-2'>Go to home</p></Link>
        </div>
       </div>

    <div className="col-lg-9 col-sm-12 text-center">
     <form onSubmit={(e)=>{
      if(formType === 'login') return handleLogin(e,email,password,role)
      if(formType === 'register') return handleRegister(e,name,role,email,password,phone,organisationName,address,hospitalName,website)
     }}>
      <div className='formTable text-center m-auto  mt-4'>
        <h2>{formTitle}</h2>
        <hr className='text-danger' />
        <div className="row mt-3">
        <div className="d-flex mb-3 col-md-6 col-sm-12">

      <div className="form-check ">
      <MDBRadio name='role' id='donarRadio' defaultChecked label='Donar' value={"donar"} onChange={(e)=>setRole(e.target.value)} />
      </div>

      <div className="form-check">
      <MDBRadio name='role' id='adminRadio'  label='Admin' value={"admin"} onChange={(e)=>setRole(e.target.value)} />
      </div>
      </div>

      <div className="col-sm-12  col-md-6 d-flex mb-3 ">
      <div className="form-check">
      <MDBRadio name='role' id='hospitalRadio'  label='Hospital' value={"hospital"} onChange={(e)=>setRole(e.target.value)} />
      </div>

      <div className="form-check">
      <MDBRadio name='role' id='organisationRadio'  label='Organisation' value={"organisation"} onChange={(e)=>setRole(e.target.value)} />
      </div>
      </div>

      

        </div>
  {(() => {
  switch (formType) {
    case 'login':
      return (
        <>
          <InputType className='w-25' labelText={'Enter Your Email'} InputType={'email'} name={'email'} value={email} onChange={(e) => setEmail(e.target.value)} />
          <InputType labelText={'Enter Your Password'} InputType={'password'} name={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
        </>
      );

    case 'register':
      return (
        <>
          {(role === "admin" || role === "donar") && (
            <InputType labelText={'Enter Your Name'} InputType={'text'} name={'name'} value={name} onChange={(e) => setName(e.target.value)} />
          )}

          {role === 'hospital' && (
            <InputType labelText={'Enter Hospital Name'} InputType={'text'} name={'hospitalName'} value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} />
          )}

          {role === 'organisation' && (
            <InputType labelText={'Enter Organisation Name'} InputType={'text'} name={'organisationName'} value={organisationName} onChange={(e) => setOrganisationName(e.target.value)} />
          )}

          <InputType labelText={'Enter Your Email'} InputType={'email'} name={'email'} value={email} onChange={(e) => setEmail(e.target.value)} />
          <InputType labelText={'Enter Your Password'} InputType={'password'} name={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
          <InputType labelText={'Enter Website Name'} InputType={'text'} name={'website'} value={website} onChange={(e) => setWebsite(e.target.value)} />
          <InputType labelText={'Enter Your Address'} InputType={'text'} name={'address'} value={address} onChange={(e) => setAddress(e.target.value)} />
          <InputType labelText={'Enter Phone Number'} InputType={'text'} name={'phone'} value={phone} onChange={(e) => setPhone(e.target.value)} />
        </>
      );

    default:
      return null;
  }
})()}      
      <button className='btn btn-dark btn-rounded' style={{width:'200px'}}>{submitBtn}</button>

      </div>

      </form>

        </div>
      </div>

    </div>
    </>
  )
}

export default Form