import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputText = ({ keyboardType, value, onChangeText, onBlur, placeholder, error, touched }) => {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType={keyboardType}
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholderTextColor={"gray"}
      />
      {touched && error && (
        <Text style={styles.errorText}>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    backgroundColor: "white",
    backgroundColor: "aliceblue",
    height: 50,
    borderRadius: 50,
    paddingHorizontal: 20,
  },
  errorText: {
    position: 'absolute',
    right: 10,
    top: 15,
    color: 'red',
  },
});

export default InputText;
