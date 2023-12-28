import React, { useEffect } from 'react'
import Sidebar from '../../Components/Shared/Layout/Sidebar'
import Spinner from '../../Components/Shared/Spinner'
import Layout from '../../Components/Shared/Layout/Layout'
import Header from '../../Components/Header'
import { useSelector } from 'react-redux'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import moment from 'moment'
import API from '../../Services/Api'
import { useState } from 'react'



function Organisation() {
  //get current user
  const { user}=useSelector(state=>state.auth)
    const {loading, error}=useSelector((state)=>state.auth)
    const [orgdata,setOrgData] = useState([])

    const getOrg= async()=>{
        try {
          if(user?.role === 'donar'){
            const {data}=await API.get('/inventory/get-organisation')
            console.log(data);
            if(data?.success){
              setOrgData(data?.organisations)
              console.log();
          }
           
            }
            if(user?.role === 'hospital'){
              const {data}=await API.get('/inventory/get-organisation-for-hospital')
              console.log(data);
              if(data?.success){
                setOrgData(data?.organisations)
                console.log();
            }
             
              }
  
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(()=>{
      getOrg();
    },[user])




  return (
    <>
    <div className="dashboard-donar" style={{overflow:'hidden'}}>
    <Header insideDashboard/>
    <Layout>
              {
      error && <span>{alert(error)}</span>
      }
      {
      loading ? (
        <Spinner/>
      ):(

      
        
        <div className="row">
            <div className="col-md-2 col-sm-12"><Sidebar/></div>

            <div className="col-md-10 col-sm-12">
            <div className="tablediv2  p-3">
            <MDBTable border={1} borderColor='black'>
      <MDBTableHead>
        <tr className='bg-light fw-bolder '>
          <th scope='col' className='text-danger '>Name</th>
          <th scope='col' className='text-danger'>Email</th>
          <th scope='col' className='text-danger'>Phone</th>
          <th scope='col' className='text-danger'>Address</th>
          <th scope='col' className='text-danger'>Date</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody className='text-light'>
        {orgdata?.map(records=>(
          
        <tr  key={records._id}>
        <td className='text-light'>{records.organisationName || records.name}</td>
        <td className='text-light'>{records.email}</td>
        <td className='text-light'>{records.phone}</td>
        <td className='text-light'>{records.address}</td>
        <td className='text-light'>
          {moment(records.createdAt).format('DD/MM/YYYY  h:mm A')}
        </td>
       </tr>
        ))}
      </MDBTableBody>
    </MDBTable>

             </div>

            </div>
        </div>
      )}
    </Layout>
    </div>
    </>  )}

export default Organisation