import React from 'react';

export default function Contact({ input, handleChange, handleSubmit }) {
  return (
    <div>
      <h1>Contact Me!</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group my-4">
          <label htmlFor="name-input" className="mx-3">Name</label>
          <input
            type="text"
            placeholder="ex: John Kim"
            value={input.name}
            name="name"
            className="name-input me-2"
            onChange={handleChange}
          ></input>
        </div>
        <div className="input-group my-4">
          <label htmlFor="name-input" className="mx-3">Email</label>
          <input
            type="text"
            placeholder="ex: bobross@gmail.com"
            value={input.email}
            name="email"
            className="email-input me-2"
            onChange={handleChange}
          ></input>
        </div>
        <div className="input-group mb-3">
          <label htmlFor="name-input" className="mx-3">Message</label>
          <textarea
            placeholder="Type your message here"
            value={input.message}
            name="message"
            aria-label="message"
            className="form-control me-2"
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="btn btn-primary m-3">Send Message</button>
      </form>
    </div>
  );
}
