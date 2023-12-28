import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Shared/Layout/Sidebar'
import Spinner from '../Components/Shared/Spinner'
import Layout from '../Components/Shared/Layout/Layout'
import Header from '../Components/Header'
import API from '../Services/Api'
import { useSelector } from 'react-redux'

function Donation() {
    const {loading, error}=useSelector((state)=>state.auth)
    const {user}=useSelector((state)=>state.auth)
    const [data,setData] = useState([])
    //find donar records
    const getDonars= async()=>{
        try {
            const {data}=await API.post('inventory/get-inventory-hospital',{
                filters:{
                    inventoryType: 'in',
                    donar:user?._id,
                }
            })
            console.log(data);
            if(data?.success){
              setData(data?.inventory)
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
          <th scope='col' className='text-danger '>Blood Group</th>
          <th scope='col' className='text-danger'>Inventory Type</th>
          <th scope='col' className='text-danger'>Quantity</th>
          <th scope='col' className='text-danger'>Email</th>
          <th scope='col' className='text-danger'> Date</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody className='text-light'>
        {data?.map(records=>(
        <tr  key={records._id}>
        <td className='text-light'>{records.bloodGroup}</td>
        <td className='text-light'>{records.inventoryType}</td>
        <td className='text-light'>{records.quantity}</td>
        <td className='text-light'>{records.email}</td>
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
    </>
  )
}

export default Donation