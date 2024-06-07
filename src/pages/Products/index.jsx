import React from "react";
import useGetData from "../../hooks";

function Products() {
  const { data, isPending, error } = useGetData("products");
  console.log(data);
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
          {!!data && (
            <div>
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
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl text-center">Create Product!</h3>
          <form className="flex flex-col items-center">
            {/* product name */}
            <label class="form-control w-full max-w-xs">
              <div class="label">
                <span class="label-text">Product Name</span>
              </div>
              <input
                type="text"
                placeholder="Enter product name"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </label>

            {/* product description */}
            <label class="form-control w-full max-w-xs">
              <div class="label">
                <span class="label-text">Product Description</span>
              </div>
              <textarea
                type="text"
                placeholder="Enter product description"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </label>

            {/* product image */}
            <label class="form-control w-full max-w-xs">
              <div class="label">
                <span class="label-text">Product Image</span>
              </div>
              <input
                type="link"
                placeholder="Enter product image link"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </label>

            {/* product price */}
            <label class="form-control w-full max-w-xs">
              <div class="label">
                <span class="label-text">Product Price</span>
              </div>
              <input
                type="number"
                placeholder="Enter product price"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </label>

            {/* product rating */}
            <label class="form-control w-full max-w-xs">
              <div class="label">
                <span class="label-text">Product Rating</span>
              </div>
              <div className="rating rating-lg rating-half">
                <input
                  type="radio"
                  name="rating-10"
                  className="rating-hidden"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-1"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-2"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-1"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-2"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-1"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-2"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-1"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-2"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-1"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-2"
                />
              </div>
            </label>
            {/* BUTTON */}
            <button className="btn mt-5 w-full max-w-xs btn-primary">
              Add Product
            </button>
          </form>
        </div>
      </dialog>
    </section>
  );
}

export default Products;
