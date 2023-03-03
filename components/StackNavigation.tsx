import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BookingEntity } from "../entities/BookingEntity";
import DeleteScreen from "../screens/DeleteScreen";
import EditScreen from "../screens/EditScreen";
import ListScreen from "../screens/ListScreen";

export type StackMain = {
    Bookings: undefined;
    Edit: { booking: BookingEntity };
    Delete: {booking: BookingEntity};
  };

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Bookings" component={ListScreen} />
            <Stack.Screen name="Edit" component={EditScreen}options={{ title: "Modify your booking" }} />
            <Stack.Screen name="Delete" component={DeleteScreen} options={{ title: "Delete your booking" }}/>
        </Stack.Navigator>
    );
  }
  