import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.button}>
          <Text>{this.props.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
};

Button.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  button: {
    padding: 5,
    margin: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDEDED'
  },
});
