import React, { useState } from "react";

export default function Contact() {
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newErrors = {};

    if (!formData.get("name").trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.get("email").trim()) {
      newErrors.email = "Email address is required.";
    } else if (!formData.get("email").includes("@")) {
      newErrors.email = "Please include an '@' in the email address.";
    }

    if (!formData.get("message").trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccessMessage("Form submitted successfully!");
      e.target.reset();
    } else {
      setSuccessMessage(""); 
    }
  };

  return (
    <div className="contactContainer">
      <h1>Contact</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your full name" />
        {errors.name && <p className="error">{errors.name}</p>}

        <br />

        <label htmlFor="email">Email address:</label>
        <input type="email" id="email" name="email" placeholder="Your email address" />
        {errors.email && <p className="error">{errors.email}</p>}

        <br />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here..."
          rows="5"
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}

        <br />
        <button type="submit">Submit</button>
        {successMessage && <p className="success">{successMessage}</p>}
      </form>
      <br />
      <h3>My Contact Info:</h3>
      <br />
      <p>Email: Enacra204@gmail.com</p>
      <p>Phone: 2107819412</p>
    </div>
  );
}