import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import HeroSection from '../HeroSection';
import Footer from '../Footer';


function SignUp() {

    // const root = document.documentElement;
    // const eye = document.querySelector('.eye');
    // const passwordInput = document.querySelectorAll('.user')[1];

    // eye.addEventListener('Click', function (){
    //     root.classList.toggle('active')

    //     eye.classList.toggle('fa-eye-slash')

    //     passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password'

    //     passwordInput.focus()
    // });

    return (
        <>
        <HeroSection />
        <main className='body'>
        <div className='container'>
            <h1 className='h1'>LOGIN</h1>
            <i className='fa fa-user icon' />
            <div className='input'>
                <input type='text' className='user' placeholder='Username'/>
            </div>
            <i className='fa fa-key icon' />
            <div className='input'>
                <input type='password' className='user' placeholder='Password' />
            </div>
            <i className='fa fa-eye eye'/>
            <Link to='/' className='forgetpass'>Forget Password?</Link>
            <button className='submit'>Login</button>
        </div>
        </main>
        <Footer />
        </>
    );
};

export default SignUp

