import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Dish } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export default function WelcomeScreen({ navigation }: Props) {
  const [dishes, setDishes] = useState<Dish[]>([]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Christoffel's Menu Manager</Text>

      <FlatList
        data={dishes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.dishName}>{item.name}</Text>
            <Text style={styles.course}>{item.course}</Text>
            <Text style={styles.price}>R{item.price}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No Dishes Yet</Text>}
        style={{ width: '100%' }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddDish', { dishes, setDishes })}
      >
        <Text style={styles.btnText}>Add New Dish</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondary]}
        onPress={() => navigation.navigate('TotalCost', { dishes })}
      >
        <Text style={styles.btnText}>View Total</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, alignItems: 'center' },
  logo: { width: 96, height: 96, marginTop: 20, marginBottom: 8 },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#A10000',
    textAlign: 'center',
    marginBottom: 15,
  },
  card: {
    borderWidth: 1,
    borderColor: '#A10000',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    width: '100%',
  },
  dishName: { fontSize: 18, fontWeight: 'bold', color: '#A10000' },
  course: { color: '#555' },
  price: { fontWeight: 'bold', color: '#000' },
  empty: { textAlign: 'center', color: '#999', marginVertical: 20 },
  button: {
    backgroundColor: '#A10000',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    width: '100%',
  },
  secondary: { backgroundColor: '#A10000' },
  btnText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});
