import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import {
  Container,
  TextButton,
  StButton,
  InputPassword,
  InputNewPassword,
  InputConfirmPassword,
  Title,
} from "./styles.js";

export default function ChangePassword() {
  const [user, setUser] = useState({
    Password: "",
    NewPassword: "",
    ConfirmPassword: "",
  });

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
      <StButton>
        <TextButton>ALTERAR SENHA</TextButton>
      </StButton>
      <StatusBar style="auto" />
    </Container>
  );
}
