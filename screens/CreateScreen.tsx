import axios from "axios";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  DatePickerIOS,
  ScrollView,
} from "react-native";
import DatePicker from 'react-native-date-picker'

export default function CreateScreen(props: any) {
  const [name, setName] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [date, setDate] = useState(new Date());
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const createBooking = async () => {
    axios
      .post("https://d8c3-130-226-161-125.eu.ngrok.io/bookings", {
        name,
        numberOfPeople,
        date,
        phone,
        email,
        comment,
      })
      .then((response) => {
        console.log(response.data);

      })
      .catch((error) => {
        console.log(error);
      });
     
  };

  return (
    <ScrollView>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          autoFocus={true}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Number of people"
          value={numberOfPeople}
          onChangeText={(text) => setNumberOfPeople(text)}
          autoFocus={true}
        ></TextInput>
        <DatePickerIOS maximumDate={new Date(2100, 11, 31)} date={date} onDateChange={(date) => setDate(date)}></DatePickerIOS>
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          autoFocus={true}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoFocus={true}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Comment"
          value={comment}
          onChangeText={(text) => setComment(text)}
          autoFocus={true}
        ></TextInput>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPress={createBooking}>
          <Text style={styles.text}>Create</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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