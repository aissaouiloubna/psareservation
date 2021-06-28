import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {Image} from 'react-native';
import logo from '../images/logo.png';
import motif from '../images/motif.png';
import LinearGradient from 'react-native-linear-gradient';

class Loading extends Component {
  state = {
    LogoText: new Animated.Value(0),
  };

  componentDidMount() {
    const {LogoText} = this.state;

    Animated.timing(LogoText, {
      toValue: 5,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }

  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate('Username');
    }, 2000);
  }

  render() {
    return (
      <LinearGradient
        colors={['white', '#243659']}
        style={styles.container}
        start={{x: 0.6, y: 0}}
        locations={[0.7, 1]}
        end={{x: 0.2, y: 1}}>
        <View style={styles.container}>
          <Image source={logo} style={styles.logo} />

          <View style={styles.hairline} />

          <Animated.View style={{opacity: this.state.LogoText}}>
            <Text style={styles.logoText}>Booking App</Text>
          </Animated.View>

          <View style={styles.hairline} />
          <Image source={motif} style={styles.logom} />
        </View>
      </LinearGradient>
    );
  }
}
export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  logo: {
    width: 210,
    height: 90,
    marginBottom: 16,
    marginTop: '45%',
  },
  logom: {
    width: 410,
    height: 250,
    marginBottom: 16,
    position: 'absolute',
    bottom: '-2%',
  },
  logoText: {
    fontSize: 25,
    letterSpacing: 4,
    fontWeight: 'bold',
    color: '#1A2040',
    height: 50,
    paddingTop: 5,
  },

  hairline: {
    backgroundColor: '#243659',
    height: 2,
    width: 170,
    borderRadius: 5,
  },
});
