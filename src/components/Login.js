import React from 'react'
import "../styles/Login.css"
import logoLogin from "../images/LoginLogo.png"
import { Button } from '@mui/material'
import { auth, provider } from '../firebase'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

function Login() {
    const dispatch = useDispatch()
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
            }))
        })
        .catch(err => alert(err.message))
    }

  return (
    <div className='login'>
        <div className="login__container">
            <img  src={logoLogin} alt='gmail logo'/>
            <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
        </div>
    </div>
  )
}

export default Login