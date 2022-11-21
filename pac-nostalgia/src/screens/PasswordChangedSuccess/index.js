import { StatusBar } from "expo-status-bar";
import {
  Container,
Card, Message
} from "./styles";
import { Menu } from "../../components/Menu";

export default function Home() {

  return (
    <Container>
      <Card>
        <Message>SENHA ALTERADA COM SUCESSO!</Message>
      </Card>
      <Menu />
      <StatusBar style="auto" />
    </Container>
  );
}