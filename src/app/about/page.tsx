import React from "react";
import Image from "next/image";
import { Button } from "@headlessui/react";
import { AwardIcon, MoveRightIcon } from "lucide-react";
import { BookOpenIcon } from "lucide-react";
import TeamSection from "../components/TeamSection";
const About = () => {
  return (
    <>
      <div className="about-wrapper">
        <div className="about-container">
          <div className="about-responsivness">
            <div className="about-image-container">
              <Image src="/MAIN-IMAGE.png" alt="" height={550} width={550} />
            </div>
            <div className="about-main-content">
              <p className="about-badge">What We Offer</p>
              <h1 className="about-heading">
                Learn & Grow Your{" "}
                <span className="about-skills-heading">SKILLS </span>
                From Anywhere
                <BookOpenIcon className="bookOpen-icon" size={32} />
              </h1>
              <p className="about-paragraph">
                Empower yourself with the flexibility to learn at your own pace,
                from any corner of the world. Our online couses are designed to
                fit seamlessly into your busy life, allowing you to acquire new
                skills and grow professionally without boundries. Whether you
                are at home, at work, or on the go, access expert-led courses
                anytime, anywhere, and take control of your future.💡
              </p>

              <div className="ourMission-wrapper">
                <h3 className="mission-heading">
                  <i> Our Mission</i>
                </h3>
                <p className="mission-para">
                  To provide accessible, high-quality online education that
                  empowers individuals to achieve their goals and excel in their
                  careers.
                </p>
              </div>
              <div className="checkbox-wrapper">
                <div className="checkbox-flex">
                  <input type="checkbox" className="checkbox-input"></input>
                  <div className="checkbox-value">
                    <label htmlFor="helper-checkbox" className="checkbox-text">
                      Commmitment To Excellence
                    </label>
                  </div>
                </div>
              </div>
              <div className="checkbox-wrapper">
                <div className="checkbox-flex ">
                  <input type="checkbox" className="checkbox-input"></input>
                  <div className="checkbox-value">
                    <label htmlFor="helper-checkbox" className="checkbox-text">
                      Collaborative Culture
                    </label>
                  </div>
                </div>
              </div>
              <div className="checkbox-wrapper">
                <div className="checkbox-flex ">
                  <input type="checkbox" className="checkbox-input"></input>
                  <div className="checkbox-value">
                    <label htmlFor="helper-checkbox" className="checkbox-text">
                      Adaptability & Innovation
                    </label>
                  </div>
                </div>
              </div>
              <div className="checkbox-wrapper">
                <div className="checkbox-flex ">
                  <input type="checkbox" className="checkbox-input"></input>
                  <div className="checkbox-value">
                    <label htmlFor="helper-checkbox" className="checkbox-text">
                      Continuous Learning
                    </label>
                  </div>
                </div>
                <div className="about-button-wrapper">
                  <Button className="about-button">
                    Learn More
                    <MoveRightIcon className="about-moveRight-icon" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="about-achievements-section">
            <h2 className="about-achievements-heading">
              <i> Our Achievements</i>
              <AwardIcon className="about-award-icon" size={34} />
            </h2>
            <div className="about-achievements-grid">
              <div className="about-achievements-content">
                <h3 className="achievements-value">500+</h3>
                <p className="achievements-text">Courses Available</p>
              </div>
              <div className="about-achievements-content">
                <h3 className="achievements-value">100%</h3>
                <p className="achievements-text ">Student Satisfaction</p>
              </div>
              <div className="about-achievements-content">
                <h3 className="achievements-value">10,000+</h3>
                <p className="achievements-text">Student Enrolled</p>
              </div>
            </div>
          </div>
          <TeamSection />
        </div>
      </div>
    </>
  );
};

export default About;
