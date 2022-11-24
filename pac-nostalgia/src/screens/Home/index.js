import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { Container, Logo, Up, Message, Card, NewProduct } from "./styles";
import { Menu } from "../../components/Menu";
import LG from "../../../assets/LG.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../themes/colors.js";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <Container>
      <Up>
        <Logo source={LG} resizeMode="contain" />
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <MaterialCommunityIcons
            name="cart-outline"
            size={35}
            color={colors.tertiary}
          />
        </TouchableOpacity>
      </Up>
      <Card>
        <Message>
          Olá!!! Seja muito bem vindo(a) a nossa loja.Nosso maior objetivo é
          fazer com que os nossos queridos clientes façam uma viagem no tempo e
          desfrutem dos melhores momentos já vividos na vida de cada um.
          Aproveite e divirta-se com a nossa explosão de nostalgia!!!!
        </Message>
      </Card>
      <NewProduct>Novidades na nossa loja:</NewProduct>
      <Menu />
      <StatusBar style="auto" />
    </Container>
  );
}
