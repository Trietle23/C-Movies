import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import MovieDetailScreen from './screens/MovieDetailScreen';
import SearchScreen from './screens/SearchScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Trang Chủ' }} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} options={{ title: 'Phim Theo Danh Mục' }} />
        <Stack.Screen name="MovieDetail" component={MovieDetailScreen} options={{ title: 'Chi Tiết Phim' }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Tìm Kiếm Phim' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
