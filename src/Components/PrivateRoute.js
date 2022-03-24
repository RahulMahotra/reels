import React,{useContext} from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom'

function PrivateRoute({component : Component, ...rest}) {
    const {user} = useContext(AuthContext)
  return (
   
 
         user ? <Component /> : <Navigate to="login" />
    
  
   
  )
}

export default PrivateRoute