//Import needed libraries
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

//Create Component
class Header extends Component {

  render(){
    return (
      <View style={styles.header}>
        <Text style={styles.text}>Todo App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#efefef',
      height: 80,
      alignItems: 'center', //Horizontal Alignment
      justifyContent: 'center', //Vertical Alignments
    },
    text: {
      fontSize: 15,
      fontWeight: 'bold'
    }
});

//Export the component to be aviable for other components in the apps
export default Header;
