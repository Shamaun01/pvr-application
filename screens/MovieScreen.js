import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import malls from "../data/malls";

const MovieScreen = () => {
  const route = useRoute();
  console.log(route.params);
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState("");
  const mallsData = malls;
  const [mall, setMall] = useState([]);
  const [seatsData,setSeatData] = useState([]);
  console.log(mall, "selected");
  return (
    <View style={{ marginTop: 35, }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            onPress={() => navigation.navigate("Home")}
            style={{ marginLeft: 5 }}
            name="arrow-back"
            size={24}
            color="black"
          />
          <Text style={{ fontSize: 17, fontWeight: "600", marginLeft: 5 }}>
            {route.params.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Ionicons name="ios-filter-outline" size={24} color="black" />
          <Ionicons
            style={{ marginHorizontal: 15 }}
            name="search"
            size={24}
            color="black"
          />
          <Entypo name="share" size={24} color="black" />
        </View>
      </View>
      <View
        style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
      >
        <AntDesign
          style={{ marginLeft: 5 }}
          name="Safety"
          size={24}
          color="orange"
        />
        <Text style={{ marginLeft: 5 }}>Your safety is our priority</Text>
      </View>
      <HorizontalDatepicker
        mode="gregorian"
        startDate={new Date("2023-04-3")}
        endDate={new Date("2023-04-13")}
        initialSelectedDate={new Date("2020-08-22")}
        onSelectedDateChange={(date) => setSelectedDate(date)}
        selectedItemWidth={170}
        unselectedItemWidth={38}
        itemHeight={38}
        itemRadius={10}
        selectedItemTextStyle={styles.selectedItemTextStyle}
        unselectedItemTextStyle={styles.selectedItemTextStyle}
        selectedItemBackgroundColor="coral"
        unselectedItemBackgroundColor="#9ec3ef"
        flatListContainerStyle={styles.flatListContainerStyle}
      />
      {mallsData.map((item, index) => (
        <Pressable
          onPress={() => {
            setMall(item.name);
            setSeatData(item.tableData);
          }}
          style={{
            margin: 10,backgroundColor: "coral",
            padding: 10,
            borderRadius: 6,
            marginRight: 10,
            marginTop: 10,
            width: "95%",
          }}
          key={index}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            {item.name}
          </Text>
          {mall.includes(item.name) ? (
            <FlatList
              numColumns={3}
              data={item.showtimes}
              renderItem={({ item }) => (
                <Pressable
                onPress={()=>navigation.navigate("Theater",{
                  mall:mall,
                  name:route.params.name,
                  timeSelected:item,
                  tableSeats:seatsData,
                })}
                  style={{
                    backgroundColor: "white",
                    borderWidth: 0.5,
                    width: 80,
                    margin: 10,
                    padding: 5,                   
                    borderRadius: 3,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      color: "black",
                      fontWeight: "500",
                      textAlign: "center",
                      justifyContent:"center",
                      
                      
                    }}
                  >
                    {item}
                  </Text>
                </Pressable>
              )}
            />
          ) : null}
        </Pressable>
      ))}
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({});
