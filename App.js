import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎧 bluEQ</Text>
      <Text style={styles.subtitle}>Hazır Expo projesi — APK için EAS Build</Text>
      <Text style={styles.note}>Bu, başlangıç iskeletidir. APK çıktısı için hiçbir ayar yapmadan derlenebilir.</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f1115', alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { color: '#4da3ff', fontSize: 28, fontWeight: 'bold', marginBottom: 6 },
  subtitle: { color: '#9fb0d9', fontSize: 14, marginBottom: 12 },
  note: { color: '#e8eefc', fontSize: 13, textAlign: 'center' }
});