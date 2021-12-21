import Hero from "../../components/main_components/Hero";
import AdminLayout from "../../components/layout/AdminLayout";
// import Image from "next/image";
import { useState, useEffect } from "react";
import { storage, db, serverTimeStamp } from "../../firebase";
import { v4 as uuidv4 } from "uuid";

const Supply = ({ allSupplys }) => {
  const [openingDate, setOpeningDate] = useState("");
  const [closingDate, setClosingDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (url) {
      try {
        db.collection("supplys").add({
          openingDate,
          closingDate,
          price,
          quantity,
          productName,
          imageUrl: url,
          createdAt: serverTimeStamp(),
        });

        alert("Order Created succesfully");
      } catch (err) {
        alert("Error Creating Blog");
      }
    }
  }, [url]);

  const submitDetails = () => {
    if (
      !openingDate ||
      !closingDate ||
      !quantity ||
      !productName ||
      !price ||
      !image
    ) {
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
      <Hero name="Supply Management" />
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
                <div className="row">
                  <div className="col-md-4">
                    <input
                      type="date"
                      className="form-control mb-3"
                      placeholder="Opening Date"
                      value={openingDate}
                      onChange={(e) => setOpeningDate(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="date"
                      className="form-control mb-3"
                      placeholder="Closing Date"
                      value={closingDate}
                      onChange={(e) => setClosingDate(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Quantity (Qty)"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Product Name"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="number"
                      className="form-control mb-3"
                      placeholder="Price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="file"
                      className="form-control mb-3"
                      id="inputGroupFile02"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </div>
                </div>

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
          {allSupplys.map((data) => {
            return (
              <div className="projects-details__information">
                <ul>
                  <li>
                    <h5>Openning Date</h5>
                    <p>{data.openingDate}</p>
                  </li>

                  <li>
                    <h5>Product Name</h5>
                    <p>{data.productName}</p>
                  </li>

                  <li>
                    <h5>Quantity</h5>
                    <p>
                      <p>{data.quantity}Kg</p>
                    </p>
                  </li>

                  <li>
                    <h5>Price</h5>
                    <p>₹ {data.price}/Kg</p>
                  </li>

                  <li>
                    <h5>Closing Date</h5>
                    <p>{data.closingDate}</p>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Supply;

Supply.getLayout = (Supply) => <AdminLayout>{Supply}</AdminLayout>;
export async function getServerSideProps(context) {
  const querySnap = await db
    .collection("supplys")
    .orderBy("createdAt", "desc")
    .get();
  const allSupplys = querySnap.docs.map((docSnap) => {
    return {
      ...docSnap.data(),
      createdAt: docSnap.data().createdAt.toMillis(),
      id: docSnap.id,
    };
  });

  return {
    props: { allSupplys },
  };
}
