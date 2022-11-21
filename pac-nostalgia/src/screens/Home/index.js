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

export default function Home() {

  return (
    <Container>
      <Logo source={logo} />
      <TouchableOpacity>
        <Recover>Pagina em construção</Recover>
      </TouchableOpacity>
      <Menu />
      <StatusBar style="auto" />
    </Container>
  );
}