import { create } from "zustand";

const CartToggler = create((set) => ({
  cart: false,
  togglerCart: (value) => {
    set((state) => ({ cart: value }));

    if (value) {
      document.body.style.height = "100vh";
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflowY = "visible";
    }
  },
}));

export default CartToggler;
