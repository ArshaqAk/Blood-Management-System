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

function Hospital() {
    const {loading, error}=useSelector((state)=>state.auth)
    const [data,setData] = useState([])

    const getDonars= async()=>{
        try {
            const {data}=await API.get('inventory/get-hospitals')
            console.log(data);
            if(data?.success){
              setData(data?.hospitals)
            }
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(()=>{
        getDonars();
    },[])




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
            <div className="col-md-2"><Sidebar/></div>

            <div className="col-md-10">
            <div className="tablediv2  p-3">
            <MDBTable border={1} borderColor='black'>
      <MDBTableHead>
        <tr className='bg-light fw-bolder '>
          <th scope='col' className='text-danger '>Name</th>
          <th scope='col' className='text-danger'>Email</th>
          <th scope='col' className='text-danger'>Phone</th>
          <th scope='col' className='text-danger'>Address</th>
          <th scope='col' className='text-danger'> Date</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody className='text-light'>
        {data.map(records=>(
        <tr  key={records._id}>
        <td className='text-light'>{records.hospitalName}</td>
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
    </>  )
}

export default Hospital