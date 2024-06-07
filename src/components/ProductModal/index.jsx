import React, { useState } from "react";

function ProductModal() {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    rating: "0",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Aaaaaaaaa");
    console.log(productData);
  };
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-2xl text-center">Create Product!</h3>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          {/* product name */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Product Name</span>
            </div>
            <input
              value={productData.name}
              onChange={(e) =>
                setProductData({ ...productData, name: e.target.value })
              }
              type="text"
              placeholder="Enter product name"
              className="input input-bordered input-success w-full max-w-xs"
            />
          </label>

          {/* product description */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Product Description</span>
            </div>
            <textarea
              value={productData.description}
              onChange={(e) =>
                setProductData({ ...productData, description: e.target.value })
              }
              type="text"
              placeholder="Enter product description"
              className="input input-bordered input-success w-full max-w-xs"
            />
          </label>

          {/* product image */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Product Image</span>
            </div>
            <input
              value={productData.image}
              onChange={(e) =>
                setProductData({ ...productData, image: e.target.value })
              }
              type="link"
              placeholder="Enter product image link"
              className="input input-bordered input-success w-full max-w-xs"
            />
          </label>

          {/* product price */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Product Price</span>
            </div>
            <input
              value={productData.price}
              onChange={(e) =>
                setProductData({ ...productData, price: +e.target.value })
              }
              type="number"
              placeholder="Enter product price"
              className="input input-bordered input-success w-full max-w-xs"
            />
          </label>

          {/* product rating */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Product Rating</span>
            </div>
            <div className="rating rating-lg rating-half">
              <input type="radio" name="rating-10" className="rating-hidden" />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-1"
                onChange={() => {
                  setProductData({ ...productData, rating: 0.5 });
                }}
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-2"
                onChange={() => {
                  setProductData({ ...productData, rating: 1 });
                }}
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-1"
                onChange={() => {
                  setProductData({ ...productData, rating: 1.5 });
                }}
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-2"
                onChange={() => {
                  setProductData({ ...productData, rating: 2 });
                }}
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-1"
                onChange={() => {
                  setProductData({ ...productData, rating: 2.5 });
                }}
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-2"
                onChange={() => {
                  setProductData({ ...productData, rating: 3 });
                }}
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-1"
                onChange={() => {
                  setProductData({ ...productData, rating: 3.5 });
                }}
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-2"
                onChange={() => {
                  setProductData({ ...productData, rating: 4 });
                }}
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-1"
                onChange={() => {
                  setProductData({ ...productData, rating: 4.5 });
                }}
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-2"
                onChange={() => {
                  setProductData({ ...productData, rating: 5 });
                }}
              />
            </div>
          </label>
          {/* BUTTON */}
          <button
            type="submit"
            className="btn mt-5 w-full max-w-xs btn-primary"
          >
            Add Product
          </button>
        </form>
      </div>
    </dialog>
  );
}

export default ProductModal;
