"use client";

import { useState } from 'react';
import GithubIcon from '../../public/github-icon.svg';
import LinkedinIcon from '../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

function EmailSection() {

  const [emailIsSubmitted, setEmailIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const options = {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        name : e.target.name.value,
        email : e.target.email.value,
        subject : e.target.subject.value,
        message : e.target.message.value
      })
    }
    const endpoint = '/api/send' ;
    const response = await fetch( endpoint, options);

    //const data = await response.json();

    if (response.status === 200) {
      console.log('Message Sent');
      setEmailIsSubmitted(true);
         e.target.name.value = "";
         e.target.email.value = "";
         e.target.subject.value = "";
         e.target.message.value = "";
    }

  }


  return (
    <section className = "grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id = 'contact'>
        <div className = "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 "></div>
      <div>
        <h5 className = "text-xl font-bold text-white my-2">Contact me</h5>
        <p className = "text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            This is the space for comunicate with me, 
            i currently looking for new oportunities and new experiences in programming  web develop. I'll waiting for 
            any quetion or just for a greeting.... and will response your messagge as fast i can.
        </p>
        <div className = "socials flex flex-row gap-2">
            <Link href = "github.com">
            <Image src = {GithubIcon} alt = "GitHub Icon" className = "w-12 contrast-0"/>
            </Link>
            <Link href = "linkedin.com">
            <Image src = {LinkedinIcon} alt = "Linkedin Icon" className = "w-12 contrast-0"/>
            </Link>           
        </div>
      </div>

      <div>
        <form className = "flex flex-col gap-3" onSubmit = {handleSubmit}>
            <div className = "mb-6">
            <label htmlFor="name" className = "text-white block mb-2 text-sm font-medium">Your Name</label>
            <input 
            type="text" 
            id ="name"
            name = "name" 
            /* required  */
            placeholder = "your name please" 
            className = "bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg blocl w-full p-2.5"
            />               
            </div>


            <div className = "mb-6">
            <label htmlFor="email" className = "text-white block mb-2 text-sm font-medium">Email</label>
            <input 
            type="email" 
            id ="email"
            name = "email" 
            required 
            placeholder = "type here your email" 
            className = "bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg blocl w-full p-2.5"
            />               
            </div>

           <div className = "mb-6">
            <label htmlFor="subject"  className = "text-white block mb-2 text-sm font-medium">Subject of Message</label>
            <input 
            type="text" 
            id ="subject"
            name = "subject" 
            required
            placeholder = "type here your subject" 
            className = "bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg blocl w-full p-2.5"
            />             
           </div>

           <div className = "mb-6">
            <label htmlFor="message" className = "text-white block mb-2 text-sm font-medium">Message</label>
            <textarea 
            name = "message"
            id ="message"
            required
            placeholder = "type here your message" 
            className = "bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg blocl w-full p-2.5"            
            />           
           </div>

           <button
           type = "submit"
           className = "bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
           >
           Send Your Message
           </button>

           { 
             emailIsSubmitted &&(
              <p className = "text-green-500 text-sm mt-2">
                Email was Sent Successfully
              </p>
             )
           }
          
        </form>
      </div>
    </section>
  )
}

export default EmailSection;
