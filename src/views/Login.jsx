import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { Link } from 'react-router-dom'

export default function Login() {
    const history = useHistory()
    const location = useLocation()
    const [error, setError] = useState(null);
    const { from } = location.state || { from: { pathname: '/' } };


    return (
        <>

<form className='form-main'>
            <fieldset>
                <label htmlFor="sign-in">Sign In</label>
                <br />
                <input type="text" placeholder='email'/>
                <input type="text" placeholder='password'/>
                <br />
                <button type='submit' className='btn-main'>Submit</button>
                <br />
                <Link 
                to='/signup' 
                className='sign-in-link'>
                    <span >Here by Mistake? Click here to sign up for an account</span>
                </Link>
            </fieldset>
        </form>
            
        </>
    )
}
