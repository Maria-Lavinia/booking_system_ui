import { StyleSheet } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-navigation";
import Booking from "../components/Booking";
import { BookingEntity } from "../entities/BookingEntity";

export default function ListScreen() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getBookings = async () => {
      axios
        .get("")
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
    <View>
      <SafeAreaView>
        <FlatList
          data={bookings}
          renderItem={({ item }: { item: BookingEntity }) => (
            <Booking booking={item} />
          )}
          keyExtractor={(item) => "" + item.id}
        />
      </SafeAreaView>
    </View>
  );
}

