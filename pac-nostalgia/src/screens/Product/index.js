import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Api } from "../../Services";
import { Menu } from "../../components/Menu";
import {
  Container,
  Title,
  ProductImage,
  Price,
  Card,
  ContainerText,
  Up,
  TitleTwo,
} from "./styles.js";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../themes/colors";

export const Product = () => {
  const route = useRoute();
  const [produto, setProduto] = useState([]);
  const navigation = useNavigation();

  const screenProductDetails = () => {
    navigation.navigate("ProductDetails", {
      id: id,
    });
  };

  useEffect(() => {
    getProduto();
  }, [produto]);

  const getProduto = async () => {
    const { data } = await Api.get("/produto");
    setProduto(data);
  };

  const ShowProduct = () => {
    const filtro = produto.filter(
      (prod) => prod.categoria.nome === route.params.name
    );
    return (
      <>
        {filtro?.map((prod) => {
          return (
            <Card key={prod.id}>
              <ProductImage source={prod.foto} />
              <ContainerText>
                <Title>{prod.nome}</Title>
                <Price>R$ {prod.preco.toFixed(2)}</Price>
              </ContainerText>
            </Card>
          );
        })}
      </>
    );
  };
  return (
    <>
      <Container>
        <Up>
          <TitleTwo>PRODUTOS</TitleTwo>
        </Up>
        <TouchableOpacity onPress={screenProductDetails}>
          <ShowProduct />
        </TouchableOpacity>
      </Container>
      <Menu />
    </>
  );
};
