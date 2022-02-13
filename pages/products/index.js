import { Hero } from "../../components/main_components";
import { db } from "../../firebase";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Index = ({ allProducts }) => {
  const [products, setproducts] = useState(allProducts);
  const [end, setEnd] = useState(false);
  const loadeMore = async () => {
    const last = products[products.length - 1];
    const res = await db
      .collection("products")
      .orderBy("createdAt", "desc")
      .startAfter(new Date(last.createdAt))
      .limit(8)
      .get();
    const newProducts = res.docs.map((docSnap) => {
      return {
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt.toMillis(),
        id: docSnap.id,
      };
    });
    setproducts(products.concat(newProducts));

    if (newProducts.length < 8) {
      setEnd(true);
    }
  };
  return (
    <>
      <Hero name="Products" />

      <section className="shop-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row"></div>
              <div className="row">
                {products.map((data, index) => {
                  return (
                    <div className="col-md-3 col-lg-3" key={index}>
                      <div className="shop-one__item">
                        <div className="shop-one__image">
                          <div className="row">
                            <div className="col-md-10"></div>
                            <div className="col-md-2">
                              <div
                                className="delete-button"
                                style={{ position: "absolute", zIndex: "999" }}
                              ></div>
                            </div>
                          </div>

                          <Image
                            height="400"
                            width="400"
                            src={data.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="shop-one__content text-center">
                          <h3 className="shop-one__title">
                            <Link href={`/products/${data.id}`}>
                              <a>{data.title}</a>
                            </Link>
                          </h3>
                          <p className="shop-one__price">Rs {data.price}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="projects-one--two--projects__btn text-center">
            {end === false ? (
              <button onClick={loadeMore} className="thm-btn">
                load more
              </button>
            ) : (
              <h3>You Have Reach the End</h3>
            )}
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
    .limit(8)
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
