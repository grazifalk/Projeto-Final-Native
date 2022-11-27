import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { CartContext } from "../../context/cart";
import {
  Container,
  ImageProduct,
  ImageContainer,
  ProductContainer,
  Title,
  ContainerCard,
  StButton,
  TextButton,
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
              <Container key={item.id}>
                <TouchableOpacity onPress={screenProductDetails}>
                  <ContainerCard>
                    <ImageContainer>
                      <ImageProduct source={item.foto} resizeMode="contain" />
                    </ImageContainer>
                    <ProductContainer>
                      <Title>{item.nome}</Title>
                      <Title>R$ {item.valor.toFixed(2)}</Title>
                      <Title>{item.quantidade}</Title>
                    </ProductContainer>
                  </ContainerCard>
                </TouchableOpacity>
              </Container>
            </>
          );
        })}
        <StButton>
          <TextButton>COMPRAR</TextButton>
        </StButton>
      </Container>
    </>
  );
};
