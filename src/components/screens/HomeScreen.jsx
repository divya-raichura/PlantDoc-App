import UploadPhoto from "./UploadPhoto";
import { View, Text, Button, StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

function HomeScreen({ navigation }) {
  return (
    <View style={style.container}>
      <UploadPhoto />
      <Text>Home Screen</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

export default HomeScreen;
