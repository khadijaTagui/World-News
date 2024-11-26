import React, { useRef } from "react";
import emailjs, { send } from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs
      .sendForm(
        "service_e0zci94",
        "template_zy9use7",
        form.current,
        "0QUNl4lWITC0SP42a"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
         toast.success('🦄 Wow so easy!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }); // Show success toast
        },
       
      );
  };

  return (
   
     <center> <form ref={form} onSubmit={sendEmail}>
     <div class="input-box" >
       <input type="text" placeholder="Username"  name="user_name" required />
       <i class='bx bxs-user'></i>
     </div>
     <div class="input-box">
       <input type="email" placeholder="Email" name="user_email" required />
       <i class='bx bxs-lock-alt'></i>
     </div>
     <div class="input-box">
       <textarea type="text" placeholder="Message" name="message" required />
       <i class='bx bxs-lock-alt'></i>
     </div>
    
     <button type="submit" onClick={send}>Send</button>

  
 <ToastContainer />
   </form ></center>
  );
};

export default ContactUs;
