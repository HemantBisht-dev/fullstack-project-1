import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill in all the fields" };
    }

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const data = await response.json();
    set((state) => ({ products: [...state.products, data.data] }));
    return { success: true, message: "product created successfully" };
  },

  getAllProduct: async () => {
    const res = await fetch("api/products");
    const data = await res.json();
    set({ products: data.data });
  },

  deleteProduct: async (pid) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    set((state) => ({
      products: state.products.filter((product) => product._id !== pid),
    }));
    return { success: true, message: data.message };
  },

  updateProduct: async (pid, updatedProduct) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };
    set((state) => ({
      products: Array.isArray(state.products)
        ? state.products.map((product) =>
            product._id === pid ? data.data : product
          )
        : [], // Fallback to an empty array if `state.products` is not valid
    }));
    return { success: true, message: "product updated successfully" };
  },

  getProduct: async (pid) => {
    const res = await fetch(`/api/products/${pid}`);
    const data = await res.json();
    set({ products: data.data });
  },
}));
