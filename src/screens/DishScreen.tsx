import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Dish'>;

export default function DishScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Course</Text>

      {['Starter', 'Main', 'Dessert'].map((course) => (
        <TouchableOpacity
          key={course}
          style={styles.button}
          onPress={() => navigation.navigate('DishDetails', { course })}
        >
          <Text style={styles.btnText}>{course}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, color: '#A10000', fontWeight: 'bold', marginBottom: 20 },
  button: { backgroundColor: '#A10000', padding: 14, borderRadius: 10, marginVertical: 8, width: 220 },
  btnText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
});
