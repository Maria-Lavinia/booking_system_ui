import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { StackMain } from "../components/StackNavigation";
import { BookingEntity } from "../entities/BookingEntity";

type deleteScreenProp = StackNavigationProp<StackMain, "Delete">;

export default function EditScreen(props: any) {
  const booking: BookingEntity = props.route.params.booking;
  const navigation = useNavigation<deleteScreenProp>();

  return (
    <View>
      <View>
        <TextInput style={styles.input} accessibilityLabelledBy={"Name"}>
          {booking.name}
        </TextInput>
        <TextInput style={styles.input}>{booking.numberOfPeople}</TextInput>
        <TextInput style={styles.input}>{booking.phone}</TextInput>
        <TextInput style={styles.input}>{booking.email}</TextInput>
        <TextInput style={styles.input}>{booking.comment}</TextInput>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button}
          // onPress={}
        >
          <Text style={styles.text}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Delete", { booking })}
        >
          <Text style={styles.text}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 13,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,

    alignSelf: "center",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
  },
  text: {
    textAlign: "center",
  },
  btnContainer: {
    marginTop: 8,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});