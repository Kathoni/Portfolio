import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mt-5"
>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}
      style={{width:"80%"}}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <br />
      <hr />
      <div>
        <h5> You can also reach me on social media.</h5>
            <ul
            style={{
                display: "flex",
                justifyContent: "space-evenly",
                listStyle: "none",
                margin: "0",
                padding: "0",
            }}>
                <li style={{
                    fontSize: "25px",
                }}><Link to={"https://www.instagram.com/k_.tho.ni"}><i class="bi bi-instagram"  ></i></Link></li>
                <li
                style={{ fontSize: "25px" }}
                ><Link to={"https://www.linkedin.com/in/sylvia-kathoni-869ab42a7/"}><i class="bi bi-linkedin"></i></Link></li>
                <li
                style={{ fontSize: "25px" }}><Link to={"https://github.com/Kathoni"}><i class="bi bi-github"></i></Link></li>
            </ul>
        <br />
        <h3
        style={{
            textAlign: "center",
            fontWeight: "light",
            fontSize: "20px",
            marginTop: "20px",
            marginBottom: "20px",
            fontFamily: "cursive",
        }}>Made with love by Kathoni❤</h3>
      </div>
    </div>
  );
};

export default ContactForm;
