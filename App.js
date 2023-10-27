import React, { useState } from "react";
import { RadioButton } from "react-native-paper";
import { View, Text, ScrollView, TextInput, Button, Pressable } from "react-native";
import Styles from "./styles/Styles";

export default function App() {
  return (
    <View>
      <View style={Styles.header}>
        <Text style={Styles.headerText}>ALCOMETER</Text>
      </View>
      <BACCalculator />
    </View>
  );
}

function BACCalculator() {
  const [weight, setWeight] = useState("");
  const [beerBottles, setBeerBottles] = useState("");
  const [time, setTime] = useState("");
  const [gender, setGender] = useState("male");
  const [alcoholLevel, SetAlcoholLevel] = useState("");

  const AlcoholLevelCalculator = () => {
    const litres = parseFloat(beerBottles) * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = parseFloat(weight) / 10;
    const gramsLeft = grams - burning * parseFloat(time);
    const result =
      gender === "male"
        ? gramsLeft / (parseFloat(weight) * 0.7)
        : gramsLeft / (parseFloat(weight) * 0.6);
    SetAlcoholLevel(`Blood alcohol level: ${result.toFixed(2)}`);
  };

  return (
    <ScrollView style={Styles.container}>
      <Text style={Styles.headings}>Weight (kg):</Text>
      <TextInput
        keyboardType="number-pad"
        value={weight}
        style={Styles.textInput}
        onChangeText={(text) => setWeight(text)}
      />
      <Text style={Styles.headings}>Number of Beer Bottles:</Text>
      <TextInput
        keyboardType="numeric"
        value={beerBottles}
        style={Styles.textInput}
        onChangeText={(text) => setBeerBottles(text)}
      />
      <Text style={Styles.headings}>Time (hours):</Text>
      <TextInput
        keyboardType="numeric"
        value={time}
        style={Styles.textInput}
        onChangeText={(text) => setTime(text)}
      />
      <Text style={Styles.headings}>Gender:</Text>
      <RadioButton.Group
        onValueChange={(value) => setGender(value)}
        value={gender}
      >
        <View>
          <Text style={Styles.headings}>Male</Text>
          <RadioButton value="male" />
        </View>
        <View>
          <Text style={Styles.headings}>Female</Text>
          <RadioButton value="female" />
        </View>
      </RadioButton.Group>

      <Pressable style={Styles.buttonStyle}
        onPress={AlcoholLevelCalculator}>
        <Text style={Styles.buttonText}>Calculate alcohol level</Text>
        </Pressable>
      <Text style={Styles.resultText}>{alcoholLevel}</Text>

      <View style={Styles.footer}>
        <Text style={Styles.footerText}>Author: Samuli Rahkola</Text>
      </View>
    </ScrollView>
  );
}
