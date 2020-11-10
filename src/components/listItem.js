import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-elements";

const ListItem = ({ data }) => {
  console.log(data);
  return (
    <View style={styles.transactionContent}>
      <View style={styles.headerItem}>
        <Text>Header Date</Text>
        <Text>Header Sum Cost</Text>
      </View>
      <View style={styles.listItem}>
        <Icon name="star" size={26} />
        <Text>Description</Text>
        <Text style={{ color: "red" }}>{data}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionContent: {
    flexDirection: "column",
    marginHorizontal: 10,
  },
  headerItem: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listItem: {
    height: 50,
    flexDirection: "row",
  },
});

export default ListItem;
