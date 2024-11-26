import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const form = useRef(); // Define form reference

    const handleSubmit = (event) => {
        event.preventDefault();
        const password = event.target.elements.password.value;

        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!strongPasswordRegex.test(password)) {
            alert('Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.');
            return;
        }

        sendEmail(event); // Call sendEmail function if password validation passes
        // Additional logic after password validation
    };

    const sendEmail = (event) => {
        event.preventDefault();
        emailjs
            .sendForm(
                "service_e0zci94",
                "template_zy9use7",
                form.current, // Use form reference here
                "0QUNl4lWITC0SP42a"
            )
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                form.current.reset(); // Reset form using form reference
                toast.success('👌👌 very good', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            });
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit} ref={form}>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" name="user_name" required />
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input type="password" name="user_password" placeholder="Password" required />
                    <i className='bx bxs-lock-alt'></i>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" /> Remember me
                    </label>
                    <Link to="/Rest">Forgot password?</Link>
                </div>
                <button type="submit" className="btn">
                    Login
                </button>
                <div className="register-link">
                    <p>Don't have an account? <Link to="/SignUpForm">Sign up</Link></p>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Login;












// import React, { useRef } from 'react';
// import Home from './Home';
// import './Login.css';
 
 
// function Login() {
//     const email=useRef()
//     const password=useRef()
//     const getEmail=localStorage.getItem("emailData")
//     const getPassword=localStorage.getItem("passwordData")
//     const handleSubmit=()=>{
//         if(email.current.value=="abc@gmail.com"&&password.current.value=="12345"){
//             localStorage.setItem("emailData","abc@gmail.com")
//             localStorage.setItem("passwordData","12345")
//         }
//     }
//     return(
//         <>
//             <div class="wrapper">
//             {
//                 getEmail&&getPassword?
//                 <Home/>:
//                 <form onSubmit={handleSubmit}>
//                     <h1>Login</h1>
//                     <div class="input-box" >
//                         <input type="text" placeholder="email" ref={email} required/>
//                         <i class='bx bxs-user'></i>
//                     </div>
//                     <div class="input-box">
//                         <input type="password" placeholder="password"  ref={password} required/>
//                         <i class='bx bxs-lock-alt'></i>
//                     </div>
//                     <div class="remember-forgot">
//                         <label><input type="checkbox"/> Remember me
//                         </label>
//                     </div>
//                     <button type="submit" class="btn">Login</button>
//                 </form>
//                 }
//             </div>
//         </>
//     );
// }
// export default Login;