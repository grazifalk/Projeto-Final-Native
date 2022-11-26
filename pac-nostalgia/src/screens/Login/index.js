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
import {Api} from "../../Services";

export default function Login() {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const logar = () => {
    console.log("logando")

    Api.get(`usuario/login?login=${login}&senha=${password}`)
       .then((res) => {
        if(res.data !== "Login e/ou senha inválidos.") {
            navigation.navigate("User", {login: login, password: password})
            console.log("logou")
        }
        else{
          alert("errou") 
        }
       }).catch((err) => {
        console.log(err)
       });
};

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
        value={login}
        onChangeText={(data)=>setLogin(data)}
        placeholder={"Login"}
        placeholderTextColor={"#ffffff"}
      />
      <InputPassword
        value={password}
        onChangeText={(data)=>setPassword(data)}
        placeholder={"Senha"}
        placeholderTextColor={"#ffffff"}
      />
      <StButton onPress={logar}>
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
