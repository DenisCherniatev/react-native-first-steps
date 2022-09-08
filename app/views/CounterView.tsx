import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import {ComponentProps, ComponentState} from '../typing';

export class CounterView extends React.Component<
  ComponentProps,
  ComponentState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.setState({counter: 1});
  }

  handleClick() {
    this.setState({counter: this.state.counter + 1});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>{this.state.counter}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={this.handleClick} style={styles.button}>
            <Text style={styles.buttonText}>Click Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 48,
  },
  counterContainer: {
    width: "100%",
    alignItems: "center",
  },
  counterText: {
    fontSize: 72,
    fontWeight: "500",
    color: "#000000",
  },
  buttonsContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 32,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: "#005ce6",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
  },
});