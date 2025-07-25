import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface FormFieldProps {
  label: string;
  icon: string;
  component: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({ label, icon, component }) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Icon name={icon} size={20} color="#021024" />
        <Text style={styles.label}>{label}</Text>
      </View>
      {component}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#021024",
    marginLeft: 8,
  },
});

export default FormField;
