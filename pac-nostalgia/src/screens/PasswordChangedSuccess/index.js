import { StatusBar } from "expo-status-bar";
import {
Container,
Card, 
Message, 
StButton, 
TextButton,
} from "./styles.js";
import { Menu } from "../../components/Menu";
import { useNavigation } from "@react-navigation/native";

export default function PasswordChangedSuccess() {

  const navigation = useNavigation();

  function screenLogin() {
    navigation.navigate("Login");
  }

  return (
    <Container>
      <Card>
        <Message>SENHA ALTERADA COM SUCESSO!</Message>
      </Card>
      <StButton onPress={screenLogin}>
        <TextButton>ENTRAR</TextButton>
      </StButton>
      <Menu />
      <StatusBar style="auto" />
    </Container>
  );
}
