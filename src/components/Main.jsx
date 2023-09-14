import { StyleSheet, View } from "react-native";
// import Constants from "expo-constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomNavigationBar from "./CustomNavigationBar";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: "Home" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ headerTitle: "Details" }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default Main;
