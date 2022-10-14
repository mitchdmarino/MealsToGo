import React from "react";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { MapScreen } from "./src/features/restaurants/screens/map.screen";
import { SettingsScreen } from "./src/features/restaurants/screens/settings.screen";
import { theme } from "./src/infrastructure/theme";

const Tab = createBottomTabNavigator();

export default function App() {
  let [oswaldLoaded] = useOswald({ Oswald_400Regular });
  let [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
