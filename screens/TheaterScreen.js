import { StyleSheet, Text,Alert, View, Pressable, FlatList } from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Moviescards } from "../Context";
import { useStripe } from "@stripe/stripe-react-native";

const TheaterScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { seats, setSeats,occupaid } = useContext(Moviescards);
  const onSeatSelect = (item) => {
    const seatSelected = seats.find((seat) => seat === item);
    if (seatSelected) {
      setSeats(seats.filter((seat) => seat !== item));
    } else {
      setSeats([...seats, item]);
    }
  };

  console.log(seats, "seats selected");
  displaySeats = [...seats];
  const fee = 87;
  const noOfSeats = seats.length;
  const priceValue=noOfSeats * 240 ;
  const total = seats.length > 0 ? fee + noOfSeats * 240 : 0;
  console.log(total, "total");
  const showSeats = () => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {seats.map((seat, index) => (
          <Text style={{ marginTop: 4, fontSize: 15, paddingHorizontal: 4 }}>
            {seat}
          </Text>
        ))}
      </View>
    );
  };
  const stripe = useStripe();
  const subscribe = async () => {
    const response = await fetch("http://192.168.0.196:8080/payment", {
      method: "POST",
      body: JSON.stringify({
        amount: Math.floor(total * 100),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    if (!response.ok) return Alert.alert(data.message);
    const clientSecret = data.clientSecret;
    const initSheet = await stripe.initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
      merchantDisplayName: 'Merchant Name ',
    });
    if (initSheet.error) return Alert.alert(initSheet.error.message);
    const presentSheet = await stripe.presentPaymentSheet({
      clientSecret,
    });
    if (presentSheet.error) return Alert.alert(presentSheet.error.message);
    else {
      occupaid.push(...seats);
      navigation.navigate("Ticket",{
        name:route.params.name,
        mall:route.params.mall,
        timeSelected:route.params.timeSelected,
        total:total,
        image:route.params.image,
        date:route.params.date,
        selectedSeats:displaySeats,
        priceValue:priceValue,

      })
      setSeats([]);
    }
  };

  return (
    <View style={{ marginTop: 35 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 5 }}
            name="arrow-back"
            size={24}
            color="black"
          />
          <View style={{ marginLeft: 6 }}>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              {route.params.name}
            </Text>
            <Text
              style={{
                marginTop: 2,
                color: "gray",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              {route.params.mall}
            </Text>
          </View>
        </View>
        <Entypo
          style={{ marginRight: 15 }}
          name="share"
          size={24}
          color="black"
        />
      </View>
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        {route.params.timeSelected}
      </Text>
      <Text
        style={{
          fontSize: 13,
          textAlign: "center",
          marginTop: 10,
          color: "gray",
        }}
      >
        CLASSIC (240)
      </Text>
      <FlatList
        numColumns={7}
        data={route.params.tableSeats}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => onSeatSelect(item)}
            style={{
              margin: 10,
              borderColor: "coral",

              borderWidth: 0.5,
              borderRadius: 6,
            }}
          >
             {
              seats.includes(item) ? (
                <Text style={{ backgroundColor: "coral", padding: 8 }}>{item}</Text>
              )
              :
              occupaid.includes(item) ? (
                <Text style={{ backgroundColor: "#989898", padding: 8 }}>{item}</Text>
              )
              :
              (
                <Text style={{ padding: 8 }}>{item}</Text>
              )
            }
          </Pressable>
        )}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 100,
          marginTop: 20,
          backgroundColor: "#D8D8D8",
          padding: 10,
        }}
      >
        <View>
          <FontAwesome5
            style={{ textAlign: "center", marginTop: 4 }}
            name="square-full"
            size={24}
            color="coral"
          />
          <Text>selected</Text>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <FontAwesome5
            style={{ textAlign: "center", marginTop: 4 }}
            name="square-full"
            size={24}
            color="white"
          />
          <Text>vacant</Text>
        </View>
        <View>
          <FontAwesome5
            style={{ textAlign: "center", marginTop: 4 }}
            name="square-full"
            size={24}
            color="#989898"
          />
          <Text>occupied</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 14,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ padding: 10 }}>
          <Text style={{ marginBottom: 4, fontSize: 15, fontWeight: "500" }}>
            Show end time approx 6.00pm
          </Text>
          {seats.length > 0 ? (
            showSeats()
          ) : (
            <Text style={{ fontSize: 18 }}>No seats selected </Text>
          )}
        </View>
        <View
          style={{
            backgroundColor: "#E0E0E0",
            padding: 10,
            borderTopLeftRadius: 6,
            borderBottomLeftRadius: 6,
            marginTop: 10,
          }}
        >
          <Text style={{ width: 100 }}>Now with ticket cancellation</Text>
        </View>
      </View>
      <Pressable
        style={{
          backgroundColor: "coral",
          padding: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 5,
        }}
      >
        {seats.length > 0 ? (
          <Text style={{ fontSize: 17, fontWeight: "500" }}>
            {seats.length} seat's selected
          </Text>
        ) : (
          <Text></Text>
        )}

        <Pressable onPress={subscribe}>
          <Text style={{ fontSize: 17, fontWeight: "600" }}>Pay ${total}</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default TheaterScreen;

const styles = StyleSheet.create({});
