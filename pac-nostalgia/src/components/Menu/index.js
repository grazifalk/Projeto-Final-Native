import colors from "../../themes/colors.js";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Container } from "./styles.js";
import { useNavigation } from "@react-navigation/native";

export const Menu = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Ionicons name={"home"} size={35} color={colors.tertiary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
        <Ionicons name={"list"} size={35} color={colors.tertiary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <FontAwesome name={"user-circle-o"} size={35} color={colors.tertiary} />
      </TouchableOpacity>
    </Container>
  );
};
