import Hero from "../components/main_components/Hero";
import { db } from "../firebase";
const Supply = ({ allSupplys }) => {
  return (
    <>
      <Hero name="Supply" />

      <section className="projects-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="projects-details__wrapper">
                <div className="projects-details__img">
                  <h1>Requirement List</h1>
                </div>
                {allSupplys.map((data, index) => {
                  return (
                    <div className="projects-details__information" key={index}>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Supply;

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
