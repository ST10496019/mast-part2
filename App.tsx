import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import AddDishScreen from './src/screens/AddDishScreen';
import DishScreen from './src/screens/DishScreen';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import TotalCostScreen from './src/screens/TotalCostScreen';

export type RootStackParamList = {
  Welcome: undefined;
  AddDish: { dishes: Dish[]; setDishes: (d: Dish[]) => void } | undefined;
  Dish: undefined;
  DishDetails: { course?: string } | undefined;
  TotalCost: { dishes?: Dish[] } | undefined;
};

export type Dish = {
  name: string;
  description: string;
  course: string;
  price: number | string;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: { backgroundColor: '#A10000' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: "Christoffel's Menu Manager" }} />
        <Stack.Screen name="AddDish" component={AddDishScreen} options={{ title: 'Add Dish' }} />
        <Stack.Screen name="Dish" component={DishScreen} options={{ title: 'Dish' }} />
        <Stack.Screen name="DishDetails" component={DishDetailsScreen} options={{ title: 'Dish Details' }} />
        <Stack.Screen name="TotalCost" component={TotalCostScreen} options={{ title: 'Total Cost' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
