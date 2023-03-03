
import axios from "axios";
import { useEffect, useState } from "react";
import { View, FlatList, SafeAreaView , Text} from "react-native";
import Booking from "../components/Booking";
import { BookingEntity } from "../entities/BookingEntity";
import { StyleSheet } from "react-native";

export default function ListScreen() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getBookings = async () => {
      axios
        .get("https://485c-130-226-161-125.eu.ngrok.io/bookings")
        .then((response) => {
          console.log(response.data);
          setBookings(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getBookings();
  }, []);


  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reservations List</Text>
      <SafeAreaView style={styles.listContainer}>
        <FlatList data={bookings} renderItem={({ item }: { item: BookingEntity }) => <Booking booking={item} />} keyExtractor={(item) => "" + item.id} style={styles.list} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  listContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
  },
  list: {
    paddingHorizontal: 10,
  },
});



