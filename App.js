import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎧 bluEQ</Text>
      <Text style={styles.subtitle}>Expo 51 — Android APK test</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f1115', alignItems: 'center', justifyContent: 'center' },
  title: { color: '#4da3ff', fontSize: 28, fontWeight: 'bold' },
  subtitle: { color: '#9fb0d9', marginTop: 8 }
});
