import Hero from "../../components/main_components/Hero";
import AdminLayout from "../../components/layout/AdminLayout";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { storage, db, serverTimeStamp } from "../../firebase";
import Image from "next/image";

const Blog = ({ allBlogs }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (url) {
      try {
        db.collection("blogs").add({
          title,
          body,
          imageUrl: url,
          createdAt: serverTimeStamp(),
        });

        alert("Blog Created succesfully");
      } catch (err) {
        alert("Error Creating Blog");
      }
    }
  }, [url]);

  const submitDetails = () => {
    if (!title || !body || !image) {
      alert("Please enter all the fields");
      return;
    }
    var uploadTask = storage.ref().child(`image/${uuidv4()}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (progress == "100") alert("Image Uploaded");
      },
      (error) => {
        alert(err.message);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          setUrl(downloadURL);
        });
      }
    );
  };
  return (
    <>
      <Hero name="Blog Management" />
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
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="file"
                  className="form-control mb-3"
                  id="inputGroupFile02"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <textarea
                  className="form-control mb-3"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Description"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <div className="submit-btn" style={{ textAlign: "right" }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => submitDetails()}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-one blog-one--news">
        <div
          className="blog-one__bg wow slideInDown"
          data-wow-delay="100ms"
          data-wow-duration="2500ms"
        ></div>
        <div className="container">
          <div className="row">
            {allBlogs.map((data, index) => {
              return (
                <div
                  className="col-xl-3 col-lg-3  wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                  key={index}
                >
                  <div className="blog-one__single">
                    <div className="blog-one__single-img">
                      <Image
                        height="400"
                        width="400"
                        src={data.imageUrl}
                        alt=""
                      />
                      <div className="date-box">
                        <span>30 July, 2021</span>
                      </div>
                      <div className="overlay-icon"></div>
                    </div>

                    <div className="blog-one__single-content">
                      <h2>
                        <a href="news-details.html">{data.title}</a>
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="news-sidebar__btn">
                <a href="#" className="thm-btn">
                  load more post
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

Blog.getLayout = (Blog) => <AdminLayout>{Blog}</AdminLayout>;

export async function getServerSideProps(context) {
  const querySnap = await db
    .collection("blogs")
    .orderBy("createdAt", "desc")
    .get();
  const allBlogs = querySnap.docs.map((docSnap) => {
    return {
      ...docSnap.data(),
      createdAt: docSnap.data().createdAt.toMillis(),
      id: docSnap.id,
    };
  });

  return {
    props: { allBlogs },
  };
}
