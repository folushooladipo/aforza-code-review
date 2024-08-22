/*
 This is simple Login form component.

 1. There are 3x fields - a user name (text input), a password (text input) and a 'remember me' checkbox
 2. All 3 fields should be editable by the user
 3. The form can be submitted by the user with the correct data

 There are issues with this implementation. Can you see them?
*/
import CheckBox from "@react-native-community/checkbox";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { isTablet } from "react-native-device-info";

type Props = {
  onSubmit: () => void;
};

export const LoginForm = (props: Props) => {
  const { onSubmit } = props;

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const onNameChange = (userName: string) => setUserName(userName);

  const onPasswordChange = (password: string) => setPassword(password);

  const onRememberChange = (remember: boolean) => setRememberMe(remember);

  return (
    <View>
      <Text>User Name</Text>
      <TextInput
        value={userName}
        onChangeText={onNameChange}
        style={isTablet() ? styles.tabletStyles : styles.mobileStyles}
      />

      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={onPasswordChange}
        secureTextEntry
        style={isTablet() ? styles.tabletStyles : styles.mobileStyles}
      />

      <Text>Remember me:</Text>
      <CheckBox value={rememberMe} onValueChange={onRememberChange} />

      <Button title="Submit form" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  mobileStyles: {
    fontSize: 30,
    fontWeight: "normal",
  },
  tabletStyles: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
