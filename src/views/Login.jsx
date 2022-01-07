import React from 'react'

export default function Login() {
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
              
            </fieldset>
        </form>
            
        </>
    )
}
