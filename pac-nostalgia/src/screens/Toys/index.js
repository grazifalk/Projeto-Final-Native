import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import icontoy from "../../../assets/icontoy.png";

import {
  Container,
  Icontoy,
  Title,
  Recover,
  
} from "./styles";
import { Menu } from "../../components/Menu";

export default function Toys() {


  return (
    <Container>
         
      
      <Icontoy source={icontoy} />
      <Title>BRINQUEDOS</Title> 
      <TouchableOpacity >
        <Recover>Brinquedo 1</Recover>
      </TouchableOpacity>
      
      <TouchableOpacity >
        <Recover>Brinquedo 2</Recover>
      </TouchableOpacity>

      <Menu />
      <StatusBar style="auto" />
    </Container>
  );
}

      
      

     

