/*
 This component is intended to show when a user is logged in to our app.

 NOTE: Okta is the third party library that we are using to authenticate our users.

 This is the expected functionality:

 1. The text display correct shows the user's current login status
 2. An alert is shown when the login status changes
 3. If a user has logged in at least once before then show a 'Welcome back' message

 There are issues with this implementation. Can you see them?
*/
import { EventEmitter } from "@okta/okta-react-native";
import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";

type Props = {
  loginCount: number;
};

export const LoginDisplay = (props: Props) => {
  const { loginCount } = props;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const shouldShowWelcomeBack = isLoggedIn && loginCount > 0;

  useEffect(() => {
    EventEmitter.addListener("signInSuccess", () => setIsLoggedIn(true));

    EventEmitter.addListener("signOutSuccess", () => setIsLoggedIn(false));
    return () => {
      EventEmitter.removeEventListener()
    }
  }, []);

  useEffect(() => {
    Alert.alert("The login status has changed!");
  }, [isLoggedIn, Alert]);

  return (
    <View>
      <Text>Login status:</Text>
      <Text>{isLoggedIn}</Text>
      {shouldShowWelcomeBack ? <Text>Welcome back!</Text> : null}
    </View>
  );
};
