import React from "react";
import { Dimensions } from "react-native";
import LoadingScreen from "./components/LoadingScreen";
import MapContainer from "./components/MapContainer";
import Login from "./components/Login";
import Home from "./components/Home";
import Circle from "./components/Circle";
import DrawerDesign from "./components/DrawerDesign";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const drawerNavigation = createDrawerNavigator(
  {
    Home,
    Login,
    Circle,
    MapContainer
  },
  {
    drawerWidth: Dimensions.get("window").width * 0.3,
    contentComponent: ({ navigation }) => (
      <DrawerDesign navigation={navigation} />
    )
  }
);

const Drawer = createAppContainer(drawerNavigation);

const AppStack = createStackNavigator(
  {
    Drawer: Drawer,
    Home: Home
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const AuthStack = createStackNavigator(
  {
    Login: Login
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    { initialRouteName: "Loading" }
  )
);
