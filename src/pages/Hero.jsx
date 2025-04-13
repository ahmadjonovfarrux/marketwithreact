import React from "react";

function Hero() {
  return (
    <section>
      <div className="hero__container">
        <div className="hero__content">
          <h4 className="text-blue-600 hero__sale__subtitle">Season Sale</h4>
          <h1 className="hero__title">New Online Market</h1>
          <p>
            First of all Welcome to our online market's web page. You can find
            in this web everything what you need if you can't contact us our
            administration will help to order your items and you can get it in
            easy way.
          </p>
          <div className="hero__buttons__box">
            <button>SHOP NOW</button>
            <button>READ MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
