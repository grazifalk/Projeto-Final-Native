import { StatusBar } from "expo-status-bar";
import {
    Container,
    Card,
    Message,
} from "./styles.js";
import { Menu } from "../../components/Menu";
import { Fireworks } from "./style.js";

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
