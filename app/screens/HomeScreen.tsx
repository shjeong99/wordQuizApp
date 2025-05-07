import { View, Text } from 'react-native';
import { Button } from '@ui-kitten/components';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../navigation/MainNavigator'

// navigation의 타입
type HomeScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <Text>홈 화면</Text>

      <Button onPress={() => navigation.navigate('Details')}>세부 화면으로</Button>
    </View>
  );
};

export default HomeScreen;