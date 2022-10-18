import React from "react";
import { Image, Text, View } from "react-native";
import purse1 from "../../../assets/images/purse1.png";
import purse2 from "../../../assets/images/purse2.png";
import purse3 from "../../../assets/images/purse3.png";
import purse4 from "../../../assets/images/purse4.png";
import purse5 from "../../../assets/images/purse5.png";
import styleApp from "../style";
const options: any = [
  { image: purse1, name: "1c" },
  { image: purse2, name: "26c" },
  { image: purse3, name: "10c" },
  { image: purse4, name: "25c" },
  { image: purse5, name: "45c" },
];
const Money = () => {
  return (
    <View style={[styleApp.frow, styleApp.exercise]}>
      <View>
        {options.map((op) => (
          <Image
            key={op.name}
            source={op.image}
            style={[styleApp.img, styleApp.frow]}
          />
        ))}
      </View>
      <View style={styleApp.fend}>
        {options.map((op, index) => (
          <View key={index} style={styleApp.draw}>
            <Image
              source={require("../../../assets/images/coin-outline.png")}
              style={styleApp.img}
            />
            <Text>{op.name?.toUpperCase()}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
export default Money;
