import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
  import Form from 'react-bootstrap/Form';
  import './InputType.css'

function InputType({labelText,InputType,value,onChange,name}) {
  return (
    <>
        <div>
        <FloatingLabel
        controlId="floatingInput"
        label={labelText}
        name={name}
        value={value}
        onChange={onChange}
        className=" mb-3 " >
        <Form.Control className='field text-cente' type={InputType} placeholder="name@example.com" />
      </FloatingLabel>

      </div>

    </>
  )
}

export default InputType