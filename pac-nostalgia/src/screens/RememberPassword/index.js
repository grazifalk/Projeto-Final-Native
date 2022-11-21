import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, TextButton, StButton, InputLogin, Title } from "./styles";
import { Menu } from "../../components/Menu";

export default function RememberPassword() {
  const [user, setUser] = useState({
    login: "",
  });

  const navigation = useNavigation();

  function screenChangePassword() {
    navigation.navigate("ChangePassword");
  }

  return (
    <Container>
      <Title>RECUPERAR SENHA</Title>
      <InputLogin
        value={user.login}
        onChangeText={setUser}
        placeholder={"E-mail, CPF ou CNPJ"}
        placeholderTextColor={"grey"}
      />

      <StButton onPress={screenChangePassword}>
        <TextButton>RECUPERAR SENHA</TextButton>
      </StButton>
      <Menu />
      <StatusBar style="auto" />
    </Container>
  );
}