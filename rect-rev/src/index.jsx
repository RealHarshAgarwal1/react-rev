import { useEffect, useState } from "react";

export default function Users() {
    const [usersList, setUsersList] = useState([]);
    const [pending,setPending]=useState(0);

    function handleLoadUser() {
        fetchAllUsers();
    }

    async function fetchAllUsers() {
        try {
            setPending(true)
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json();

            if(result?.users){
                setUsersList(result.users)
                setPending(false)
            }else{
                setUsersList([]);
                setPending(false)
            }
            console.log(result);
        } catch (error) {
            console.error(error);
        }

    }
    
    // useEffect(() => {
    //     fetchAllUsers();
    // }, []);

    console.log(usersList);

    if(pending) return <h1>Fetching users Please wait</h1>

    return(
        <div>
            <h2>Users List</h2>
            <button onClick={handleLoadUser}>Load Users</button>
            <h3>{
                usersList && usersList.length>0?usersList.map((userItem)=> <li key={userItem?.id}>
                    <p>{userItem?.firstName}-{userItem?.lastName}</p>

                </li>): <h1>NO user found</h1>
                }</h3>
        </div>
    );
}