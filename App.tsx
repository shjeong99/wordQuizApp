// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './app/navigation/MainNavigator';
import AuthNavigator from './app/navigation/AuthNavigatior';

//nativeBase 사용
import { NativeBaseProvider, extendTheme } from 'native-base';

// 테마 설정
const theme = extendTheme({
  config: {
    initialColorMode: 'light', // 기본값 'light' 또는 'dark'
    useSystemColorMode: false, // true로 하면 시스템 다크모드 감지
  },
});

export default function App() {
  const isLoggedIn = false; // 로그인 상태에 따라 스택 분기

  return (
    <>
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        {/* {isLoggedIn ? <AuthNavigator /> : <MainNavigator />} */}
        {isLoggedIn ? <MainNavigator /> : <MainNavigator />}
      </NavigationContainer>
    </NativeBaseProvider>
    </>
  );
}