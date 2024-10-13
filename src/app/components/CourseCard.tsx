import Link from "next/link";
import { FaClipboardCheck } from "react-icons/fa";
import Image from "next/image";
const CourseCard = () => {
  const courses = [
    {
      imgSrc: "/class1.png",
      title: "Master Python for Web Development",
      description:
        "Learn Python from scratch and build dynamic web applications. Perfect for beginners looking to step into web development.",
      duration: "8 weeks",
      level: "Beginner",
    },
    {
      imgSrc: "/class2.png",
      title: "Javascript Essentials",
      description:
        "Dive into the fundamentals of Javascript and discover how to create interactive web pages. Ideal for those new to web development.",
      duration: "6 weeks",
      level: "Advance",
    },
    {
      imgSrc: "/class3.png",
      title: "React for Beginners",
      description:
        "Explore the world of React.js and learn how to build scalable, efficient, and powerful modern, dynamic user interfaces for your web applications.",
      duration: "10 weeks",
      level: "Intermediate",
    },
    {
      imgSrc: "/class4.png",
      title: "Next for beginners",
      description:
        "Enhance your Next.js skills with advanced programming concepts and frameworks. perfect for those looking to deepen their knowledge.",
      duration: "12 weeks",
      level: "Intermediate",
    },
  ];

  return (
    <div className="courseCard-wrapper">
      {courses.map((course, index) => (
        <div key={index} className="courseCard-boxes">
          <Image
            src={course.imgSrc}
            alt={course.title}
            height={300}
            width={300}
            className="courseCard-images"
          />
          <div className="courseCard-content">
            <h3 className="courseCard-title">{course.title}</h3>
            <p className="courseCard-description">{course.description}</p>
            <div className="courseCard-bottom-content">
              <span className="courseCard-duration">{course.duration}</span>
              <span className="courseCard-level">{course.level}</span>
            </div>
            <div className="courseCard-link-wrapper">
              <Link
                href={`/courses/${course.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="courseCard-link"
              >
                <span>
                  Enroll Now <FaClipboardCheck />
                </span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CourseCard;
