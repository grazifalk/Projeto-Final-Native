import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import RememberPassword from "../screens/RememberPassword/index.js";
import ChangePassword from "../screens/ChangePassword/index.js";
import Registration from "../screens/Registration/index.js";
import PasswordChangedSuccess from "../screens/PasswordChangedSuccess/index.js";
import UserRegistered from "../screens/UserRegistered";
import { Categories } from "../screens/Categories";
import { Products } from "../screens/Products";
import { Cart } from "../screens/Cart";


const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Login" component={Login} />
      <Screen name="RememberPassword" component={RememberPassword} />
      <Screen name="ChangePassword" component={ChangePassword} />
      <Screen name="PasswordChangedSuccess" component={PasswordChangedSuccess} />      
      <Screen name="Registration" component={Registration}/>
      <Screen name="UserRegistered" component={UserRegistered} />
      <Screen name="Categories" component={Categories} />
      <Screen name="Products" component={Products} />
      <Screen name="Cart" component={Cart} />
      
    </Navigator>
  );
}