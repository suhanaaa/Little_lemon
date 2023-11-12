import React from "react";
import "./Testimonials.css";
import Profile1 from "../../assets/icons_assets/person1.png";
import Profile2 from "../../assets/icons_assets/person2.png";
import Profile3 from "../../assets/icons_assets/person5.png";
import Profile4 from "../../assets/icons_assets/person4.png";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h3>Testimonials</h3>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <img src={Profile1} alt="Customer 1" className="profile-picture" />
          <p className="review">
            "Little Lemon provides an exceptional dining experience. The flavors
            are delightful, and the atmosphere is inviting."
          </p>
          <p>⭐⭐⭐⭐⭐</p>
          <p className="name">John Doe</p>
        </div>
        <div className="testimonial-card">
          <img src={Profile2} alt="Customer 2" className="profile-picture" />
          <p className="review">
            "I love the modern twist on traditional recipes. Little Lemon has
            become my go-to restaurant for Mediterranean cuisine."
          </p>
          <p>⭐⭐⭐⭐⭐</p>
          <p className="name">Sarah Smith</p>
        </div>
        <div className="testimonial-card">
          <img src={Profile3} alt="Customer 3" className="profile-picture" />
          <p className="review">
            "The Greek salad is a must-try! The ingredients are fresh, and the
            feta cheese adds a perfect touch. Highly recommended."
          </p>
          <p>⭐⭐⭐⭐⭐</p>
          <p className="name">Sam Johnson</p>
        </div>
        <div className="testimonial-card">
          <img src={Profile4} alt="Customer 4" className="profile-picture" />
          <p className="review">
            "Fantastic eatery with delectable cuisine and a warm atmosphere.
            Little Lemon is my go-to for Mediterranean delights."
          </p>
          <p>⭐⭐⭐⭐⭐</p>
          <p className="name">Emily Wilson</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
