import React from 'react'
import './contact.css'
function Contact() {
    return (
        <div className='container-fluid  my-5 ' >
            <div className='row mx-5 '  >
                <div className='display-3  my-3 '  >
                    <span className='text-danger' > Contact</span> Me
                </div>
                <div className='col-md-6 my-5 ' >
                    <h1>
                        GET IN TOUCH </h1>
                    <p> Hey! We are looking forward to start a project with you !
                        Feel free to reach out....  </p>
                    <div className='mx-3'  ><p>    <i className='fa fa-user mx-3 ' ></i>  Name </p>
                        <p> Satyam </p>
                    </div>
                    <div className='mx-3' > <p>    <i className='fa fa-map mx-3 ' ></i>   Location </p>
                        <p> Kurukshetra , Haryana </p>
                    </div>
                    <div className='mx-3' >
                        <p>   <i className='fa fa-envelope  mx-3 ' ></i>   Email </p>
                        <p> satyampandit021@gmail.com </p>
                    </div>
                    <div className=' mx-3' >
                        <p>      <i className='fa fa-phone mx-3 ' ></i>    Number </p>
                        <p>+91 8059424475 </p>
                    </div>
                </div>
                <div className='col-md-6  my-5 ' >
                    <h3> Send a Message </h3>
                    <input className="form-control my-3 input-btn " placeholder='enter ur name' />
                    <input className="form-control my-3 input-btn " placeholder='Enter Ur Email or Number' />
                    <input className="form-control my-3  input-btn " placeholder='Subject Of Message' />
                    <textarea placeholder='Message    ' className='form-control  input-btn' ></textarea>
                    <button className='btn btn-danger  my-3 ' > Submit </button>
                </div >   <div className='display-2 text-center my-5 '  >
                    <i className='fa fa-linkedin mx-3  border p-2 m-1'
                        onClick={() => {
                            window.open("https://www.linkedin.com/in/satyammernstackdev/")
                        }}

                    > </i>
                    <i onClick={() => {
                        window.open("https://wa.me/+918059424475")
                    }}
                        className='fa fa-whatsapp mx-3 border p-2 m-1  ' ></i>
                    <i onClick={() => {
                        window.open("https://www.instagram.com/satyam_119")
                    }} className='fa fa-instagram mx-3 border p-2 m-1  ' ></i>
                </div>
            </div>
        </div>
    )
}
export default Contact;