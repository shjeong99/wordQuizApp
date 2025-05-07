// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './app/navigation/MainNavigator';
import AuthNavigator from './app/navigation/AuthNavigatior';

export default function App() {
  const isLoggedIn = false; // 로그인 상태에 따라 스택 분기

  return (
    <NavigationContainer>
      {/* {isLoggedIn ? <AuthNavigator /> : <MainNavigator />} */}
      {isLoggedIn ? <MainNavigator /> : <MainNavigator />}
    </NavigationContainer>
  );
}