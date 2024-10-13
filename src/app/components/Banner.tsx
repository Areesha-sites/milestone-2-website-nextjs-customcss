import { Button } from "@headlessui/react";
import { GraduationCapIcon, MoveRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="banner-container">
        <div className="banner-main-flexbox">
          <div className="banner-grid">
            {/* ========Left Section========= */}
            <div className="banner-left-section">
              <p className="banner-badge">Feed Your Knowledge</p>
              <h1 className="banner-main-heading">
                Develop your skills with online
                <span>
                  Courses
                  <GraduationCapIcon
                    className="banner-graduation-cap-icon"
                    size={32}
                  ></GraduationCapIcon>
                </span>
              </h1>
              <p className="banner-des">
                Unlock your potential and enhance your skills with a wide range
                of online course designed by industry experts. Whether You are a
                beginner or looking to upgrade your Knowledge, our flexible and
                accessible learning platform empowers you to learn at your own
                pace, anytime and anywhere. Join Thousands of learners and take
                the next step in your personal and professional growth today.📚
                <br />
                <b>
                  <i>
                    Learning never stops, and neither should your journey to
                    success. ♡
                  </i>
                </b>
              </p>

              <Button className="banner-button">
                Get Started
                <MoveRightIcon className="banner-move-right-icon"></MoveRightIcon>
              </Button>
            </div>
            {/* ========right section=========== */}
            <div className="banner-right-section">
              <Image
                src="/Fourth-Image.png"
                alt="Banner"
                height={600}
                width={600}
                className="banner-image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
