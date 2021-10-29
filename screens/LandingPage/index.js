import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Button } from "react-native";
import styles from "./style";
import Header from "../../components/Header";
import CarItem from "../../components/CarItem";
import CarsList from "../../components/CarsList";
import StyledButton from "../../components/StyledButton";

const LandingPage = (props) => {

  const nav = props.navigation;


  return (
    <View style={styles.container}>
      <Header/>
      <CarsList nav = {nav}/>
      <StatusBar style="auto" />
    </View>
  );
};

export default LandingPage;
