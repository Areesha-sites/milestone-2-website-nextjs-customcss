import React from "react";
import Image from "next/image";
const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "Co-Founder 👑",
      Image: "/courses1.jpeg",
      bio: "Johnis a skilled educator with over 10 years of experience in online learning.",
    },
    {
      name: "Jane Smith",
      position: "Lead Instructor",
      Image: "/courses2.jpeg",
      bio: "Jane specializes in digital marketing and has helped thousands of students grow their skills.",
    },
    {
      name: "Sam Wilson",
      position: "Course Designer",
      Image: "/courses3.jpeg",
      bio: "Sam is passionate about creating engaging learning experience and course materials.",
    },
  ];

  return (
    <>
      <section className="teamSection-wrapper">
        <div className="teamSection-container">
          <h2 className="teamSection-heading">
            <i> Meet Our Team💜</i>
          </h2>
          <div className="teamSection-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="teamSection-box">
                <Image
                  src={member.Image}
                  alt={member.name}
                  width={400}
                  height={200}
                  className="teamSection-image"
                />
                <h3 className="teamSection-name">{member.name}</h3>
                <p className="teamSection-position">{member.position}</p>
                <p className="teamSection-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
