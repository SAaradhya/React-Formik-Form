import React from "react";
import { useNavigate } from 'react-router-dom';


function NotFound(){

    let navigate = useNavigate()
    function RedirectLogout(){
        navigate('/', true)}

    return(
    <>
    <div className="Not-found">
<form >
    <p className="not-found">Page your'e looking for does'nt exist.<b></b> You can try Again !!!</p>
    <button className='sign-in' onClick= {RedirectLogout}>ReLogin</button>

</form>
</div>
   
   
    </>)

}

export default NotFound;