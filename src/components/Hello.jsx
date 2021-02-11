import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { string } from 'prop-types'

function Hello(props) {
  const { children } = props;
  return (
    <View>
      <Text style={styles.text}>
        {`Greatfuldays! ${children}`}
      </Text>
    </View>
  );
}

Hello.prpoypes = {
  children: string.isRequired,
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});

export default Hello;
