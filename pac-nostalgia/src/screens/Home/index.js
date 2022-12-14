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
import { Api } from "../../Services";
import { useEffect, useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

export default function Home({ navigation }) {
  const route = useRoute();

  return (
    <Container>
      <Up>
        <Logo source={LG} resizeMode="contain" />
      </Up>
      <Card>
        <Message>
          {route.params ? (
            <Text>
              Olá, {route.params.nome}!!! Seja muito bem vindo(a) a nossa loja.
              Aqui você encontrará diversos produtos que um dia te fizeram
              sorrir, seja quando criança, adolescente ou adulto. Nossa proposta
              é que você se sinta em casa e aproveite ao máximo a experiência de
              poder relembrar os momentos especiais vividos no passado.
              Divirta-se!!
            </Text>
          ) : (
            <Text>
              Olá!!!! Que tal fazer uma viagem no tempo? Nosso maior objetivo é
              fazer com que os nossos queridos clientes desfrutem dos melhores
              momentos já vividos. Faça já o seu cadastro para mergulhar nessa
              incrível explosão de nostalgia!
            </Text>
          )}
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
