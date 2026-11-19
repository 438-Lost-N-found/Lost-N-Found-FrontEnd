import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { sendMessage } from '../services/messages';

export default function ContactOwnerForm({ postId }: { postId: string }) {
  const [body, setBody] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSend = async () => {
    if (!body.trim() || status === 'sending') return;
    setStatus('sending');
    try {
      await sendMessage(postId, body.trim());
      setBody('');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact the owner</Text>
      <TextInput
        style={styles.input}
        value={body}
        onChangeText={setBody}
        placeholder="Write your message and how to reach you..."
        multiline
        maxLength={500}
      />
      <Pressable
        style={[styles.button, (!body.trim() || status === 'sending') && styles.disabled]}
        onPress={handleSend}
      >
        <Text style={styles.buttonText}>{status === 'sending' ? 'Sending...' : 'Send'}</Text>
      </Pressable>
      {status === 'sent' && <Text style={styles.success}>Message sent.</Text>}
      {status === 'error' && <Text style={styles.error}>Something went wrong. Try again.</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, borderWidth: 1, borderColor: '#ddd', borderRadius: 12, gap: 10 },
  title: { fontSize: 18, fontWeight: '600' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, minHeight: 90, textAlignVertical: 'top' },
  button: { backgroundColor: '#2563eb', padding: 12, borderRadius: 8, alignItems: 'center' },
  disabled: { opacity: 0.5 },
  buttonText: { color: '#fff', fontWeight: '600' },
  success: { color: '#15803d' },
  error: { color: '#b91c1c' },
});