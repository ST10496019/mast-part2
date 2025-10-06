import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'DishDetails'>;

export default function DishDetailsScreen({ route }: Props) {
  const { course } = route.params || {};
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.image} />
      <Text style={styles.title}>Dish Details</Text>
      <Text style={styles.text}>Course: {course || '—'}</Text>
      <Text style={styles.text}>Description: Example dish description</Text>
      <Text style={styles.text}>Price: R99.99</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', padding: 20 },
  image: { width: 96, height: 96, borderRadius: 48, marginBottom: 10 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#A10000', marginBottom: 8 },
  text: { marginVertical: 6 },
  button: { backgroundColor: '#A10000', padding: 12, borderRadius: 10, marginTop: 20, width: '60%' },
  btnText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
});
