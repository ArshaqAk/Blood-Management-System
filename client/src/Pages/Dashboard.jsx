import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../Components/Shared/Spinner'
import Layout from '../Components/Shared/Layout/Layout'
import Header from '../Components/Header'
import Sidebar from '../Components/Shared/Layout/Sidebar'
import Modal from '../Components/Shared/Modal/Modal'
import API from '../Services/Api'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const [data,setData]= useState([])

  const {loading, error,user}=useSelector((state)=>state.auth)
  const navigate= useNavigate();

  const [staticModal, setStaticModal] = useState(false);
  // console.log(staticModal);


  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-inventory");
      if (data?.success) {
        setData(data?.inventory);
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getBloodRecords()
  },[])
  return (
    <>
    <div className='dashboard g-0' style={{overflow:'hidden'}}>
    <Header insideDashboard/>
    <Layout>
      {
        user?.role === 'admin' && navigate('/admin')
      }

      {
      error && <span>{alert(error)}</span>
      }
      {
      loading ? (
        <Spinner/>
      ):(

        <>
        <div className="row g-0">
          <div className="col-md-2 col-sm-12"><Sidebar/></div>

          {/* Dashboard */}
          <div className="col-md-10 col-sm-12 text-center">
        
        <div className="tablediv  p-3">
        <MDBTable className='table' border={1} borderColor='black'>
      <MDBTableHead>
        <tr className='bg-light fw-bolder '>
          <th scope='col' className='text-danger '>Blood Group</th>
          <th scope='col' className='text-danger'>Inventory Type</th>
          <th scope='col' className='text-danger'>Quantity</th>
          <th scope='col' className='text-danger'>Donar Email</th>
          <th scope='col' className='text-danger'>Time & Date</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody className='text-light'>
        {data.map(records=>(
        <tr  key={records._id}>
        <td className='text-light'>{records.bloodGroup}</td>
        <td className='text-light'>{records.inventoryType}</td>
        <td className='text-light'>{records.quantity} (ML)</td>
        <td className='text-light'>{records.email}</td>
        <td className='text-light'>
          {moment(records.createdAt).format('DD/MM/YYYY  h:mm A')}
        </td>
       </tr>
        ))}
      </MDBTableBody>
    </MDBTable>

        </div>
        <button className='btn btn-light m-3 ' data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className='fa-solid fa-plus'></i>Add</button>

            <Modal/>
          </div>
        </div>
        </>
      )}
    </Layout>
    </div>
    </>
  )
}

export default Dashboard