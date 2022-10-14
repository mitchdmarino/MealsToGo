import React from "react";
import { Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight ? `margin-top: ${StatusBar.currentHeight}px` : ""}
`;
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: lightblue;
`;

export const MapScreen = () => {
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <Text>Maps</Text>
      </SafeArea>
    </>
  );
};
