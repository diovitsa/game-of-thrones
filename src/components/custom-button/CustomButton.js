import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';


export const CustomButton = ({ title = 'Enter', style = {}, textStyle = {}, onPress, disabled }) => {

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}
                      style={[styles.button, style, disabled ? styles.disabled : null]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 5,

    backgroundColor: '#2AC062',
    shadowColor: '#2AC062',
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
  },

  text: {
    fontSize: 14,
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
  disabled: {
    backgroundColor: '#D3D3D3',
    shadowColor: '#D3D3D3',
  }
});