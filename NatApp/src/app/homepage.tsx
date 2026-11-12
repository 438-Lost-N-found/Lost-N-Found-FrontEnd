import { Text, View, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";
import { globalStyles } from "../constants/styles";

export default function Homepage() {
  const router = useRouter();

  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.title}>
        Recently Announced Lost Items
      </Text>

      <View style={globalStyles.cardRow}>
        {[1, 2, 3].map((item) => (
          <View style={globalStyles.itemCard} key={item}>
            <Pressable
              onPress={() =>
                router.push({
                  pathname: "/item-details",
                  params: { itemId: item.toString() },
                })
              }
            >
              <View style={globalStyles.imagePlaceholder} />
            </Pressable>

            <Text style={globalStyles.itemText}>Item name</Text>
            <Text style={globalStyles.locationText}>
              Location found
            </Text>
          </View>
        ))}
      </View>

      <Link href="/useraccount">Go to User Account</Link>
    </View>
  );
}