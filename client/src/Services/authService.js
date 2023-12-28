import { userLogin, userRegister } from '../Redux/features/auth/authActions'
import store from '../Redux/store'

export const handleLogin=(e,email,password,role)=>{
    e.preventDefault()
    try {
        if(!role || !email || !password){
            alert('Please Provide All Feilds')
        }else{
            store.dispatch(userLogin({email,password,role}))
        }
    } catch (error) {
        console.log(error);
    }
}

export const handleRegister =(e,name,role,email,password,phone,organisationName,address,hospitalName,website)=>{
    e.preventDefault()
    try {
        store.dispatch(userRegister({name,role,email,password,phone,organisationName,address,hospitalName,website}))
        // console.log('Register',e,name,email,password,phone,organisationName,address,hospitalName,website,role );
    } catch (error) {
        console.log(error);
    }
}