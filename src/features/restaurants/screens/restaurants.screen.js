import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBox}>
          <Searchbar />
        </View>
        <View style={styles.listBox}>
          <RestaurantInfoCard />
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchBox: {
    padding: 16,
    backgroundColor: "yellow",
  },
  listBox: {
    flex: 1,
    padding: 16,
    backgroundColor: "#123432",
  },
});
