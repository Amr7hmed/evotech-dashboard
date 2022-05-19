import React, { useState } from 'react';
import Logo  from "../../images/logo-header.png";
import FormContact from './form.jsx';



function Login() {
  return (
    <section className='login'>
        <div className='login__contener'>
            <img src={Logo} alt="logo-header" />
            <FormContact/>
        </div>
    </section>
  )
}

export default Login;