import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import db from '../config'
import { Header } from 'react-native-elements';



export default class ReadStoryScreen extends React.Component {
  render(){
    return(
      <View>
      <Header
          backgroundColor={'pink'}
          centerComponent={{
            text: 'Bedtime Stories',
            style: { color: '#fff', fontSize: 30 },
          }}
        />
      <Text>Story Reading Tab</Text>
      </View>
    )
  }
}

