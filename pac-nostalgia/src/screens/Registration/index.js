import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
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
        value={user.confirmPassword}
        onChangeText={setUser}
        placeholder={"Confirma a senha"}
        placeholderTextColor={"gray"}
      />

      <StButton>
        <TextButton>CADASTRAR</TextButton>
      </StButton>

      <Menu />
      <StatusBar style="auto" />
    </Container>
  );
}
