import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function DeleteScreen(props: any) {
  return (
    <View>
      <Text style={styles.title}>
        Are you sure you want to delete this booking?
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Yes </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    margin: 13,
  },
  button: {
    backgroundColor: "#ff6666",
    padding: 10,
    margin: 15,
    height: 40,
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontSize: 18,
  },
});
