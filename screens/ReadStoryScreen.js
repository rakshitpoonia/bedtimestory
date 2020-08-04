import * as React from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';
import { Header } from 'react-native-elements';

export default class ReadScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <Header
          backgroundColor={'pink'}
          centerComponent={{
            text: 'Bedtime Stories',
            style: { color: '#fff', fontSize: 30 },
          }}
        />
        <Text>Welcome to Story Reading Tab</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  }
});