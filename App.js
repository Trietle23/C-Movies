import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import MovieDetailScreen from './screens/MovieDetailScreen';
import SearchScreen from './screens/SearchScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Màn hình Đăng nhập, Đăng ký và Quên mật khẩu */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Đăng Nhập' }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Đăng Ký' }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Quên Mật Khẩu' }} />
        
        {/* Các màn hình chính */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Trang Chủ' }} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} options={{ title: 'Phim Theo Danh Mục' }} />
        <Stack.Screen name="MovieDetail" component={MovieDetailScreen} options={{ title: 'Chi Tiết Phim' }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Tìm Kiếm Phim' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
