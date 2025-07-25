import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const InputDate = ({ value, onChange, placeholder, error, touched }) => {
  const [show, setShow] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || value;
    setShow(Platform.OS === 'ios');
    onChange(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <Button onPress={showDatepicker} title={value} color="" 
        style={styles.button}
        />
      {show && (
        <DateTimePicker
          value={value}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}
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
  button: {
    backgroundColor: "white",
    backgroundColor: "aliceblue",
    height: 50,
    borderRadius: 50,
    paddingHorizontal: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default InputDate;
