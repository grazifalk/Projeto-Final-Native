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
import { Menu } from "../../components/Menu";

export default function Login() {
  const [user, setUser] = useState({
    login: "",
    password: "",
  });

  const navigation = useNavigation();

  function screenRememberPassword() {
    navigation.navigate("RememberPassword");
  }
  function screenRegistration() {
    navigation.navigate("Registration");
  }
  return (
    <Container>
      <Logo source={logo} />
      <InputLogin
        value={user.login}
        onChangeText={setUser}
        placeholder={"E-mail, CPF ou CNPJ"}
        placeholderTextColor={"#ffffff"}
      />
      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholder={"Senha"}
        placeholderTextColor={"#ffffff"}
      />
      <StButton>
        <TextButton>ENTRAR</TextButton>
      </StButton>
      <TouchableOpacity onPress={screenRememberPassword}>
        <Recover>Esqueceu a senha? Clique aqui!</Recover>
      </TouchableOpacity>
      <TouchableOpacity onPress={screenRegistration}>
        <Recover>Não possui uma conta? Cadastre-se!</Recover>
      </TouchableOpacity>
      <Menu />
      <StatusBar style="auto" />
    </Container>
  );
}
