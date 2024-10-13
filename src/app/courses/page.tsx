"use client";
import { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import CourseCard from "../components/CourseCard";
import PopularCourses from "../components/PopularCourses";
import Testimonial from "../components/Testimonial";
const Classes = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className="container courses-wrapper">
      <div className="courses-section">
        <p className="courses-badge">Top Class Courses</p>
        <h1 className="courses-heading ">
          Explore the world best
          <span>
            Courses <FaGlobe size={30} className="fa-glob-icon" />
          </span>
        </h1>
        <p className="courses-para">
          Discover top Courses from leading experts around the world. Expand
          your Knowledge, gain new skills, and take your career to the next
          level with our comprehensive and flexible learning programs, available
          to you no matter where you are ☆
        </p>

        <nav className="courses-tabLinks" role="tablist">
          <button
            className={`${activeTab === 1 ? "active:text-gray-800" : ""}`}
            role="tab"
            aria-selected={activeTab === 1 ? "true" : "false"}
            aria-controls="tab-content-1"
            id="tab-1"
            onClick={() => handleTabClick(1)}
          >
            All Courses
          </button>
          <button
            className={`${activeTab === 2 ? "active:text-gray-800" : ""}`}
            role="tab"
            aria-selected={activeTab === 2 ? "true" : "false"}
            aria-controls="tab-content-2"
            id="tab-2"
            onClick={() => handleTabClick(2)}
          >
            Popular Courses
          </button>
          <button
            className={`${activeTab === 3 ? "active:text-gray-800" : ""}`}
            role="tab"
            aria-selected={activeTab === 3 ? "true" : "false"}
            aria-controls="tab-content-3"
            id="tab-3"
            onClick={() => handleTabClick(3)}
          >
            Testimonial
          </button>
        </nav>

        {/* ============================ */}
        <div className="courses-tabs-content">
          <div
            id="tab-content-1"
            role="tabpanel"
            aria-labelledby="tab-1"
            className={activeTab === 1 ? "active" : ""}
          >
            <CourseCard />
          </div>
          {/* ============================ */}
          <div
            id="tab-content-2"
            role="tabpanel"
            aria-labelledby="tab-2"
            className={activeTab === 2 ? "active" : ""}
          >
            <PopularCourses />
          </div>
          {/* ============================ */}
          <div
            id="tab-content-3"
            role="tabpanel"
            aria-labelledby="tab-3"
            className={activeTab === 3 ? "active" : ""}
          >
            <Testimonial />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Classes;
