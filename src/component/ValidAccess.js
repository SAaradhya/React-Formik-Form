import React from 'react';
import { useNavigate } from 'react-router-dom';


function ValidAccess()  {

        let navigate = useNavigate()
     function RedirectLogin(){
        navigate('/', true)
     }

    return(
        <>
         <div className="Not-found">
        <p className='not-found'> Valid credentials, Please verify once more this credentials. </p>

        <form>
        <button className='sign-in' onClick= {RedirectLogin}>LogOut</button>
        </form>
        
        </div>
        </>
    )
}

export default ValidAccess;         