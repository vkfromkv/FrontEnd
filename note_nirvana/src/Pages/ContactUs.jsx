import React from "react";

function ContactUs() {
  return (
    <div className="container text-left">
        <div>
        <h1>Contact Us</h1>
        <div className="mt-4">
          <p>
            If you have any questions, feedback, or inquiries, please feel free to reach out to us. We're here to assist you!
          </p>
          <p>
            You can contact us via email at <a href="mailto:info@notenirvana.com">info@notenirvana.com</a>.
          </p>
          <p>
            Alternatively, you can use the form below to send us a message:
          </p>
          <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', marginTop: '20px' }}>
  <label htmlFor="name" style={{ marginBottom: '8px' }}>Name:</label>
  <input type="text" id="name" name="name" style={{ marginBottom: '15px' }} />

  <label htmlFor="email" style={{ marginBottom: '8px' }}>Email:</label>
  <input type="email" id="email" name="email" style={{ marginBottom: '15px' }} />

  <label htmlFor="message" style={{ marginBottom: '8px' }}>Message:</label>
  <textarea id="message" name="message" style={{ marginBottom: '15px' }}></textarea>

  <button type="submit" style={{ marginBottom: '10px' }}>Send Message</button>
</form>

        </div>
      </div>
    </div>
  );
}

export default ContactUs;