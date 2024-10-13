import React from "react";
import { Button } from "@headlessui/react";
import { ChevronRight, MessageCircleHeart } from "lucide-react";
const Testimonial = () => {
  return (
    <>
      <div className="container testimonial-wrapper">
        <div className="testimonial-section">
          <p className="testimonial-badge">Testimonials</p>
          <h1 className="testimonial-heading">
            What Our Students Say About
            <br />
            <span>
              Courses
              <MessageCircleHeart
                className="testimonial-circle-heart"
                size={32}
              ></MessageCircleHeart>
            </span>
          </h1>
          <img
            src="/girl.png"
            alt=""
            height={200}
            width={200}
            className="testimonial-image"
          />
          <h1 className="testimonial-image-text">Areesha</h1>
          <p className="testimonial-content">
            <i>Our Students</i> success is our top priority. Each testimonial
            you see here reflects the hard work, dedication, and growth od
            individuals who have taken our courses. These stories are proof of
            the transformative impact our programs have on careers, skills, and
            personal development. We hbelieve in nurturing potential, and our
            students achievements inspire us to keep delivering the best
            educational experience possible. ⋆｡°✩
          </p>

          <div className="testimonial-bottom-wrapper">
            <div className="testimonial-bottom-images">
              <img
                src="/courses1.jpeg"
                alt=""
                className="testimonial-small-image"
              />
              <img
                src="/courses3.jpeg"
                alt=""
                className="testimonial-small-image-other"
              />
              <img
                src="/testimonial.png"
                alt=""
                className="testimonial-small-image-other"
              />
              <img
                src="/girl.png"
                alt=""
                className="testimonial-small-image-other"
              />
              <img
                src="/Fourth-Image.png"
                alt=""
                className="testimonial-small-image-other"
              />
            </div>
            <div className="testimonial-rating-wrapper">
              <div className="testimonial-rating-section">
                <h3 className="testimonial-rating">4.6</h3>
                <i className="bx bxs-star testimonial-star"></i>
              </div>
            </div>
            <h3 className="testimonial-rating-text">Rated by 25k on google.</h3>
          </div>
          <Button className="testimonial-button">
            Read More <ChevronRight></ChevronRight>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
