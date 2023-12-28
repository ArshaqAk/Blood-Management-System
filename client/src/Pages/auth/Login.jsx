import React from 'react'
import Form from '../../Components/Shared/Form/FormComponent'
import {useSelector} from 'react-redux'
import Spinner from '../../Components/Shared/Spinner'

function Login() {
  const {loading,error} = useSelector(state=>state.auth)
  return (
    <>
    {error && <span>{alert(error)}</span>}
    {loading? <Spinner/> :(
     
      <div className="row g-0">
        <div className="col-md-12 form-container mt-3 " >
          <Form 
          formTitle={'Sign In'} 
          submitBtn={"Login"}
          formType={'login'}
          />
        </div>
      </div>
   

    )}
     </>
  )
}

export default Login