import React from 'react';
import { Navigate } from 'react-router-dom'

function publicRouter({children}) {
if(localStorage.getItem('token')){
    return <Navigate to='/dashboard'/>

}
else{
    return children;
}
}

export default publicRouter