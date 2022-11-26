import React, { useContext } from "react";
import { EmptyCart } from "../../components/EmptyCart";
import { Menu } from "../../components/Menu";
import { ProductsCart } from "../../components/ProductsCart";
import { CartContext } from "../../context/cart";
import { Container, Title, Up } from "./styles";

export const Cart = () => {
  const { productCart, addItemCart, removeItemCart, removalItem, clearCart } =
    useContext(CartContext);
  return (
    <>
      <Container>
        <Up>
          <Title>CARRINHO</Title>
        </Up>
        {productCart.length == 0 ? <EmptyCart /> : <ProductsCart />}
        <Menu />
      </Container>
    </>
  );
};
