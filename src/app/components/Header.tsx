"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import "boxicons/css/boxicons.min.css";
import Link from "next/link";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="header-wrapper">
      <header className="header">
        <nav aria-label="Global" className="nav">
          {/* ==============logo section============================ */}
          <div className="header-logo-container">
            <Link href="/" className="header-logo-link">
              <Image
                src="/logo.png"
                alt="Education-logo"
                height={40}
                width={130}
              ></Image>
            </Link>
          </div>
          <div className="header-bar-button-container">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="header-bar-button"
            >
              <Bars3Icon aria-hidden="true" className="header-bar-icon" />
            </button>
          </div>
          <div className="header-nav-links">
            <Link href="/" className="header-nav-link">
              Home
            </Link>
            <Link href="/about" className="header-nav-link">
              About Us
            </Link>
            <Link href="/courses" className="header-nav-link">
              Courses
            </Link>
            <Link href="/newsletter" className="header-nav-link">
              NewsLetter
            </Link>
            <Link href="/contact" className="header-nav-link">
              Contact Us
            </Link>
          </div>
          {/* ===============Shopping Cart and User Icon=============== */}
          <div className="header-nav-icons">
            <FaSearch
              size={20}
              className="header-nav-icon"
              title="Search-Bar"
            ></FaSearch>
            <FaUserCircle
              size={20}
              className="header-nav-icon"
              title="User"
            ></FaUserCircle>
            <FaBell
              size={20}
              className="header-nav-icon"
              title="Notification"
            ></FaBell>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="header-dialog"
        >
          <div className="header-mob-wrapper" />
          <DialogPanel className="header-dialog-panel">
            <div className="header-hidden-links">
              <Link href="/" className="header-mob-logo-link">
                <Image
                  src="/logo.png"
                  alt="Education-logo"
                  height={40}
                  width={130}
                ></Image>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="
                header-close-button"
              >
                <XMarkIcon aria-hidden="true" className="header-mark-icon" />
              </button>
            </div>
            <div className="header-mob-nav-wrapper">
              <div className="header-mob-nav-section">
                <div className="header-mob-links">
                  <Link
                    href="/"
                    className="header-mob-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="header-mob-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/courses"
                    className="header-mob-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Courses
                  </Link>

                  <Link
                    href="/newsletter"
                    className="header-mob-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    NewsLetter
                  </Link>

                  <Link
                    href="/contact"
                    className="header-mob-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="header-mob-icons">
                  <FaSearch size={20} className="header-mob-icon"></FaSearch>
                  <FaUserCircle
                    size={20}
                    className="header-mob-icon"
                  ></FaUserCircle>
                  <FaBell size={20} className="header-mob-icon"></FaBell>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
