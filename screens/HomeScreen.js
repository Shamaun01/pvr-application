import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import Moviecards from "../components/Moviecards";

const HomeScreen = () => {
  return (    
      <View>
        <Moviecards />
      </View>
    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
