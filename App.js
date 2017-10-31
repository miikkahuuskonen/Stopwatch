import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Stopwatch, Timer} from 'react-native-stopwatch-timer';
import TimeFormatter from 'minutes-seconds-milliseconds';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatchStart: false,
      stopwatchReset: false,
    };
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }

  _renderTitle() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Stopwatch</Text>
      </View>
    );
  }

  _renderTimers() {
    return (
      <View style={styles.timerWrapper}>
        <View style={styles.timerWrapperInner}>
          <Text style={styles.mainTimer}>{ TimeFormatter(this.state.stopwatchStart) }</Text>
        </View>
      </View>
    );
  }

  toggleStopwatch() {
    this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
  }

  resetStopwatch() {
    this.setState({stopwatchStart: false, stopwatchReset: true});
  }

  getFormattedTime(time) {
    this.currentTime = true;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
            {this._renderTitle()}
          <Stopwatch laps msecs start={this.state.stopwatchStart}
            reset={this.state.stopwatchReset}
            style={styles.timerWrapper, {fontSize:50}}/>
        </View>
        <View style={styles.bottom}>
          <TouchableHighlight onPress={this.toggleStopwatch} style={styles.buttonWrapper}>
            <Text style={styles.button}>{!this.state.stopwatchStart ? "Start" : "Stop"}</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.resetStopwatch} style={styles.buttonWrapper}>
            <Text style={styles.button}>Reset</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const handleTimerComplete = () => alert("custom completion function");

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  header: {
    borderBottomWidth: 0.5,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#F9F9F9',
  },

  title: {
    alignSelf: 'center',
    fontWeight: '600',
  },

  timerWapper: {
    backgroundColor: '#FFFFFF',
  },

  top: {
    flex: 1,
  },

  bottom: {
    flex: 2,
    backgroundColor: '#F0EFF5',
  },

  timerWrapperInner: {
    alignSelf: 'center',
  },

  mainTimer: {
    fontSize: 60,
    fontWeight: '100',
    alignSelf: 'flex-end',
  },

  timerWrapper: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    flex: 1,
  },

  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingBottom: 30,
  },

  button: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },


});
