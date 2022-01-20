import Hero from "../components/main_components/Hero";
import VideoCard from "../components/VideoCard";
const Study = () => {
  return (
    <>
      <Hero name="Study" />

      <section className="projects-one projects-one--two projects-one--two--projects">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="projects-one--two--projects__wrapper">
                <div className="row">
                  <VideoCard link="https://www.youtube.com/embed/EYodtNHt3f0" />
                  <VideoCard link="https://www.youtube.com/embed/uqr8X7cp4WY" />
                  <VideoCard link="https://www.youtube.com/embed/_ULc_pkwMPA" />
                  <VideoCard link="https://www.youtube.com/embed/afBPBl7TJpM" />
                </div>
                <div className="projects-one--two--projects__btn text-center">
                  <a href="#" className="thm-btn">
                    load more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Study;
