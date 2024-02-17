import React, { useState } from 'react';
import axios from 'axios';
import './ContactFormStyles.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Make a POST request to your backend API endpoint using Axios
        axios.post('/enquiry', formData)
            .then(response => {
                if (response.status === 201) {
                    // Clear form fields
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    });
                    // Set submitted state to true
                    setSubmitted(true);
                } else {
                    alert('Failed to send message. Please try again later.');
                }
            })
            .catch(error => {
                console.error('Error sending message:', error);
                alert('Failed to send message. Please try again later.');
            });
    };

    return (
        <div className="form-container">
            <h1>Send a message to us!</h1>
            {submitted ? (
                <p>Thanks for your enquiry! We will get back to you as soon as possible.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        rows="4"
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            )}
        </div>
    );
}

export default ContactForm;
