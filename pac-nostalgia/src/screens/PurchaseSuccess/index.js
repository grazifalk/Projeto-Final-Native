import { StatusBar } from "expo-status-bar";
import {Card, Container, Fireworks, Message} from "./styles.js";
import { Menu } from "../../components/Menu";
import { fireworks } from "../../../assets/fireworks.svg";

export default function PurchaseSuccess() {

    return (
        <Container>
            <Card>
            <Fireworks source={fireworks} />
                <Message>AGRADECEMOS PELA SUA COMPRA. VOLTE SEMPRE!</Message>
            </Card>
            <Menu />
            <StatusBar style="auto" />
        </Container>
    );
}
