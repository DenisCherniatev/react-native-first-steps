import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

import {TComponentProps, TStoreState, IStore} from '../typing';
import store, { counterSlice } from '../store';


class CounterView extends React.Component<
  IStore
> {
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.increment();
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
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: TStoreState, ownProps: TComponentProps) => {
  console.log("mapStateToProps state:", state);
  return {...state}
}

const mapDispatchToProps = (dispatch: typeof store.dispatch) => {
  return {
    increment: () => dispatch({type: "counter/increment"}),
    decrement: () => dispatch(counterSlice.actions.decrement()),  // this equals to dispatch({type: "counter/decrement"})
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