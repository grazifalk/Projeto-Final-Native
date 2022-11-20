import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import RememberPassword from "../screens/RememberPassword/index.js";
import ChangePassword from "../screens/ChangePassword/index.js";
import Registration from "../screens/Registration/index.js";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="RememberPassword" component={RememberPassword} />
      <Screen name="ChangePassword" component={ChangePassword} />
      <Screen name="Registration" component={Registration}/>
    </Navigator>
  );
}
