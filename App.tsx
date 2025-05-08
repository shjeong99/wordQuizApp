// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './app/navigation/MainNavigator';
import AuthNavigator from './app/navigation/AuthNavigatior';

//ui-kitten
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default function App() {
  const isLoggedIn = false; // 로그인 상태에 따라 스택 분기

  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        {/* {isLoggedIn ? <AuthNavigator /> : <MainNavigator />} */}
        {isLoggedIn ? <MainNavigator /> : <MainNavigator />}
      </NavigationContainer>
    </ApplicationProvider>
    </>
  );
}