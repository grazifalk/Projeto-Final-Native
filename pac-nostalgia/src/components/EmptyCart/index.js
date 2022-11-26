import { StatusBar } from "expo-status-bar";
import sad from "../../../assets/sad.png";
import { Container, ImageSad, StButton, TextButton, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const EmptyCart = () => {
  const navigation = useNavigation();

  function screenCategories() {
    navigation.navigate("Categories");
  }

  return (
    <>
      <Container>
        <ImageSad source={sad} resizeMode="contain" />
        <Title>Seu carrinho está vazio 😢</Title>
        <StButton onPress={screenCategories}>
          <TextButton>VOLTAR PARA A LOJA</TextButton>
        </StButton>
        <StatusBar style="auto" />
      </Container>
    </>
  );
};
