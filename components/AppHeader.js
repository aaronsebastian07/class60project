import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View >
        <Text style={styles.text}>STUDENT ATTENDANCE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  text:{
      textAlign: 'center',
    backgroundColor: 'black',
    color: 'yellow',
    fontSize: 28,
     fontWeight: 'bold'
  }
});

