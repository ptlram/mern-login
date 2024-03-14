import React from 'react'
import { useEffect,useState } from 'react'
const Task = () => {

    const [userdata, setUserData] = useState({})
    
    useEffect(()=>{
        const data = localStorage.getItem("user")
        setUserData(JSON.parse(data))
    },[])

    return (
        <>
            <h1>Name : {userdata.name}</h1>
            <h1>Email : {userdata.email}</h1>
            <h1>Age : {userdata.age}</h1>
        </>
    )
}

export default Task