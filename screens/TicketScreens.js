import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import moment from "moment";
import QRCode from "react-native-qrcode-svg";
import { Moviescards } from "../Context";


const TicketScreens = () => {
  const navigation = useNavigation();
  const route = useRoute();

  
  const { ticket } = useContext(Moviescards);

  const ticketDetails = route.params;

  useEffect(() => {
    const loadTicket = () => {
      ticket.push(ticketDetails);
    };
    loadTicket();
  }, []);

  const date = moment(route.params.date).format("MM/DD/YYYY");
  const day = moment(route.params.date).format("dddd");
  const month = moment(route.params.date).format("MMMM");
  const year = moment(route.params.date).format("YYYY");

  return (
    <SafeAreaView style={{ marginTop: 30, padding: 10 }}>
      <View
        style={{
          backgroundColor: "white",
          height: "92%",
          borderColor: "black",
          borderWidth: 0.2,
          marginTop: 15,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "500" }}>
            {route.params.name}
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "500" }}>
            {route.params.selectedSeats.length}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 17, color: "gray" }}>Hindi - 2D</Text>
          <Text style={{ fontSize: 16, color: "red", fontWeight: "500" }}>
            PVR-TICKET
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            marginTop: 6,
            marginHorizontal: 10,
          }}
        >
          {route.params.mall}
        </Text>

        <Text
          style={{
            textDecorationStyle: "dotted",
            height: 1,
            borderWidth: 0.3,
            margin: 10,
            backgroundColor: "#DCDCDC",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginTop: 10, marginLeft: 10 }}>
            <Text style={{ fontSize: 15, color: "gray", fontWeight: "500" }}>
              Date & Time
            </Text>
            <Text style={{ marginVertical: 4, fontSize: 17 }}>
              {route.params.timeSelected}
            </Text>

            <Text style={{ fontWeight: "500", fontSize: 15 }}>
              {day} {month} {year}
            </Text>
          </View>
          <Image
            style={{ aspectRatio: 4 / 2, height: 60 }}
            source={{ uri: route.params.image }}
          />
        </View>
        <Text
          style={{
            textDecorationStyle: "dotted",
            height: 1,
            borderWidth: 0.3,
            margin: 10,
            backgroundColor: "#DCDCDC",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: 15,
          }}
        >
          <View>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>AUDI NO</Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "bold",
                marginTop: 6,
              }}
            >
              2
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>TICKET</Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "bold",
                marginTop: 6,
              }}
            >
              {route.params.selectedSeats.length}
            </Text>
          </View>
          <View style={{ marginRight: 15 }}>
            <Text style={{ fontSize: 15, fontWeight: "500", marginTop: 6 }}>
              SEATS
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {route.params.selectedSeats.map((item, index) => (
                <Text
                  style={{
                    margin: 2,
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </Text>
              ))}
            </View>
          </View>
        </View>
        <Text
          style={{
            textDecorationStyle: "dotted",
            height: 1,
            borderWidth: 0.3,
            margin: 10,
            backgroundColor: "#DCDCDC",
          }}
        />
        <View
          style={{
            height: 150,
            borderRadius: 6,
            margin: 10,
            backgroundColor: "#FBCEB1",
          }}
        >
          <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              Price Detalis
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 4,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                0's Seats Convenience
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                $ {route.params.priceValue}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 4,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                Convenience Fee
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>$ 87</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 4,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                Grand Total
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                $ {route.params.total}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 4,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>ID NO</Text>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                FVHGVHJH6574654367568
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            textDecorationStyle: "dotted",
            height: 1,
            borderWidth: 0.3,
            margin: 10,
            backgroundColor: "#DCDCDC",
          }}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          <QRCode
            value={route.params.name}
            size={90}
            logo={{ uri: route.params.image }}
            logoSize={30}
            logoBackgroundColor="transparent"
          />
        </View>
        <Text style={{ fontSize: 16, fontWeight: "500", textAlign: "center" }}>
          Q22ETYU4D
        </Text>
        <Text
          style={{
            textDecorationStyle: "dotted",
            height: 1,
            borderWidth: 0.3,
            margin: 10,
            backgroundColor: "#DCDCDC",
          }}
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate("Home")}
        style={{
          backgroundColor: "coral",
          marginLeft: "auto",
          marginRight: "auto",
          width: 140,
          borderRadius: 4,
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "500", textAlign: "center" }}>
         GO TO Home
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default TicketScreens;

const styles = StyleSheet.create({});
