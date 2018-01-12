import React from 'react';
import { Alert, Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default class Flowchart extends React.Component {
    render() {
    	return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Logo/>
            <Title title = 'Electronic Clinical Aid'/>
          </View>
          <Button button = 'START' onPress={this.props.next}/>
        </View>
    	);
    }
}
class Button extends React.Component{
  nextPage = () => {//Takes you to next page!
    this.props.onPress();
  }
  render(){
    return(
      <TouchableOpacity
        onPress={this.nextPage}
        style={styles.button}
        >
        <Text style={styles.buttonText}>{this.props.button}</Text>
      </TouchableOpacity>
    );
  }
}
class Logo extends React.Component {
  render(){
    return(
      <Image
        source={require('./logo.png')}
        style={styles.image}
      />
    );
  }
}
class Title extends React.Component {
  render() {
    return(
      <View style={styles.body}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {//entire screen
    	flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#3784A4',
    },

    body:{//all classes within screen
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    header:{//contains logo and title
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {//this is the title
      paddingTop: 10,
      color: 'white',
      width: 260,
      height: 150,
      fontSize: 30,
      fontWeight: 'bold',
    },
    image:{//logo
      width: 70,
      height: 70,
    },

    rule: {//not working
      borderBottomColor: 'black',
      borderBottomWidth: 100,
      marginLeft:5,
      marginRight:5,
    },


    button:{
      alignItems: 'center',
      height:50,
      width:100,
      backgroundColor:'white',
      borderRadius: 10,
    },
    buttonText:{
      color: '#191970',
      fontWeight: 'bold',
      fontSize: 30,
      paddingTop: 10,
    },



});
