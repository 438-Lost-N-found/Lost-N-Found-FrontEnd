import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        contentStyle: {
          backgroundColor: "#DFF3FF",
        },
        headerStyle: {
          backgroundColor: "#DFF3FF",
        },
        headerTintColor: "#123B4A",
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="homepage"
        options={{ title: "Lost and Found" }}
      />

      <Stack.Screen
        name="useraccount"
        options={{ title: "User Account" }}
      />
      <Stack.Screen
        name="item-details"
        options={{ title: "Item Details" }}
      />
    </Stack>
    
  );
}