import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import {}from
import Hello from './src/components/Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello!NewpositibMInd!</Text>
      <Hello>World</Hello>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
