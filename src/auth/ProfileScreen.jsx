import {useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

function ProfileScreen(props) {
  console.log(props);
  useEffect(() => {
    console.log('Hii');
  }, []);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>This is Profile Screen</Text>
      <Button title="User" onPress={() => props.navigation.navigate('User')} />
    </View>
  );
}
const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textStyle: {
    fontSize: 28,
    color: 'black',
  },
  headingStyle: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});
export default ProfileScreen;




<View style={{marginTop: 20}}>
<Text style={{fontSize: 20, color: 'black', marginBottom: 10}}>
  Don't have Account
</Text>
<Button
  // color="#140014"
  mode="elevated"
  onPress={() => {
    navigation.navigate('Registar');
  }}>
  Register Here
</Button>
</View>