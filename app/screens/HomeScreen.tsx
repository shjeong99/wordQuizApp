import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>홈 화면</Text>
      <Button title="세부 화면으로" onPress={() => navigation.navigate('Details')} />
    </View>
  );
};

export default HomeScreen;