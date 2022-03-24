import React,{useContext, useEffect, useState} from 'react';
import { AuthContext } from '../Context/AuthContext';
import { database } from '../firebase';
import Uploadfile from './Uploadfile';
import Post from './Post';
import Navbar from './Navbar';

function Feed() {
    const {user, logout} = useContext(AuthContext)
    const [userData, setUserData] = useState('')
    useEffect(()=>{
        const unsub = database.users.doc(user.uid).onSnapshot((snapshot)=>{
            setUserData(snapshot.data())
        })
        return () => {unsub()}
    },[user])
    return (
        <>
        <Navbar userData={userData}/>
         <div style={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            {/* <div className="comp" style={{width:'50%'}}>
                <h1>Hello from feed</h1>
                <button onClick={logout}> LOG OUT </button> 
            </div> */}
            <Uploadfile user = {userData}/>
            <Post userData={userData}/>
        </div>
        </>
    )
}

export default Feed