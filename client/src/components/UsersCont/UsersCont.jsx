import { useEffect, useState } from "react"
import Card from "../Card/Card"
import Header from "../Header/Header"
import { StyledContainer } from "./styles"

const UserContainer = () => {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        getAllUsers(setUsers)
    },[])

    return (
        <StyledContainer>
            <Header/>
            {
            users.map(user => (<Card key={user.userId} {...user}/>))
            }
        </StyledContainer>
    )
}

const fetchData = async (url) => {
    const request = await fetch(url)
    const data = await request.json()
    return data
}


const getAllUsers = async (setUsers)=>{
    const response = await fetchData('http://127.0.0.1:3000/api/users')
    const allUsers = response
    setUsers(allUsers)
}


export default UserContainer