import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>LOGIN SCREEN 5</Text>

      <Button title='Ir Home' onPress={ () => navigation.replace('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',    
    alignItems: 'center',
    justifyContent: 'center',
  },
});
