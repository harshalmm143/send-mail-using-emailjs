import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



function App() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gyy7sjm', 'template_f6v1ugq', form.current, 'DZh-vuDXf1wkgQssE')
      .then((result) => {
        console.log(result.text);
        alert("Send mail Successfully")
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Contact Us</p>
        <form ref={form} onSubmit={sendEmail}>
          <div className='container'>
            <div className='row'>
              <div class="form__group field">
                <input type='text' className='form__field' placeholder='Full Name' name="user_name" required />
                <label for="name" className="form__label">Full Name</label>
              </div>
              <div class="form__group field">
                <input type='email' className='form__field' placeholder='email' name="user_email" required />
                <label for="email" className="form__label">Email</label>
              </div>
            </div>
            <div className='row'>
              <div class="form__group field">
                <input type='text' className='form__field' placeholder='Subject' name="subject" required />
                <label for="subject" className="form__label">Subject</label>
              </div>
            </div>
            <div class="form__group field" style={{ marginTop: 20, marginBottom: 20 }}>
              <textarea name="message" cols={20} rows={2} className='form__field' ></textarea>
              <label for="message" className="form__label">Message</label>
            </div>
          </div>
          <button
            className="App-link"
            type='submit'
          >
            Send Mail
          </button>
        </form>

      </header>
    </div>
  );
}

export default App;
