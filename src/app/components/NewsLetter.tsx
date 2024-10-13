import { FolderLockIcon, LockIcon, MailIcon } from "lucide-react";
import React from "react";

const NewsLetter = () => {
  return (
    <>
      <section className="newsletter-wrapper">
        <div className="newsletter-grid ">
          <div className="newsletter-responsive">
            <h2 className="signup-heading">
              Sign Up For Our
              <span>
                News Letter
                <div className="newsletter-heading">
                  <p style={{ fontSize: "30px" }}>📰</p>
                </div>
              </span>
            </h2>
            <p className="newsletter-paragraph ">
              Stay updated with the latest courses, expert tips, and special
              offers. Sign up for our newsletter to enhance your learning
              journey and never miss our on exciting oppertunities.📬
            </p>
            <form action="#">
              <div className="newsletter-form">
                <div className="newsletter-input">
                  <label htmlFor="email" className="newsletter-email-label">
                    Email Address
                  </label>

                  <div className="newsletter-email-box">
                    <MailIcon className="newsletter-mail-icon"></MailIcon>
                  </div>
                  <input
                    type="email"
                    className="newsletter-inputfield "
                    placeholder="Enter your email"
                    id="email"
                    required
                  ></input>
                </div>
                <div>
                  <button type="submit" className="newsletter-subscribe-button">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
            <div className="newsletter-privacy">
              <span className="newsletter-privacy-icons">
                <FolderLockIcon className="newsletter-folderlock-icon"></FolderLockIcon>
                <span className="newsletter-privacy-text">
                  We respect your privacy.
                </span>
              </span>

              <span className="newsletter-privacy-icons">
                <LockIcon className="newsletter-folderlock-icon"></LockIcon>
                <span className="newsletter-privacy-text">
                  No spam, unsubscribe anytime.
                </span>
              </span>
            </div>
          </div>
          <div>
            <img
              src="/support2.png"
              alt="boy-image"
              height={1000}
              width={1000}
              className="newsletter-image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
