import React from "react";
import useGetData from "../../hooks";
import ProductModal from "../../components/ProductModal";

function Products() {
  const { data, isPending, error } = useGetData("products");

  return (
    <section>
      <div className="container">
        <div className="title flex justify-between items-center pb-4 border-b-2">
          <h2 className="text-2xl">Products</h2>
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="btn btn-outline btn-sm"
          >
            Add
          </button>
        </div>
        <div>
          {isPending && (
            <div className="mt-10 mb-10 flex items-center justify-center">
              <span
                style={{ zoom: "5" }}
                className="loading loading-spinner text-warning"
              ></span>
            </div>
          )}
          {error.status && (
            <div className="mt-10 mb-10 flex items-center justify-center">
              <span className="text-error">{error.message}</span>
            </div>
          )}
          {!isPending && !error.status && data.length > 0 && (
            <div className="flex flex-wrap gap-5 mt-5">
              {data.map(
                ({ id, name, price, description, image, stock, rating }) => (
                  <div
                    key={id}
                    className="card card-compact w-96 bg-base-100 shadow-sm shadow-white"
                  >
                    <figure className="bg-white">
                      <img src={image} alt={name} />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{name}</h2>
                      <p>{description}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
      <ProductModal />
    </section>
  );
}

export default Products;
