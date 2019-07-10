import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ListItem } from "react-native-elements";
import OverlayOneInput from "../../Elements/OverlayOneInput";

const UpdateUserInfo = ({ user, updateName }) => {
  const [overlayComponent, setOverlayComponent] = useState(null);

  const openOverlayComponent = (placeholder, updateFunction, inputValue) => {
    setOverlayComponent(
      <OverlayOneInput
        isVisible={true}
        placeholder={placeholder}
        updateFunction={updateFunction}
        value={inputValue}
      />
    );
  };

  const updateUserName = name => {
    updateName(name);
    setOverlayComponent(null);
  };

  const menuItems = [
    {
      title: "Cambiar Nombre y Apellido",
      iconType: "material-community",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      iconNameLeft: "account-circle",
      iconColorLeft: "#ccc",
      onPress: () =>
        openOverlayComponent("Nombre y Apellido", updateUserName, user.name)
    },
    {
      title: "Cambiar Email",
      iconType: "material-community",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      iconNameLeft: "at",
      iconColorLeft: "#ccc",
      onPress: () => console.log("Click en cambiar email")
    },
    {
      title: "Cambiar Contraseña",
      iconType: "material-community",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      iconNameLeft: "lock-reset",
      iconColorLeft: "#ccc",
      onPress: () => console.log("Click en cambiar contraseña")
    }
  ];

  return (
    <View>
      {menuItems.map((item, index) => (
        <ListItem
          key={index}
          title={item.title}
          leftIcon={{
            type: item.iconType,
            name: item.iconNameLeft,
            color: item.iconColorLeft
          }}
          rightIcon={{
            type: item.iconType,
            name: item.iconNameRight,
            color: item.iconColorRight
          }}
          onPress={item.onPress}
          containerStyle={styles.contentContainerStyle}
        />
      ))}
      {overlayComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3"
  }
});

export default UpdateUserInfo;