import React from "react";
import { View, Tex, FlatList, Dimensions } from "react-native";
import CarItem from "../CarItem";
import styles from "./styles";
import cars from "./cars";

const CarsList = (props) => {
  const nav = props.nav;
  
  return (
    <View style={styles.container}>
      <FlatList
          data={cars}
          renderItem={({item}) => <CarItem car={item} nav={nav}/> }
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          snapToInterval={Dimensions.get('window').height}
          showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarsList;
