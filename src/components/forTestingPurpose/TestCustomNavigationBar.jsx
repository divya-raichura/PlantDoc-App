// import { StyleSheet } from "react-native";
// import Constants from "expo-constants";
// import theme from "../../theme";
import { getHeaderTitle } from "@react-navigation/elements";
import { Appbar } from "react-native-paper";

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: theme.colors.appBarColor,
//     flexDirection: "row",
//   },
//   tabs: {
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//   },
// });

const TestCustomNavigationBar = ({ navigation, back, route, options }) => {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {/* <View style={styles.container}> */}
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      {/* <CustomText
        fontSize="subheading"
        fontWeight="bold"
        style={{ color: "white", ...styles.tabs }}
      >
        Home
      </CustomText> */}
      <Appbar.Content title={title}></Appbar.Content>
      {/* <CustomText
        fontSize="subheading"
        fontWeight="bold"
        style={{ color: "white", ...styles.tabs }}
      >
        Details
      </CustomText> */}
      {/* </View> */}
    </Appbar.Header>
  );
};

export default TestCustomNavigationBar;
