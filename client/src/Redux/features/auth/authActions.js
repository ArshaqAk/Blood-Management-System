import {createAsyncThunk} from "@reduxjs/toolkit"
import API from "../../../Services/Api"

export const userLogin = createAsyncThunk(
   
    'auth/login',
    async({role,email,password},{rejectWithValue})=>{
        try {
            const {data}=await API.post('/auth/login',{role,email,password})
            //store the token
            if(data.success){
                alert(data.message);
                localStorage.setItem('token',data.token)
                window.location.replace("/dashboard")
                
            }
            return data;
        } catch (error) {
            if(error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
    
        }else{
            return rejectWithValue(error.message)
        }
    }
});


// export const userRegister = createAsyncThunk(
//     'auth/register',
//     async ({name, role, email, password, phone, organisationName, address, hospitalName, website }, { rejectWithValue }) => {
//         try {
//             const { data } = await API.post('/auth/register', {
//                 name,
//                 role,
//                 email,
//                 password,
//                 phone,
//                 organisationName,
//                 address,
//                 hospitalName,
//                 website,
//             });

//             if (data?.success) {
//                 alert('Registration successful. Please log in.');
//                 window.location.replace('/login');
//                 // You might consider dispatching a separate action for navigation instead of directly manipulating the window.location
//                 // dispatch(userRegisterSuccess());
//             }

//             return data;
//         } catch (error) {
//             console.error(error);

//             if (error.response && error.response.data.message) {
//                 return rejectWithValue(error.response.data.message);
//             } else {
//                 return rejectWithValue('An error occurred during registration.');
//             }
//         }
//     }
// );

//register
export const userRegister = createAsyncThunk(
    "auth/register",
    async (
      {
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website,
      },
      { rejectWithValue }
    ) => {
      try {
        const { data } = await API.post("/auth/register", {
          name,
          role,
          email,
          password,
          phone,
          organisationName,
          address,
          hospitalName,
          website,
        });
        if (data?.success) {
          alert("User Registerd Successfully");
          window.location.replace("/login");
        }
      } catch (error) {
        console.log(error);
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  );


//current user
export const getCurrentUser =createAsyncThunk(
    '/auth/current-user',
    async({rejectWithValue})=>{
        try {
            const res =await API.get('/auth/current-user')
           if(res?.data){
            return res?.data
           }
        } catch (error) {
            if(error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
    
            }else{
                return rejectWithValue(error.message)
            }
        }
    }
)
