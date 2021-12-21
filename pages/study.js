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
                  <VideoCard />
                  <VideoCard />
                  <VideoCard />
                  <VideoCard />
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
