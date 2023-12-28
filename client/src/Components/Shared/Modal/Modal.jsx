import React, { useState } from 'react';
import InputType from '../Form/InputType';
import API from '../../../Services/Api';
import { useSelector } from 'react-redux';

function Modal(){
    // const [inventoryType,setInventorytype]=useState("in");
    // const [bloodGroup,setBloodGroup]=useState("");
    // const [quantity,setQuantity]=useState(0);
    // const [donarEmail,setDonarEmail]=useState("");


    // const {user} = useSelector(state=>state.auth)
    // console.log(user);

    // //handle submit
    // const handleSubmit=async()=>{
  
    //     try {
    //         if(!bloodGroup || !quantity){
    //             return alert('Please provide All Fields');
    //         }
    //         const {data}= await API.post('inventory/create-inventory',{
    //             donarEmail,
    //             email:user?.email,
    //             organisation:user?._id,
    //             inventoryType,
    //             bloodGroup,
    //             quantity
    //         })            
    //         if(data?.success){
    //             alert('New record created')
    //             window.location.reload()
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         // window.location.reload()
            
    //     }
    // }

    const [inventoryType, setInventoryType] = useState("in");
    const [bloodGroup, setBloodGroup] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [email, setEmail] = useState("");
    const { user } = useSelector((state) => state.auth);
    // handle modal data
    const handleModalSubmit = async () => {
      try {
        if (!bloodGroup || !quantity) {
          return alert("Please Provide All Fields");
        }
        const { data } = await API.post("/inventory/create-inventory", {
          email,
          organisation: user?._id,
          inventoryType,
          bloodGroup,
          quantity,
          
        });
        if (data?.success) {
          alert("New Record Created");
          window.location.reload();
        }
      } catch (error) {
        alert(error.response.data.message);
        console.log(error);
        window.location.reload();
      }
    };
  
  
  
  return (
<>
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Manage Blood Record</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <div className="d-flex mb-3">
            Blood type:&nbsp;
            <div className="form-check ms-3">
            <input onChange={(e)=>setInventoryType(e.target.value)} type="radio" value={'in'} name='inRadio' defaultChecked  className="form-check-input" />
            <label htmlFor="in" className='form-check-label'>IN</label>
            </div>

            <div className="form-check ms-3">
            <input onChange={(e)=>setInventoryType(e.target.value)} type="radio" value={'out'} name='inRadio'   className="form-check-input" />
            <label htmlFor="out" className='form-check-label'>OUT</label>
            </div>
            

        </div>
        <select onChange={(e)=>setBloodGroup(e.target.value)} className="form-select" aria-label="Default select example">
        <option defaultValue={'Open this select menu'}>Open this select menu</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        </select> 

        <InputType labelText={'Donar Email'}
        InputType={'email'}
        value={email}
        onChange={(e)=>setEmail(e.target.value)} 
        />
        <InputType labelText={'Quantity (ml)'}
        InputType={'Number'}
        value={quantity}
        onChange={(e)=>setQuantity(e.target.value)} 
        />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleModalSubmit}>Add</button>
      </div>
   </div>
  </div>
</div>
    </>
  )
}

export default Modal