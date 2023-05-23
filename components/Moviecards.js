import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import React, { useContext } from "react";
import movies from "../data/movies";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";
import { Moviescards } from "../Context";
import TicketsComponents from "./TicketsComponents";

const Moviecards = () => {
  const data = movies;
  const navigation = useNavigation();
  const { ticket } = useContext(Moviescards);
  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={ticket.length > 0 ? TicketsComponents : Header}
        data={data}
        renderItem={({ item }) => (
          <Pressable style={{ margin: 6, marginHorizontal: 15 }}>
            <Image
              style={{
                aspectRatio: 2 / 3,
                height: 240,
                borderRadius: 10,
              }}
              source={{ uri: item.image }}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                width: 170,
                marginTop: 10,
              }}
            >
              {item.name.substr(0.16) + "..."}
            </Text>
            <Text style={{ marginTop: 4, fontSize: 15, color: "gray" }}>
              U/A • {item.language}
            </Text>
            <Text style={{ marginTop: 4, fontSize: 14, fontWeight: "500" }}>
              {item.genre}
            </Text>
            <Pressable
              onPress={() =>
                navigation.navigate("Movie", {
                  name: item.name,
                  image: item.image,
                })
              }
              style={{
                backgroundColor: "coral",
                padding: 10,
                borderRadius: 6,
                marginRight: 10,
                marginTop: 10,
                width: 100,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  color: "black",
                  textAlign: "center",
                }}
              >
                BOOK
              </Text>
            </Pressable>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Moviecards;

const styles = StyleSheet.create({});
