import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import API from '../../Services/Api'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import moment from 'moment';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


function Analytics() {
  const [data,setData]= useState([])
  const [inventoryData,setInventoryData]= useState([])
  //Get  blood data
  const getBloodGroupData= async () =>{
    try {
      const {data}= await API.get('/analytics/bloodGroups-data')
      if(data?.success){
        setData(data.bloodGroupData)
      }

    } catch (error) {
      console.log(error)

      
    }
  };

  //lifecycle metthod
  useEffect(()=>{
    getBloodGroupData()
  },[])


    //get blood records
    const getBloodRecords = async()=>{
      try {
        const {data}=await API.get('/inventory/get-recent-inventory')
        if(data?.success){
          setInventoryData(data?.inventory)
          // console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(()=>{
      getBloodRecords()
    },[])
  

  return (
    <>
    <div className='analytics' style={{minHeight:'100vh'}}>
        <Header insideDashboard/>
        <div className="d-flex flex-row flex-wrap">
            {
              data?.map((record,i)=>(
                <MDBCard key={i} className='card my-4 mx-4  border' style={{width:'20rem'}}>
                <MDBCardBody>
                  <MDBCardTitle className='text-center fw-bolder card-title'>{record.bloodGroup}</MDBCardTitle>
                  <hr />
                  <MDBCardText className='mt-4'>
                  <div className='d-flex  w-100 justify-content-between'>
                  <p>Total In : <b>{record.totalIn}</b>(ML)</p>
                  <p>Total Out : <b>{record.totalOut}</b>(ML)</p>
                  </div>
                    <div className="card-footer w-100 text-center  text-light">
                      <p>Total Available : <b>{record.availabeBlood}</b></p>
                    </div>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
          
              ))
            }
        </div>

        <div className="  p-3">
        <h3 className='text-light text-center'>Recent Blood Transaction</h3>
        <hr className='text-center'/>
        <MDBTable border={1} borderColor='black'>
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
        {inventoryData.map(records=>(
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

    </div>
    </>
  )
}

export default Analytics