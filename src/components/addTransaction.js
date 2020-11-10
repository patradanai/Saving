import React, { useState } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { Button, Overlay } from "react-native-elements";
import { Icon } from "react-native-elements";

const addTransaction = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={styles.containerBottom}>
        <Button
          buttonStyle={styles.bottomStyle}
          onPress={toggleOverlay}
          icon={<Icon name="add" />}
        />
      </View>

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Hello from Overlay!</Text>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBottom: {
    position: "absolute",
    bottom: -30,
  },
  bottomStyle: {
    height: 60,
    width: 60,
    backgroundColor: "#fdf9cc",
    borderRadius: 100,
  },
});

export default addTransaction;
