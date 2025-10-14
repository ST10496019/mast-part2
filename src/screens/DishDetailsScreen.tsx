import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useDishes } from '../contexts/DishesContext';

type Props = NativeStackScreenProps<RootStackParamList, 'DishDetails'>;

export default function DishDetailsScreen({ route, navigation }: Props) {
  const params = route.params as { course?: string; dish?: { name?: string; description?: string; course?: string; price?: number | string } } | undefined;
  const dish = params?.dish;
  const course = params?.course || dish?.course;
  const { dishes } = useDishes();

  // If a course was provided but no single dish, show a list of dishes in that course
  if (!dish && course) {
    const filtered = (dishes || []).filter((d) => d.course === course);
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.image} />
        <Text style={styles.title}>{course} Dishes</Text>
        {filtered.length === 0 ? (
          <Text style={styles.text}>No dishes added for this course yet.</Text>
        ) : (
          <FlatList
            data={filtered}
            keyExtractor={(item, idx) => idx.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.card, { width: '100%' }]}
                onPress={() => navigation.navigate('DishDetails', { dish: item })}
              >
                <Text style={styles.dishName}>{item.name}</Text>
                <Text style={styles.text}>R{item.price}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    );
  }

  // Otherwise show a single dish's details
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.image} />
      <Text style={styles.title}>Dish Details</Text>
      <Text style={styles.text}>Course: {course || '—'}</Text>
      <Text style={styles.text}>Name: {dish?.name ?? 'Example Dish'}</Text>
      <Text style={styles.text}>Description: {dish?.description ?? 'Example dish description'}</Text>
      <Text style={styles.text}>Price: R{dish?.price ?? '99.99'}</Text>

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
  card: {
    borderWidth: 1,
    borderColor: '#A10000',
    borderRadius: 10,
    padding: 10,
    marginVertical: 6,
  },
  dishName: { fontSize: 18, fontWeight: 'bold', color: '#A10000' },
  button: { backgroundColor: '#A10000', padding: 12, borderRadius: 10, marginTop: 20, width: '60%' },
  btnText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
});
