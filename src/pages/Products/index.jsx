import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductByNameQuery } from "../../products/productsApi";
import { filterData, getData, searchData } from "../../products/productsSlice";
import { addToCart } from "../../cart/cartSlice";
import ProductModal from "../../components/ProductModal";

function Products() {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);

  const {
    data,
    isLoading: isPending,
    error,
    isSuccess,
  } = useGetProductByNameQuery();

  useEffect(() => {
    if (isSuccess && data?.products) {
      dispatch(getData(data.products));
    }
  }, [isSuccess, data, dispatch]);

  useEffect(() => {
    if (state?.data?.length) {
      dispatch(filterData(filter));
    }
  }, [filter, state?.data, dispatch]);

  useEffect(() => {
    dispatch(searchData(search));
  }, [search, dispatch]);

  const handleDelete = async (id) => {
    document.getElementById("my_modal_2").showModal();
    await deleteProduct(id); // Assuming deleteProduct is defined somewhere
    document.getElementById("my_modal_2").close();
  };

  const handleAddToCart = (id) => {
    document.getElementById("my_modal_2").showModal();
    dispatch(addToCart({ productID: id, count: 1 }));
    document.getElementById("my_modal_2").close();
  };

  return (
    <section>
      <div className="container">
        <div className="title flex justify-between items-center pb-4 border-b-2">
          <h2 className="text-2xl">Products</h2>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <div className="flex gap-4 items-center">
            <select
              className="select border-[#fff] select-md w-full max-w-xs"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">Filter</option>
              <option value="rating">Rating ⭐</option>
              <option value="price">Price $</option>
              <option value="name">A-Z</option>
              <option value="!name">Z-A</option>
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
          {error && (
            <div className="mt-10 mb-10 flex items-center justify-center">
              <span className="text-error">{error.message}</span>
            </div>
          )}
          {!isPending && state?.data?.length > 0 && (
            <div className="flex flex-wrap gap-5 mt-5">
              {state.filterData.map((item) => {
                const { id, title, description, price, images, rating } = item;
                return (
                  <div
                    key={id}
                    className="card card-compact w-72 bg-base-100 shadow-sm shadow-white"
                  >
                    <figure className="bg-slate-100">
                      <img
                        className="w-[288px] h-[288px] object-contain object-center "
                        src={images[0]}
                        alt={title}
                        width={288}
                        height={288}
                      />
                    </figure>
                    <div className="card-body box-border">
                      <h2 className="card-title">{title}</h2>
                      {/* <p>{description}</p> */}
                      <p>{price} $</p>
                      <p>Rating: {rating}⭐</p>
                      <div className="card-actions flex items-center justify-between">
                        <button
                          className="btn btn-sm btn-primary ml-auto"
                          onClick={() => dispatch(addToCart(item))}
                        >
                          Add Cart
                        </button>
                        {/* <button
                          onClick={() => handleDelete(id)}
                          className="btn btn-sm btn-error "
                        >
                          Delete
                        </button> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <ProductModal setRefresh={() => setRefresh((prev) => !prev)} />

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
