import React from "react";
import { useState } from "react";
const Register = ({ users }) => {


    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [age, setage] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = { name, email, age, username, password }
            const response = await fetch("http://localhost:5000/api/student", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            console.log(response.data);
            alert("create sucessfully")
        }
        catch (err) {
            console.log(err)

        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                name :<input type="text" value={name} onChange={e => { setname(e.target.value) }} />
                email :<input type="email" value={email} onChange={e => { setemail(e.target.value) }} />
                age :<input type="text" value={age} onChange={e => { setage(e.target.value) }} />
                username:<input type="text" value={username} onChange={e => { setusername(e.target.value) }} />
                password:<input type="password" value={password} onChange={e => { setpassword(e.target.value) }} />
                confirm password:<input type="password" value={password} onChange={e => { setpassword(e.target.value) }} />
                submit <input type="submit" />
            </form>

        </div>


    )
}

export default Register;