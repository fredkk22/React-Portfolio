import React from 'react';

export default function Contact({ input1, input2, input3, handleChange, handleSubmit }) {
  return (
    <div>
      <h1>Contact Me!</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="name-input">Your Name</label>
          <input
            type="text"
            placeholder="Your Name"
            value={input1}
            name="name"
            className="name-input"
            onChange={handleChange}
          ></input>
        </div>
        <br />
        <div className="form-group">
          <label for="email-input">Your Email</label>
          <input
            type="text"
            placeholder="Your Email Address"
            value={input2}
            name="email"
            className="email-input"
            onChange={handleChange}
          ></input>
        </div>
        <br />
        <div className="form-group">
          <label for="message-input">Message</label>
          <input
            type="textarea"
            placeholder="Type your message here"
            value={input3}
            name="message"
            className="message-input"
            onChange={handleChange}
          ></input>
        </div>
      </form>
    </div>
  );
}
