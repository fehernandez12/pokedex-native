import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Account } from "../screens/Account";

const Stack = createStackNavigator();

function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountNav"
        component={Account}
        options={{
          title: "Mi cuenta",
        }}
      />
    </Stack.Navigator>
  );
}

export { AccountNavigation };
