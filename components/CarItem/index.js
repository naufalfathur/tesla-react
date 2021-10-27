import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./style";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
  const { name, tagLine, image, tagLineCTA } = props;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.headline}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagLine}{' '}
          <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order");
          }}
        />

        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
