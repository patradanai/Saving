import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./src/screens/loginScreen";
import Transaction from "./src/screens/transaction";
import Report from "./src/screens/report";
import Account from "./src/screens/account";
import Planning from "./src/screens/planing";
import AddTransaction from "./src/components/addTransaction";
import { Icon } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomePage = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Transaction"
        component={Transaction}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Icon name="star" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Report" component={Report} />
      <Tab.Screen
        name="Add"
        component={AddTransaction}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <View style={{ position: "absolute", bottom: 0 }}>
              <Icon name="add" color={color} size={26} reverse={true} />
            </View>
          ),
        }}
      />
      <Tab.Screen name="Planning" component={Planning} />
      <Tab.Screen name="Account" component={Account} />
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
