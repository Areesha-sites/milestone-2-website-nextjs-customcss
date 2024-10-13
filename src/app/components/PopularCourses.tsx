import { FaClipboardCheck } from "react-icons/fa";
const PopularCourses = () => {
  const popularCourses = [
    {
      imgSrc: "/class5.jpg",
      title: "Data Science Bootcamp",
      description:
        "Learn data analysis, visualization, and machine learning techniques in this comprehensive bootcamp.",
      instructor: "Dr. Sarah Khan",
      duration: "8 Weeks",
      rating: 4.5,
    },
    {
      imgSrc: "/dev1.jpg",
      title: "Full-Stack Web Development",
      description:
        "Become a full-stack developer and master both front-end and back-end technologies.",
      instructor: "John Doe",
      duration: "10 Weeks",
      rating: 5.0,
    },
  ];

  return (
    <div className="popularCourses-wrapper">
      <h2 className="popularCourses-heading">
        <i> Popular Courses</i>
      </h2>
      <div className="popularCourses-section">
        {popularCourses.map((course, index) => (
          <div key={index} className="popularCourses-boxes">
            <img
              className="popularCourses-images"
              src={course.imgSrc}
              alt={course.title}
            />
            <div className="popularCourses-content">
              <h3 className="popularCourses-title">{course.title}</h3>
              <p className="popularCourses-description">{course.description}</p>
              <div className="popularCourses-bottom-content">
                <span className="popularCourses-duration">
                  {course.duration}
                </span>
                <span className="popularCourses-rating">
                  {"★".repeat(Math.round(course.rating))}
                </span>
              </div>
              <button className="popularCourses-button">
                <span className="popularCourses-button-text">
                  Enroll Now <FaClipboardCheck />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
