import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useDishes } from '../contexts/DishesContext';

type Props = NativeStackScreenProps<RootStackParamList, 'TotalCost'>;

export default function TotalCostScreen(_: Props) {
  const { dishes } = useDishes();
  const total = (dishes || []).reduce((sum, d) => sum + (parseFloat(String(d.price)) || 0), 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total Cost</Text>

      <View style={styles.box}>
        <Text style={styles.costText}>R{total.toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Get</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#A10000', marginBottom: 20 },
  box: {
    width: '80%',
    height: 130,
    backgroundColor: '#A10000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  costText: { color: '#fff', fontSize: 28, fontWeight: 'bold' },
  button: { backgroundColor: '#A10000', padding: 14, borderRadius: 10, width: 120 },
  btnText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
});
