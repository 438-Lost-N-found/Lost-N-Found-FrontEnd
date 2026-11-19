import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { getInbox, Message } from '../services/messages';

export default function InboxScreen() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInbox().then(setMessages).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messages</Text>
      <FlatList
        data={messages}
        keyExtractor={(m) => m.id}
        ListEmptyComponent={<Text style={styles.empty}>No messages yet.</Text>}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.postTitle}>{item.postTitle}</Text>
            <Text>{item.body}</Text>
            <Text style={styles.date}>{new Date(item.createdAt).toLocaleString()}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, width: '100%', maxWidth: 700, alignSelf: 'center' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  header: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  card: { padding: 14, borderWidth: 1, borderColor: '#e5e5e5', borderRadius: 12, marginBottom: 10, gap: 4 },
  postTitle: { fontWeight: '600' },
  date: { fontSize: 12, color: '#888' },
  empty: { color: '#888', textAlign: 'center', marginTop: 24 },
});