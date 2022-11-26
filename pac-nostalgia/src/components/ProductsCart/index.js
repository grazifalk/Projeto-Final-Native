import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { CartContext } from "../../context/cart";
import {
  Container,
  Content,
  ImageProduct,
  ImageContainer,
  ProductContent,
  Title,
} from "./styles";

export const ProductsCart = () => {
  const { productCart, addItemCart, removeItemCart, removalItem, clearCart } =
    useContext(CartContext);

  const screenProductDetails = () => {
    navigation.navigate("ProductDetails", {
      id: id,
    });
  };

  return (
    <>
      <Container>
        {productCart?.map((item) => {
          return (
            <>
              <TouchableOpacity onPress={screenProductDetails}>
                <Content key={item.id}>
                  <ImageContainer>
                    <ImageProduct source={item.foto} resizeMode="contain" />
                  </ImageContainer>
                  <ProductContent>
                    <Title>{item.nome}</Title>
                    <Title>R$ {item.valor.toFixed(2)}</Title>
                    <Title>{item.quantidade}</Title>
                  </ProductContent>
                </Content>
              </TouchableOpacity>
            </>
          )
        })}
      </Container>
    </>
  );
};
