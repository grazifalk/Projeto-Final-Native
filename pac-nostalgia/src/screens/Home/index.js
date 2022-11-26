import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import { Menu } from "../../components/Menu";
import LG from "../../../assets/LG.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../themes/colors.js";
import { useRoute } from "@react-navigation/native";
import {
  Container,
  Logo,
  Up,
  Message,
  Card,
  NewProduct,
  ContainerSlide,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Carousel } from "../../components/Carousel";
import {Api} from "../../Services";
import { useEffect, useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

export default function Home({navigation}) {
  const route = useRoute();

  return (
    <Container>
      <Up>
        <Logo source={LG} resizeMode="contain" />
      </Up>
      <Card>
        <Message>
          {route.params?(<Text>Olá, {route.params.nome}!!! Seja muito bem vindo(a) a nossa loja. Nosso maior objetivo é
          fazer com que os nossos queridos clientes façam uma viagem no tempo e
          desfrutem dos melhores momentos já vividos na vida de cada um.
          Aproveite e divirta-se com a nossa explosão de nostalgia!!!!</Text>) : (<Text>Faça o cadastro para conhecer nossa loja.</Text>)}
           
        </Message>
      </Card>
      <NewProduct>Novidades na nossa loja:</NewProduct>
      <ContainerSlide>
        <Carousel />
      </ContainerSlide>
      <Menu />
      <StatusBar style="auto" />
    </Container>
  );
}
