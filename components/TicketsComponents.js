import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import { Moviescards } from "../Context";
import { useNavigation,useRoute } from "@react-navigation/native";

const TicketsComponents = () => {
const route = useRoute();
  const navigation = useNavigation();
  const { ticket } = useContext(Moviescards);

  return (
    <View>
      {ticket.slice(0, 1).map((item, index) => (
        <ImageBackground
          style={{ aspectRatio: 5 / 2, height: 170 }}
          source={{
            uri: item.image,
          }}
        >
          <Pressable
            style={{
              position: "absolute",
              height: 150,
              backgroundColor: "#ffd8d9",
              padding: 10,
              borderRadius: 6,
              left: 20,
              top: 120,
              width: "80%",
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
              YOUR TICKET
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                    color: "gray",
                    marginTop: 4,
                  }}
                >
                  U/A • KANNADA
                </Text>
              </View>

              <Pressable
                onPress={() =>
                  navigation.navigate("Ticket", {
                    name: route.params.name,
                    mall: route.params.mall,
                    timeSelected: route.params.timeSelected,
                    total: total,
                    image: route.params.image,
                    date: route.params.date,
                    selectedSeats: displaySeats,
                    priceValue: priceValue,
                  })
                }
                style={{
                  backgroundColor: "coral",
                  padding: 10,
                  borderRadius: 6,
                  marginRight: 10,
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
                  VIEW TICKET
                </Text>
              </Pressable>
            </View>
            <Text style={{ marginTop: 6, fontSize: 15, fontWeight: "500" }}>
              {item.mall}
            </Text>
          </Pressable>
        </ImageBackground>
      ))}

      <View style={{ marginTop: 110 }} />
    </View>
  );
};
export default TicketsComponents;

const styles = StyleSheet.create({});
