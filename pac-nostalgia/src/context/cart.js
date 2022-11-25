import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [productCart, setProductCart] = useState([]);

  function addItemCart(id, fotolink, nome, valor) {
    const itemObject = [...productCart];
    const item = itemObject.find((product) => product.id === id);
    if (!item) {
      itemObject.push({
        id: id,
        fotoLink: fotolink,
        nome: nome,
        valor: valor,
        quantidade: 1,
      });
    } else {
      item.quantidade = item.quantidade + 1;
    }
    setProductCart(itemObject);
    
  }

  function removeItemCart(id) {
    const itemObject = [...productCart];
    const item = itemObject.find((product) => product.id === id);

    if (item && item.quantity > 1) {
      item.quantity = item.quantity - 1;
      setProductCart(itemObject);
    } else {
      const arrayFiltered = itemObject.filter((product) => product.id !== id);
      setProductCart(arrayFiltered);
    }
  }

  function removalItem(id){
    const itemObject = [...productCart];

    const arrayFiltered = itemObject.filter((product)=>product.id !==id)
    setProductCart(arrayFiltered)
  }

  function clearCart(){
    setProductCart([])
  }

  return (
    <CartContext.Provider
        value={{
            productCart,
            addItemCart,
            removeItemCart,
            removalItem,
            clearCart,
        }}>
            {children}
    </CartContext.Provider>
  )
};
