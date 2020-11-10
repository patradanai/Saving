import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-elements";
import ListItem from "../components/listItem";
const Transaction = () => {
  const tran = [
    { name: "11111", id: "1" },
    { name: "2", id: "2" },
    { name: "3", id: "3" },
    { name: "4", id: "4" },
  ];

  return (
    <SafeAreaView>
      <View>
        <Text>Transaction</Text>
        <FlatList
          data={tran}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem data={item.name} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Transaction;
