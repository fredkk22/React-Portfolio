import React from 'react';

export default function Contact({ input, handleChange, handleSubmit }) {
  return (
    <div>
      <h1>Contact Me!</h1>
      <form onSubmit={handleSubmit}>
        <label for="name-input">Your Name</label>
        <input
          type="text"
          placeholder="Your Name"
          value={input}
          name="name"
          className="name-input"
          onChange={handleChange}
        ></input>
        <br />
        <label for="email-input">Your Email</label>
        <input
          type="text"
          placeholder="Your Email Address"
          value={input}
          name="email"
          className="email-input"
          onChange={handleChange}
        ></input>
        <br />
        <label for="message-input">Message</label>
        <input
          type="textarea"
          placeholder="Type your message here"
          value={input}
          name="message"
          className="message-input"
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
}
