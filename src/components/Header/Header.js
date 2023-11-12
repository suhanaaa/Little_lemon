import React from "react";
import HeaderImage from "../../assets/icons_assets/restauranfood.jpg";
import GreekSalad from "../../assets/icons_assets/greek salad.jpg";
import Bruchetta from "../../assets/icons_assets/bruchetta.svg";
import LemonDessert from "../../assets/icons_assets/lemon dessert.jpg";
import "./Header.css";
import Testimonials from "../Testimonials/Testimonials";
import About from "../About/About";

const Header = () => {
  return (
    <>
      <header className="hero-section">
        <div className="info-part">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Infusing the heart of Chicago with an authentic Mediterranean charm,
            our family-owned haven delights in blending traditional recipes with
            a contemporary touch, inviting you to savor a unique culinary
            journey.
          </p>
          <button className="btn">Reserve a table</button>
        </div>
        <div className="Image">
          <img src={HeaderImage} alt="" width={300} />
        </div>
      </header>

      <section className="specials">
        <div className="specials-header">
          <h2>This Weeks Specials!</h2>
          <button className="btn order">Online Menu</button>
        </div>
        <div className="card-container">
          <div className="card">
            <img src={GreekSalad} alt="" />
            <div className="first-row">
              <h4>Greek salad</h4>
              <p>$12.09</p>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemarry croutons{" "}
            </p>

            <h4>Order a delivery</h4>
          </div>
          <div className="card">
            <img src={Bruchetta} alt="Bruchetta" />
            <div className="first-row">
              <h4>Bruchetta</h4>
              <p>$5.99</p>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemarry croutons
            </p>
            <h4>Order a delivery</h4>
          </div>
          <div className="card">
            <img src={LemonDessert} alt="Lemon Desset" />
            <div className="first-row">
              <h4>Lemon Dessert</h4>
              <p>$6.00</p>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemarry croutons
            </p>
            <h4>Order a delivery</h4>
          </div>
          <div className="card">
            <img src={LemonDessert} alt="Lemon Desset" />
            <div className="first-row">
              <h4>Lemon Dessert</h4>
              <p>$6.00</p>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemarry croutons
            </p>
            <h4>Order a delivery</h4>
          </div>
        </div>
      </section>
      <Testimonials />
      <About />
    </>
  );
};

export default Header;
