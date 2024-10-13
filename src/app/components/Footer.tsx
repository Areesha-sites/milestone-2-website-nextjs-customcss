import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="logo">
          <Image
            src="/logo.png"
            alt="Website-logo"
            width={150}
            height={50}
            style={{ marginLeft: "30px" }}
          ></Image>
        </div>
        <div className="footer-container">
          <div className="footer-flexbox">
            <div className="main-content">
              <h3 className="heading">
                <i> Quick Links</i>
              </h3>
              <ul className="footer-links">
                <li>
                  <Link href="/" className="footer-link">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/about" className="footer-link">
                    AboutUs
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="footer-link">
                    Courses
                  </Link>
                </li>

                <i>
                  {" "}
                  <Link href="/newsletter" className="footer-link">
                    NewsLetter
                  </Link>
                </i>
                <li>
                  <Link href="/contact" className="footer-link">
                    ContactUs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="social-icons">
              <Link
                title="GitHub"
                target="_blank"
                href="https://github.com/Areesha-sites"
                className="social-icon"
              >
                <FaGithub size={24}></FaGithub>
              </Link>
              <Link
                title="Instagram"
                target="_blank"
                href="https://www.instagram.com/zoxo_emmaaa/?hl=en"
                className="social-icon"
              >
                <FaInstagram size={24}></FaInstagram>
              </Link>
              <Link
                title="Linkedin"
                target="_blank"
                href="https://WWW.linkedin.com/in/areesha-sattar-14b8832b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="social-icon"
              >
                <FaLinkedinIn size={24}></FaLinkedinIn>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Improve Your Skills. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
