import React, { useState } from "react";

const Login = ({ users }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userdata,setUserData] =  useState({})

    const onLoginClick = async (e) => {
        e.preventDefault()
        console.log(username,password)
        const response = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username, password
            })
        })
        const data = await response.json()
        // console.log(data)
        localStorage.setItem("user",JSON.stringify(data))
        setUserData(data)
    }

    console.log("test")
    return (
        <div>
            <form action="post">
                username : <input value={username} onChange={(e) => {
                    setUsername(e.target.value)
                }} type="text" />
                password : <input type="text" value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} />

                login : <input type="submit" onClick={(e)=>{
                    onLoginClick(e)
                }} value="login" />
            </form>

            {
                users.length > 0 && (<div>
                    {users[0].name}
                    {users[0].age}
                </div>)
            }
            <h1>Name : {userdata.name}</h1>
            <h1>Email : {userdata.email}</h1>
            <h1>Age : {userdata.age}</h1>

        </div>
    )
}



export default Login;