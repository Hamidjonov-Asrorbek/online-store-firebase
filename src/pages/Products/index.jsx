import React, { useState } from "react";
import useGetData from "../../hooks";
import ProductModal from "../../components/ProductModal";

function Products() {
  const [filter, setFilter] = useState("rating");
  const [refresh, setRefresh] = useState(false);
  const { data, isPending, error, deleteProduct } = useGetData(
    "products",
    refresh,
    filter
  );
  //   console.log(data);
  const handleDelete = async (id) => {
    document.getElementById("my_modal_2").showModal();
    deleteProduct(id);
    setRefresh((prev) => !prev);
    document.getElementById("my_modal_2").closest("dialog").close();
  };
  const handleAddToCart = () => {
    // document.getElementById("my_modal_1").showModal();
    // document.getElementById("my_modal_1").closest("dialog").close();
  };

  return (
    <section>
      <div className="container">
        <div className="title flex justify-between items-center pb-4 border-b-2">
          <h2 className="text-2xl">Products</h2>
          <div className="flex gap-4 items-center">
            <select
              className="select border-[#fff] select-md w-full max-w-xs"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value={"rating"}>Rating ⭐</option>
              <option value={"price"}>Price $</option>
              <option value={"name"}>A-Z</option>
              <option value={"!name"}>Z-A</option>
            </select>
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="btn btn-outline btn-md"
            >
              Add
            </button>
          </div>
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
                    className="card card-compact w-72 bg-base-100 shadow-sm shadow-white"
                  >
                    <figure className="bg-white">
                      <img src={image} alt={name} />
                    </figure>
                    <div className="card-body box-border">
                      <h2 className="card-title">{name}</h2>
                      {/* <p>{description}</p> */}
                      <p>{price} $</p>
                      <p>Rating: {rating}⭐</p>
                      <div className="card-actions flex items-center justify-between">
                        <button
                          className="btn btn-sm btn-primary ml-auto"
                          onClick={() => handleAddToCart({ id, name, price })}
                        >
                          Add Cart
                        </button>
                        <button
                          onClick={() => handleDelete(id)}
                          className="btn btn-sm btn-error "
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
      <ProductModal setRefresh={setRefresh} />

      {/* Delete Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box width-fit">
          <span className="loading loading-spinner text-warning"></span>
        </div>
      </dialog>
    </section>
  );
}

export default Products;
