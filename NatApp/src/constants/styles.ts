import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#DFF3FF",
    padding: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#123B4A",
    marginBottom: 30,
  },

  cardRow: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    flexWrap: "wrap",
  },

  itemCard: {
    width: 180,
  },

  imagePlaceholder: {
    width: 180,
    height: 160,
    borderWidth: 4,
    borderColor: "#123B4A",
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
  },

  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#123B4A",
  },

  locationText: {
    fontSize: 15,
    color: "#123B4A",
    marginTop: 4,
  },
  text: {
    color: "#123B4A",
    textAlign: "center",
  },

  detailScreen: {
  flexGrow: 1,
  alignItems: "center",
  padding: 30,
  backgroundColor: "#DFF3FF",
},

detailTitle: {
  fontSize: 24,
  fontWeight: "bold",
  color: "#123B4A",
  marginBottom: 20,
},

largeImagePlaceholder: {
  width: 300,
  height: 240,
  borderWidth: 4,
  borderColor: "#123B4A",
  backgroundColor: "#FFFFFF",
  marginBottom: 20,
},

detailText: {
  width: 300,
  fontSize: 16,
  color: "#123B4A",
  marginBottom: 10,
},

chatTitle: {
  width: 300,
  fontSize: 20,
  fontWeight: "bold",
  color: "#123B4A",
  marginTop: 25,
  marginBottom: 10,
},

chatBox: {
  width: 300,
  minHeight: 80,
  padding: 15,
  backgroundColor: "#FFFFFF",
  borderWidth: 1,
  borderColor: "#123B4A",
  marginBottom: 10,
},

chatMessage: {
  color: "#123B4A",
},

messageInput: {
  width: 300,
  height: 45,
  backgroundColor: "#FFFFFF",
  borderWidth: 1,
  borderColor: "#123B4A",
  paddingHorizontal: 10,
  marginBottom: 10,
},

sendButton: {
  width: 300,
  padding: 12,
  alignItems: "center",
  backgroundColor: "#123B4A",
},

sendButtonText: {
  color: "#FFFFFF",
  fontWeight: "bold",
},
});