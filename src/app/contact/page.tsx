import React from "react";
import { Button } from "@headlessui/react";
import { UserPenIcon } from "lucide-react";
const Contact = () => {
  return (
    <>
      <div className="contact-wrapper">
        <div className="main-content">
          <h2 className="contactUs-heading">
            Contact <span className="us-heading">Us</span>
            <UserPenIcon className="user-pen-icon" size={34} />
          </h2>
          <p className="paragraph-content">
            Have questions about our courses or need assistance? We are here to
            help! Reach out to us through form below, and we will get back to
            you as soon as possible. 💬
          </p>
        </div>
        <div className="form-section">
          <form action="" className="form">
            <div className="">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="input"
              />
            </div>
            <div className="">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email "
                className="input"
              />
            </div>
            <div className="">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Your Message"
                className="textarea"
              ></textarea>
            </div>
          </form>
          <div className="send-message-button">
            <Button className="send-button">Send Message</Button>
          </div>
          <div className="more-info">
            <p>You can also reach us at:</p>
            <p className="take-email">
              Email:{" "}
              <a href="mailto:contact@improveyourskills.com">
                contact@improveyourskills.com
              </a>
            </p>
            <p className="take-email">
              Phone:
              <span> +123 456 7890</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
