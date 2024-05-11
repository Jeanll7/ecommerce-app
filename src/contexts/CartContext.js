import React, { createContext, useState } from "react";

//create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);
  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // verificar se o item já está no carrinho
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  // decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
      if (cartItem.amount < 2) {
        removeFromCart(id);
      }
    }
  };

  // const decreaseAmount = (id) => {
  //   const updatedCart = cart.map(item => {
  //     if (item.id === id) {
  //       if (item.amount > 1) {
  //         return { ...item, amount: item.amount - 1 };
  //       } else {
  //         return null;
  //       }
  //     }
  //     return item;
  //   }).filter(item => item !== null);
  //   setCart(updatedCart);
  // };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
