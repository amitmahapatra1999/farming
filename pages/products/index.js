import { Hero } from "../../components/main_components";
import { db } from "../../firebase";
import Image from "next/image";

const Index = ({ allProducts }) => {
  return (
    <>
      <Hero name="Products" />

      <section className="shop-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row"></div>
              <div className="row">
                {allProducts.map((data) => {
                  return (
                    <div className="col-md-4 col-lg-4">
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

export default Index;

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
