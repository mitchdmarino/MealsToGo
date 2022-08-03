import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';


export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBox}>
          <Text>Search</Text>
        </View>
        <View style={styles.listBox}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  searchBox: {
    padding: 16,
    backgroundColor: 'yellow'
  },
  listBox: {
    flex: 1,
    padding: 16,
    backgroundColor: '#123432'
  },
});
