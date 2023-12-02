import React from "react";

function ContactUs() {
  return (
    <div className="container text-left">
      <div>
        <h1>Contact Us</h1>
        <div className="mt-4">
          <p>
            If you have any questions, feedback, or inquiries, please feel free
            to reach out to us. We're here to assist you!
          </p>
          <p>
            You can contact us via email at{" "}
            <a href="mailto:info@notenirvana.com">info@notenirvana.com</a>.
          </p>
          <p>Alternatively, you can use the form below to send us a message:</p>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
              />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="6"
              ></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
