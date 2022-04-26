//Listar todos os membros e admins registados

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userApi } from "../../../api/userApi";



const AboutUs =()=> {
    const user = useSelector((state) => state.user);
    const [usersList, setUsersList] = useState([])

    const getUsersList = async()=> {
        const res = await userApi.getUsers();
        setUsersList(res.users)
    }

    useEffect(()=>{
        getUsersList()
    }, [])
    
    return <div>
        Our team: 
        
      
    </div>
}

export default AboutUs

//TODO o que vai retornar? lista de utilizadores - criar reducer?