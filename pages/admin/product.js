import Hero from "../../components/main_components/Hero";
import Image from "next/image";
import AdminLayout from "../../components/layout/AdminLayout";
import { useState, useEffect } from "react";
import { storage, db, serverTimeStamp } from "../../firebase";
import { v4 as uuidv4 } from "uuid";

const Product = ({ allProducts }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (url) {
      try {
        db.collection("products").add({
          title,
          body,
          price,
          imageUrl: url,
          createdAt: serverTimeStamp(),
        });

        alert("Product Created succesfully");
      } catch (err) {
        alert("Error Creating Blog");
      }
    }
  }, [url]);

  const submitDetails = () => {
    if (!title || !price || !body || !image) {
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
      <Hero name="product Management" />
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
                  type="file"
                  className="form-control mb-3"
                  id="inputGroupFile02"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Name"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-control mb-3"
                      placeholder="Price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
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
      <section className="shop-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {allProducts.map((data, index) => {
                  return (
                    <div className="col-md-4 col-lg-4" key={index}>
                      <div className="shop-one__item">
                        <div className="shop-one__image">
                          <div className="row">
                            <div className="col-md-10"></div>
                            <div className="col-md-2">
                              <div
                                className="delete-button"
                                style={{ position: "absolute", zIndex: "999" }}
                              >
                                <i
                                  className="far fa-heart"
                                  style={{ color: "red" }}
                                ></i>
                              </div>
                            </div>
                          </div>

                          <Image
                            height="400"
                            width="400"
                            src={data.imageUrl}
                            alt=""
                          />
                          <a className="shop-one__cart" href="#">
                            <i className=" icon-shopping-cart"></i>
                          </a>
                        </div>
                        <div className="shop-one__content text-center">
                          <h3 className="shop-one__title">
                            <a href="#">{data.title}</a>
                          </h3>
                          <p className="shop-one__price">{data.price}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;

Product.getLayout = (Product) => <AdminLayout>{Product}</AdminLayout>;

export async function getServerSideProps(context) {
  const querySnap = await db
    .collection("products")
    .orderBy("createdAt", "desc")
    .get();
  const allProducts = querySnap.docs.map((docSnap) => {
    return {
      ...docSnap.data(),
      createdAt: docSnap.data().createdAt.toMillis(),
      id: docSnap.id,
    };
  });

  return {
    props: { allProducts },
  };
}
