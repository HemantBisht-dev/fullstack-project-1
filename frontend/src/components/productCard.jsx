import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdSystemUpdateAlt } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { useProductStore } from "../store/product";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  // console.log(product);
  const [updateProduct, setUpdateProduct] = useState(product);
  const navigate = useNavigate();

  const { deleteProduct } = useProductStore();

  const handleDelete = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    console.log(success, message);
  };

  const handleUpdate = (pid) => {
    navigate(`/update/${pid}`);
  };
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-80">
      <img
        className="h-48 w-full object-cover"
        src={product.image}
        alt="Sunset in the mountains"
      />
      <div className="p-4">
        <div className="text-lg font-semibold text-gray-800">
          {product.name}
        </div>
        <p className="text-gray-600 mt-1">${product.price}</p>
      </div>
      <div className="m-4 mx-4 flex space-x-4">
        <button
          className="rounded-md bg-indigo-500 px-3.5 py-2.5  font-semibold text-white shadow-sm hover:bg-indigo-400 "
          onClick={() => handleUpdate(product._id)}
        >
          <MdSystemUpdateAlt />
        </button>

        <button
          className="rounded-md bg-red-500 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-red-400"
          onClick={() => handleDelete(product._id)}
        >
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
