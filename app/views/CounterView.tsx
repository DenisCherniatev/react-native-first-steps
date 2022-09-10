import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import { connect } from 'react-redux';

import {TComponentProps, TStoreState, IStore} from '../typing';
import store, { counterSlice } from '../store';


class CounterView extends React.Component<
  IStore
> {
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickAsync = this.handleClickAsync.bind(this);
  }

  handleClick() {
    this.props.increment();
  }

  handleClickAsync() {
    this.props.incrementAsync();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>{this.props.counter.storeCounter}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={this.handleClick} style={styles.button}>
            <Text style={styles.buttonText}>Click Me</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleClickAsync} style={styles.button}>
            <Text style={styles.buttonText}>Inc after 3 seconds</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const incrementAsync = () => (dispatch: typeof store.dispatch) => {
  console.log("increment after 3 sec...");
  fetch('https://example.org/').then(async (reponse) => {
    const text = await reponse.text();
    const found = text.match(/<title>([a-zA-Z0-9 ]*)<\/title>/)
    console.log(found ? found[1] : "no title found");
    console.log("increment...");
    dispatch(counterSlice.actions.increment());
  });
}

const mapStateToProps = (state: TStoreState, ownProps: TComponentProps) => {
  console.log("mapStateToProps state:", state);
  return {...state}
}

const mapDispatchToProps = (dispatch: typeof store.dispatch) => {
  return {
    increment: () => dispatch({type: "counter/increment"}),
    decrement: () => dispatch(counterSlice.actions.decrement()),  // this equals to dispatch({type: "counter/decrement"})
    incrementAsync: () => dispatch(incrementAsync()),
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterView);

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
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: "#005ce6",
    borderRadius: 10,
    marginTop: 32,
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
  },
});