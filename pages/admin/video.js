import Hero from "../../components/main_components/Hero";
import VideoCard from "../../components/VideoCard";
import AdminLayout from "../../components/layout/AdminLayout";

const VideoGallery = () => {
  return (
    <>
      <Hero name="Video Gallery Management" />
      <section
        className="gallery-filter"
        style={{ marginTop: "30px", marginBottom: "20px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="filter"
                style={{
                  boxShadow: "0 0 8px -3px",
                  padding: "20px",
                  borderRadius: "4px",
                }}
              >
                <form>
                  <div className="row">
                    <div className="col-md">
                      <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Title"
                      />
                    </div>
                    <div className="col-md">
                      <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="URL"
                      />
                    </div>
                    <div className="col-md-1">
                      <div
                        className="submit-btn"
                        style={{ textAlign: "right" }}
                      >
                        <button className="btn btn-primary" type="submit">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="video-content mt-3 mb-3">
            <div className="row">
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoGallery;

VideoGallery.getLayout = (VideoGallery) => (
  <AdminLayout>{VideoGallery}</AdminLayout>
);
