import { Up, Title, Container, StButton, TextButton, Card } from "./styles.js";
import { Api } from "../../Services";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { ItemCategory } from "../../components/ItemCategory/index.js";
import { useState, useEffect } from "react";
import { Menu } from "../../components/Menu";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../themes/colors";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
export const User = ({ navigation }) => {
  const route = useRoute();

  const [usuario, setUsuario] = useState([]);
  useEffect(() => {
    Api.get(
      `/usuario/informacoes?login=${route.params.login}&senha=${route.params.password}`
    )
      .then((response) => setUsuario(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <Container>
      <Up>
        <Title>USUÁRIO</Title>
      </Up>
      <Title>Olá, {usuario.nome}</Title>
      <StButton
        onPress={() => navigation.navigate("Home", { nome: usuario.nome })}
      >
        <TextButton>Home</TextButton>
      </StButton>
      <Menu />
    </Container>
  );
};
