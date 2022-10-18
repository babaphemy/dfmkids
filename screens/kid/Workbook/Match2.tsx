import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Pandemo from "../Pandemo";

const Match2 = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.dropZone}>
        <Text style={styles.text}>Drop the dime here!</Text>
      </View>
      <View style={styles.ballContainer} />
      <View style={styles.row}>
        <Pandemo img="dime" />
        <Pandemo img="nickel" />
        <Pandemo img="quarter" />
        <Pandemo img="penny" />
      </View>
    </View>
  );
};

export default Match2;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  dropZone: {
    height: 150,
    backgroundColor: "#00334d",
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  ballContainer: {
    height: 200,
  },
});
