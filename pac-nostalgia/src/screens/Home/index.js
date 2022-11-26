import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, View } from "react-native";
import {
  Container,
  Logo,
  Up,
  Message,
  Card,
  NewProduct,
  ContainerSlide,
} from "./styles";
import { Menu } from "../../components/Menu";
import LG from "../../../assets/LG.png";
import { useNavigation } from "@react-navigation/native";
import { Carousel } from "../../components/Carousel";

export default function Home() {
  const navigation = useNavigation();
  return (
    <Container>
      <Up>
        <Logo source={LG} resizeMode="contain" />
      </Up>
      <Card>
        <Message>
          Olá!!! Seja muito bem vindo(a) a nossa loja. Nosso maior objetivo é
          fazer com que os nossos queridos clientes façam uma viagem no tempo e
          desfrutem dos melhores momentos já vividos na vida de cada um.
          Aproveite e divirta-se com a nossa explosão de nostalgia!!!!
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
