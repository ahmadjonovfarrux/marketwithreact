import React from "react";

function Hero() {
  return (
    <section className="container pt-10 pb-10">
      <div className="hero__container">
        <div className="hero__content">
          <h4 className="text-blue-600 hero__sale__subtitle">Season Sale</h4>
          <h1 className="hero__title">New Online Market</h1>
          <p className="hero__description">
            First of all Welcome to our online market's web page. You can find
            in this web everything what you need if you can't contact us our
            administration will help to order your items and you can get it in
            easy way.
          </p>
          <div className="hero__buttons__box">
            <button className="btn btn-primary hero__btn">SHOP NOW </button>
            <button className="btn btn-outline btn-primary hero__btn">
              READ MORE
            </button>
          </div>
        </div>
        <img
          className="hero__img"
          src="https://i.pinimg.com/736x/8a/2e/6c/8a2e6c4eefd309506bd6ae57d99d3240.jpg"
          alt="image of heroImg"
        />
      </div>
    </section>
  );
}

export default Hero;
