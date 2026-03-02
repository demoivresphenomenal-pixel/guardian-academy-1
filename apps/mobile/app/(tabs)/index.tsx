import React from 'react';
import { StyleSheet, View } from 'react-native';
import SurveyForm from './SurveyForm';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SurveyForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
