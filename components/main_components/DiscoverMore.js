const DiscoverMore = () => {
  return (
    <>
      <section
        className="cta-one"
        style={{
          backgroundImage: "url(assets/images/backgrounds/cta-v1-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="cta-one__wrapper">
                <div className="cta-one__left">
                  <div className="cta-one__left-icon">
                    <span className="icon-farm"></span>
                  </div>
                  <div className="cta-one__left-title">
                    <h2>We’re Leader in Agriculture Market</h2>
                  </div>
                </div>
                <div className="cta-one__right">
                  <div className="cta-one__right-btn">
                    <a href="#" className="thm-btn">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DiscoverMore;
