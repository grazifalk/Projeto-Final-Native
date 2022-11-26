import { AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import { Menu } from "../../components/Menu";
import { Modal } from "../../components/Modal";
import { CartContext } from "../../context/cart";
import { Api } from "../../Services";
import {
  CardProduct,
  Container,
  ProductImage,
  ProductText,
  StButton,
  TextButton,
} from "./styles";

export const ProductDetails = () => {
  const { addItemCart } = useContext(CartContext);
  const [popup, setPopup] = useState(false);
  const route = useRoute();
  const [data, setData] = useState();

  const addCart = (id, foto, nome, preco) => {
    console.log(id, foto, nome, preco);
    addItemCart(id, foto, nome, preco);
    setPopup(true);
  };

  useEffect(() => {
    Api.get(`/produto/${route.params.id}`).then((response) => {
      setData(response.data);
    });
  }, []);

  const ShowProduct = () => {
    return (
      <Container>
        <CardProduct>
          <ProductImage source={{ uri: data?.foto }} resizeMode="contain" />
          <ProductText>{data?.nome}</ProductText>
          <ProductText>{data?.descricao}</ProductText>
          <ProductText>R$ {data?.preco.toFixed(2)}</ProductText>
        </CardProduct>
        <StButton
          onPress={() => addCart(data.id, data.foto, data.nome, data.preco)}
        >
          <TextButton>COMPRAR</TextButton>
        </StButton>
      </Container>
    );
  };

  return (
    <>
      <Container>
        <ShowProduct />
      </Container>
      <Modal trigger={popup} setTrigger={setPopup}>
        <Text>
          <AntDesign name="shoppingcart" size={24} color="black" /> Carrinho
        </Text>
        <Text style={{ marginTop: 8 }}>Produto adicionado no carrinho</Text>
      </Modal>
      <Menu />
    </>
  );
};
