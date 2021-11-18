import React from "react";

export default function LoginForm(){
    return(
        <div className="login-form-section">
            <div className='login-form'>
                <form>
                    <input type='text' placeholder='Username or Email' name='users_name,users_email' />
                    <input type='text' placeholder='Password' name='users_password' />
                </form>
            </div>
        </div>
    )
}