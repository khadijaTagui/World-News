import React from 'react';
import { Link } from 'react-router-dom';
const SignUpForm = () => {
 
  return (
    <>
            <div class="wrapper">
                <form action="">
                    <h1>Sign Up</h1>
                    <div class="input-box" >
                        <input type="text" placeholder="First Name"  name="user_name" required/>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-box" >
                        <input type="text" placeholder="Last Name"  name="user_name" required/>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-box" >
                        <input type="email" placeholder="Email" name="user_email" required/>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="password" name="user_password" required/>
                        <i class='bx bxs-lock-alt'></i>
                    </div>
                    
                    <button type="submit" class="btn">Sign Up</button>
                    <div class="register-link">
                        <p> Already registerd <a href=''>
                           </a><Link to="/" >sign in</Link></p>
                    </div>
                 
                </form>
            </div>
        </>
  );
};

export default SignUpForm;
