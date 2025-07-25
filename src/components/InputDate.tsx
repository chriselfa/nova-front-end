import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View, Text } from "react-native";

interface InputDateProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder: string;
  error?: string;
  touched?: boolean;
}

const InputDate: React.FC<InputDateProps> = ({
  value,
  onChange,
  placeholder,
  error,
  touched,
}) => {
  return (
    <View>
      <DateTimePicker
        value={value || new Date()}
        mode="date"
        onChange={(event, selectedDate) => {
          onChange(selectedDate || null);
        }}
      />
      {touched && error ? <Text style={{ color: "red" }}>{error}</Text> : null}
    </View>
  );
};

export default InputDate;
