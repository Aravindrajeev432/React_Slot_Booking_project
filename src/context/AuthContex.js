import { createContext,useState } from "react"
import axios from 'axios';

export const AuthContext = createContext()
// export default AuthContext;



export const AuthProvider = ({children})=> {

    const [errormsg, setErrormsg] = useState(false)

    let userLogin = async (e)=>{
        e.preventDefault()
        console.log(e.target.email.value)
        console.log(e.target.password.value)
        let response = await  axios.post("http://127.0.0.1:8000/api/token/",
        {'email':e.target.email.value, 'password':e.target.password.value}).catch(
            (error)=>{

                let statuss = error.response.status
                // if(error.responce.status !="200"){
                //     setErrormsg(!errormsg)

                // }
                console.log(statuss)
                if (statuss !== 200){
                    setErrormsg(!errormsg)
                }

            }
            
        )
        // if(statuss != 200 ){
        //     setErrormsg(!errormsg)

        // }
        console.log(response)
    }

    let contextData = {
        userLogin:userLogin,
        errormsg:errormsg
    }

    return (
        <AuthContext.Provider value={contextData}>
                {children}
        </AuthContext.Provider>
    )
}