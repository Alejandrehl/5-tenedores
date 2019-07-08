import React, { useRef, useState, useContext } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Image, Button } from "react-native-elements";

import t from "tcomb-form-native";
const Form = t.form.Form;
import { LoginStruct, LoginOptions } from "../../forms/Login";

const Login = () => {
  const loginForm = useRef(null);
  return (
    <View style={styles.viewBody}>
      <Image
        source={require("../../../assets/img/logo.png")}
        style={styles.logo}
        containerStyle={styles.containerLogo}
        PlaceholderContent={<ActivityIndicator />}
        resizeMode="contain"
      />
      <View style={styles.viewForm}>
        <Form ref={loginForm} type={LoginStruct} options={LoginOptions} />
        <Button title="¡Acceder!" buttonStyle={styles.buttonLoginContainer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40
  },
  containerLogo: {
    alignItems: "center"
  },
  viewForm: {
    marginTop: 100
  },
  logo: {
    width: 200,
    height: 100
  },
  buttonLoginContainer: {
    backgroundColor: "#ffc107",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  }
});

export default Login;
