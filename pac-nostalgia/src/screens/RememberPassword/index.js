import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import { Container, TextButton, StButton, InputLogin, Title } from "./styles";

export default function RememberPassword() {
  const [user, setUser] = useState({
    login: "",
  });

  // const navigation = useNavigation();

  // function screenRecSenha() {
  //   navigation.navigate("RecSenha");
  // }

  return (
    <Container>
      <Title>RECUPERAR SENHA</Title>
      <InputLogin
        value={user.login}
        onChangeText={setUser}
        placeholder={"E-mail, CPF ou CNPJ"}
        placeholderTextColor={"grey"}
      />

      <StButton>
        <TextButton>RECUPERAR SENHA</TextButton>
      </StButton>
      <StatusBar style="auto" />
    </Container>
  );
}
