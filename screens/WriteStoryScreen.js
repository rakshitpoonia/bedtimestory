import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert,KeyboardAvoidingView,ToastAndroid} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config'
  
export default class WriteStoryScreen extends React.Component{
  constructor(){
    super();
    this.state = {
        title: '',
        author: '',
        storyText: '',
    }
}

submitStory = ()=>{
  db.collection("stories").add({
      Title: this.state.title,
      Author: this.state.author,
      storyText: this.state.storyText,
      
  })
  this.setState({
      title: '',
      author: '',
      storyText: ''
  })
  //ToastAndroid.show('Your story has been sumitted',ToastAndroid.SHORT)
}
  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      
      <Header
          backgroundColor={'pink'}
          centerComponent={{
            text: 'Bedtime Stories',
            style: { color: '#fff', fontSize: 30 },
          }}
        />

        <TextInput
        placeholder="Story Title"
        onChangeText= {(text)=>{
          this.setState({
              title: text
          })
      }}
        value={this.state.title}
        style={styles.title}
        />
        <TextInput
          placeholder="Author"
          onChangeText= {(text)=>{
            this.setState({
                author: text
            })
        }}
        value={this.state.author}
        style={styles.author}
        />
        <TextInput
          style={styles.inputBox}
          multiline={true}
          placeholder="Write your story here"
          onChangeText= {(text)=>{
            this.setState({
                storyText: text
            })
        }}
        value={this.state.storyText}
        />

        <TouchableOpacity
        style={styles.submitButton}
        onPress={this.submitStory}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      
      </KeyboardAvoidingView>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputBox: {
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
    height: 400,
    alignText:'left',
    borderWidth: 4,
    outline: 'none',
  },
  title:{
    height: 40,
    borderWidth: 2,
    marginTop: 40,
    margin: 10,
    color:'black',
    padding: 6,
  },
  author: {
    height: 40,
    borderWidth: 2,
    margin: 10,
     padding: 6,
  },
  storyText: {
    height: 250,
    borderWidth: 2,
    margin: 10, 
    padding: 6,
  },
  submitButton:{
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'pink',
    width: 80,
    height: 40,
    color:'black',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    color:'black',
  }
});