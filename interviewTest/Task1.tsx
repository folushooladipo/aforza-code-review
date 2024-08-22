/*
 This is simple list component with the following expected functionality:

 1. All items in the list are rendered correctly on the screen
 2. Pressing the button sorts the list and re-renders it
 3. The justifyContent prop is used to determine the Flex CSS layout

 There are issues with this implementation. Can you see them?
*/
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const data = ["Rick", "Morty", "Jerry", "Summer"];

type Props = {
  justifyContent: "flex-start" | "flex-end" | "center";
};

export const MyList = (props: Props) => {
  const { justifyContent } = props;

  const [listItems, setListItems] = useState(data);

  const handleSort = () => setListItems(listItems.sort());

  const flexStyle = { justifyContent };

  return (
    <View style={[flexStyle, styles.container]}>
      {listItems.map((item: string, index: number) => (
        <Text key={index}>{item + "is at index " + index}</Text>
      ))}

      <Button title="Sort items" onPress={handleSort} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});
