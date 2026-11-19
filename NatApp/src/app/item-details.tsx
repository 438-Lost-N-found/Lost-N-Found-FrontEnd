import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { globalStyles } from "../constants/styles";
import ContactOwnerForm from '../components/ContactOwnerForm';

export default function ItemDetails() {
  const { itemId } = useLocalSearchParams();
  const [message, setMessage] = useState("");

  return (
    <ScrollView contentContainerStyle={globalStyles.detailScreen}>
      <Text style={globalStyles.detailTitle}>
        Lost Item Details
      </Text>

      <View style={globalStyles.largeImagePlaceholder} />

      <Text style={globalStyles.detailText}>
        Item: Item name
      </Text>

      <Text style={globalStyles.detailText}>
        Location found: Location
      </Text>

      <Text style={globalStyles.detailText}>
        Description: Item description goes here
      </Text>

      <Text style={globalStyles.detailText}>
        Item number: {itemId}
      </Text>
      <ContactOwnerForm postId={String(itemId)} />
    </ScrollView>
  );
}