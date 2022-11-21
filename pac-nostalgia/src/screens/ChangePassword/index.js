import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  TextButton,
  StButton,
  InputPassword,
  InputNewPassword,
  InputConfirmPassword,
  Title,
} from "./styles.js";
import { Menu } from "../../components/Menu/index.js";

export default function ChangePassword() {
  const [user, setUser] = useState({
    Password: "",
    NewPassword: "",
    ConfirmPassword: "",
  });

  const navigation = useNavigation();

  function screenPasswordChangedSuccess() {
    navigation.navigate("PasswordChangedSuccess");
  }

  return (
    <Container>
      <Title>ALTERAR SENHA</Title>

      <InputPassword
        value={user.Password}
        onChangeText={setUser}
        placeholder={"Digite a senha atual"}
        placeholderTextColor={"grey"}
      />
      <InputNewPassword
        value={user.NewPassword}
        onChangeText={setUser}
        placeholder={"Digite a nova Senha"}
        placeholderTextColor={"grey"}
      />
      <InputConfirmPassword
        value={user.ConfirmPassword}
        onChangeText={setUser}
        placeholder={"Digite novamente a nova Senha"}
        placeholderTextColor={"grey"}
      />
      <StButton onPress={screenPasswordChangedSuccess}>
        <TextButton>ALTERAR SENHA</TextButton>
      </StButton>
      <Menu />
      <StatusBar style="auto" />
    </Container>
  );
}