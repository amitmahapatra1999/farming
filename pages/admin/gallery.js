import GalleryImage from "../../components/common/galleryImage";
import Hero from "../../components/main_components/Hero";
import AdminLayout from "../../components/layout/AdminLayout";

const Gallery = () => {
  return (
    <>
      <Hero name="Gallery Management" />
      <section className="gallery-filter" style={{ marginTop: "30px" }}>
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
                  <input
                    type="file"
                    className="form-control mb-3"
                    id="inputGroupFile02"
                  />
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Title"
                  />
                  <div className="submit-btn" style={{ textAlign: "right" }}>
                    <button className="btn btn-primary" type="submit">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="shop-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;

Gallery.getLayout = (Gallery) => <AdminLayout>{Gallery}</AdminLayout>;
