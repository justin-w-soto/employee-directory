import React from 'react'

export default function Login() {
    return (
        <>

        <form className='login-form'>
            <label htmlFor="sign-in">Sign In</label>
            <input type="text" placeholder='email'/>
            <input type="text" placeholder='password'/>
            <button type='submit' className='btn-main'>Submit</button>
        </form>
            
        </>
    )
}
