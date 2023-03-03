import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { useEffect } from "react";
import { BookingEntity } from "../entities/BookingEntity";
import CreateScreen from "../screens/CreateScreen";
import StackNavigation from "./StackNavigation";

export type TabMain = {
  List: undefined;
  Create: undefined;
};

const Tab = createBottomTabNavigator();

type ContextValue = {
  bookings: BookingEntity[];
  addBooking: (booking: BookingEntity) => void;
  setBookings: React.Dispatch<React.SetStateAction<BookingEntity[]>>;
};
type BookingsContextType = {
  bookings: BookingEntity[];
  setBookings: React.Dispatch<React.SetStateAction<BookingEntity[]>>;
  addBooking: (booking: BookingEntity) => void;
};

export const BookingsContext = React.createContext<BookingsContextType>({
  bookings: [],
  setBookings: () => {},
  addBooking: () => {},
});

export default function TabNavigation() {
  const [bookings, setBookings] = useState<BookingEntity[]>([]);
  const addBooking = (booking: BookingEntity) => {
    setBookings([...bookings, booking]);
  };
  return (
    <BookingsContext.Provider value={{ bookings, addBooking, setBookings }}>
    <Tab.Navigator>
      <Tab.Screen
        name="Booking List"
        component={StackNavigation}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Create" component={CreateScreen} />
    </Tab.Navigator>
    </BookingsContext.Provider>
  );
}

