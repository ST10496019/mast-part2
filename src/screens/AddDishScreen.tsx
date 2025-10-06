import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Dish } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'AddDish'>;

export default function AddDishScreen({ navigation, route }: Props) {
  const params = route.params as { dishes?: Dish[]; setDishes?: (d: Dish[]) => void } | undefined;
  const dishes = params?.dishes ?? [];
  const setDishes = params?.setDishes ?? (() => {});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starter');
  const [price, setPrice] = useState('');

  const addDish = () => {
    if (!name.trim() || !description.trim() || !price.trim()) {
      Alert.alert('Validation', 'Please fill all fields');
      return;
    }
    const parsed = parseFloat(price);
    if (isNaN(parsed) || parsed <= 0) {
      Alert.alert('Validation', 'Enter a valid positive price');
      return;
    }
    const newDish: Dish = { name: name.trim(), description: description.trim(), course, price: parsed };
    setDishes([...dishes, newDish]);
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
      <Text style={styles.title}>Add Dish</Text>

      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <View style={{ width: '100%', marginBottom: 10 }}>
        <Text style={styles.label}>Course</Text>
        <Picker
          selectedValue={course}
          onValueChange={(value) => setCourse(value)}
          style={styles.picker}
        >
          <Picker.Item label="Starter" value="Starter" />
          <Picker.Item label="Main" value="Main" />
          <Picker.Item label="Dessert" value="Dessert" />
        </Picker>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Price (e.g. 99.99)"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={addDish}>
        <Text style={styles.btnText}>Save Dish</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#A10000', marginBottom: 12 },
  input: {
    borderColor: '#A10000',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  textArea: { height: 80 },
  picker: { width: '100%' },
  label: { fontWeight: '600', marginBottom: 6 },
  button: { backgroundColor: '#A10000', padding: 14, borderRadius: 10, marginTop: 8, width: '100%' },
  btnText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});
