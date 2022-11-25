import { MainContainer, Up, Title } from "./styles.js";
import { Api } from "../../Services";
import { FlatList, View } from "react-native";
import { ItemCategory } from "../../components/ItemCategory/index.js";
import { useState, useEffect } from "react";
import { Menu } from "../../components/Menu";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import colors from "../../themes/colors";
import { useNavigation } from "@react-navigation/native";

export const Categories = () => {
  const [category, setCategory] = useState([]);
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <ItemCategory name={item.nome} photo={item.foto} />
  );

  useEffect(() => {
    getCategories();
  }, [category]);

  const getCategories = async () => {
    const { data } = await Api.get("/categoria");
    setCategory(data);
  };

  return (
    <MainContainer>
      <Up>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          {/* /*fazer rota search*\ */}
          <Feather name="search" size={35} color={colors.tertiary} />
        </TouchableOpacity>
        <Title>CATEGORIA</Title>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <MaterialCommunityIcons
            name="cart-outline"
            size={35}
            color={colors.tertiary}
          />
        </TouchableOpacity>
      </Up>
      <FlatList
        style={{ marginTop: "100px" }}
        data={category}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <Menu />
    </MainContainer>
  );
};
