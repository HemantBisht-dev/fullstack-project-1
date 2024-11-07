import React, { useState } from "react";

function CreatePage() {
  const [product, setProduct] = useState({ name: "", price: "", image: "" });

  function changeValue(e) {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(product);
    setProduct({ name: "", price: "", image: "" });
  }
  return (
    <div className=" w-6/12 m-auto px-6 py-24 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-gray-200 text-5xl font-semibold tracking-tight ">
          Create New Product
        </h2>
        <p className="mt-2 text-lg/8 text-gray-400">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-18">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-gray-100"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                value={product.name}
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                onChange={changeValue}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="price"
              className="block text-lg font-semibold text-gray-100"
            >
              Price
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                name="price"
                id="price"
                value={product.price}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                onChange={changeValue}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="image"
              className="block text-lg font-semibold text-gray-100"
            >
              Image
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="image"
                id="image"
                value={product.image}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                onChange={changeValue}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePage;
