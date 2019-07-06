import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Register = () => {
  return (
    <View style={styles.viewBody}>
      <Text>Register Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});

export default Register;
