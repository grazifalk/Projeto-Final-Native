import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Menu } from "../../components/Menu";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  TextButton,
  StButton,
  InputName,
  InputCPF,
  InputDate,
  InputPassword,
  InputConfirmPassword,
  Title,
} from "./styles";

export default function Registration() {
  const [user, setUser] = useState({
    name: "",
    cpf: "",
    date: "",
    password: "",
    ConfirmPassword: "",
  });

  const navigation = useNavigation();

  function screenUserRegistered() {
    navigation.navigate("UserRegistered");
  }
  return (
    <Container>
      <Title>CADASTRO</Title>
      
      <InputName
        value={user.name}
        onChangeText={setUser}
        placeholder={"Nome Completo"}
        placeholderTextColor={"gray"}
      />
      <InputCPF
        value={user.cpf}
        onChangeText={setUser}
        placeholder={"CPF/CNPJ"}
        placeholderTextColor={"gray"}
      />
      <InputDate
        value={user.date}
        onChangeText={setUser}
        placeholder={"Data de Nascimento"}
        placeholderTextColor={"gray"}
      />
      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholder={"Senha"}
        placeholderTextColor={"gray"}
      />
      <InputConfirmPassword
        value={user.ConfirmPassword}
        onChangeText={setUser}
        placeholder={"Confirma a senha"}
        placeholderTextColor={"gray"}
      />

      <StButton onPress={screenUserRegistered}>
        <TextButton>CADASTRAR</TextButton>
      </StButton>

      <Menu />
      <StatusBar style="auto" />
    </Container>
  );
}
