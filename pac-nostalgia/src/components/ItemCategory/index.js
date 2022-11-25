import { TouchableOpacity } from "react-native";
import { Card, Photo, TextContainer, Name, PhotoContainer } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const ItemCategory = ({ name, photo }) => {
  const navigation = useNavigation();
  const screenProduct = ()=>{
    
    navigation.navigate("Product",{
      name: name,
    })
  
  }
  return (
    <Card>
      <TouchableOpacity onPress={screenProduct}>
        <PhotoContainer>
      <Photo source={{ uri: photo }} resizeMode="contain"/>
      </PhotoContainer>
      <TextContainer>
        <Name>{name}</Name>
      </TextContainer>
      </TouchableOpacity>
    </Card>
  );
};
