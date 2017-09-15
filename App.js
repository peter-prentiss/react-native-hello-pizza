import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.title}>Hello Pizza 🍕</Text>
          <Text style={styles.text}>Translate your text directly into Pizza!</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={styles.output}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.text}>Created by Peter Prentiss</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    padding: 10,
    backgroundColor : 'rgb(144, 218, 255)',
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: 50,
    fontFamily: 'Futura',
    marginTop: 40,
    color: 'rgb(255, 234, 45)'
  },
  text: {
    color: 'white',
    fontSize: 18
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#d6d7da',
    marginTop: 150,
    backgroundColor: 'white'
  },
  output: {
    padding: 10,
    fontSize: 42
  },
  footer: {
    backgroundColor : 'rgb(144, 218, 255)',
    height: '100%',
    marginLeft: 125,
    paddingTop: 375
  }
})
