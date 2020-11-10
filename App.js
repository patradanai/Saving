import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./src/screens/loginScreen";
import Transaction from "./src/screens/transaction";
import Report from "./src/screens/report";
import Account from "./src/screens/account";
import Planning from "./src/screens/planing";
import ModalScreen from "./src/screens/modalScreen";
import AddTransaction from "./src/components/addTransaction";
import { Icon } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomePage = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#F34C56",
        inactiveTintColor: "#CBCBCB",
        labelStyle: {
          fontSize: 12,
        },
        tabStyle: { marginTop: 5 },
      }}
    >
      <Tab.Screen
        name="Transaction"
        component={Transaction}
        options={{
          tabBarLabel: "Transactions",
          tabBarIcon: ({ color }) => (
            <Icon name="account-balance-wallet" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{
          tabBarLabel: "Report",
          tabBarIcon: ({ color }) => (
            <Icon name="data-usage" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={ModalScreen}
        options={{
          tabBarButton: () => (
            <View style={{ marginHorizontal: 20 }}>
              <AddTransaction />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Planning"
        component={Planning}
        options={{
          tabBarLabel: "Planning",
          tabBarIcon: ({ color }) => (
            <Icon name="flag" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage" headerMode="none">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="HomePage" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
