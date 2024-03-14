import { useState} from "react";

const useFetchUsers = () => {
    const [users, setUsers] = useState([]);

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch("http://localhost:5000/api/student");
    //         const jsonData = await response.json();
    //         setUsers(jsonData);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // fetchData();
    setUsers(["Test","Test2"])
    // console.log("Test")
    return users;
};

export default useFetchUsers;
