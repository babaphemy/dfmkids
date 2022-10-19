import { StyleSheet } from "react-native";

let styleTwo = StyleSheet.create({
  dateTouch: {
    width: 142,
  },
  game: {
    position: "relative",
  },
  green: {
    width: "150px",
    height: "150px",
    borderRadius: 5,
    backgroundColor: "green",
    borderColor: "black",
    position: "absolute",
    left: 0,
    top: 0,
  },
  red: {
    width: "150px",
    height: "150px",
    borderRadius: 10,
    backgroundColor: "red",
    borderColor: "black",
    position: "absolute",
    right: 0,
    top: 0,
  },
  yellow: {
    width: "150px",
    height: "150px",
    borderRadius: 10,
    backgroundColor: "gold",
    borderColor: "black",
    position: "absolute",
    left: 0,
    bottom: 0,
  },
  blue: {
    width: "150px",
    height: "150px",
    borderRadius: 10,
    backgroundColor: "blue",
    borderColor: "black",
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  square: {
    width: "400px",
    height: "400px",
    backgroundColor: "purple",
    position: "relative",
    textAlign: "center",
    display: "flex",
  },

  display: {
    width: "400px",
    height: "400px",
    borderRadius: 20,
    backgroundColor: "black",
    position: "relative",
    textAlign: "center",
    display: "flex",
  },

  controls: {
    margin: "auto",
    position: "relative",
    textAlign: "center",
  },

  Highscore: {
    position: "center",
    width: "30px",
    height: "20px",
    borderRadius: 5,
    backgroundColor: "lightgrey",
    textAlign: "center",
    display: "inlineBlock",
  },

  Currentscore: {
    position: "center",
    width: "30px",
    height: "20px",
    borderRadius: 5,
    backgroundColor: "lightgrey",
    textAlign: "center",
    display: "inlineBlock",
  },

  startButton: {
    position: "relative",
    width: "60px",
    height: "20px",
    borderRadius: 5,
    backgroundColor: "lightgrey",
    textAlign: "center",
    display: "inlineBlock",
  },

  powerLight: {
    backgroundColor: "red",
    width: "8px",
    height: "8px",
    borderRadius: 20,
    marginTop: 5,
    marginRight: "auto",
  },
});

export default styleTwo;
