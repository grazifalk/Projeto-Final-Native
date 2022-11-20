import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import logo from "../../../assets/logo.png";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Logo,
  TextButton,
  StButton,
  InputLogin,
  InputPassword,
  Recover,
} from "./styles";

export default function Login() {
  const [user, setUser] = useState({
    login: "",
    password: "",
  });

  const navigation = useNavigation();

  function screenRememberPassword() {
    navigation.navigate("RememberPassword");
  }

  return (
    <Container>
      <Logo source={logo} />
      <InputLogin
        value={user.login}
        onChangeText={setUser}
        placeholder={"E-mail, CPF ou CNPJ"}
        placeholderTextColor={"grey"}
      />
      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholder={"Senha"}
        placeholderTextColor={"grey"}
      />
      <StButton>
        <TextButton>ENTRAR</TextButton>
      </StButton>
      <TouchableOpacity onPress={screenRememberPassword}>
        <Recover>Esqueceu a senha? Clique aqui!</Recover>
      </TouchableOpacity>
      <TouchableOpacity>
        <Recover>Não possui uma conta? Cadastre-se!</Recover>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </Container>
  );
}
