import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, BackHandler} from 'react-native';
import motif from '../images/motif.png';
import logotr from '../images/logotr.png';
import {Button} from 'react-native-elements';
import './variableglobale';

class Confirmation extends Component {
  state = {
    data: '',
    name: '',
  };

  componentDidMount = () => {
    fetch(
      'http://bookdesk.eu5.net/select.php?NAME=' +
        this.props.navigation.state.params.NameOBJ,
      {
        method: 'PUT',
      },
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          data: responseJson,
          name: this.props.navigation.state.params.NameOBJ,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  exit_function = () => {
    fetch(
      'http://bookdesk.eu5.net/clear.php?NAME=' +
        this.props.navigation.state.params.NameOBJ +
        '&STATUS=EMPTY',
    ).then(BackHandler.exitApp());
  };

  render() {
    global.number[0] = this.state.data;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logotr} style={styles.logo} />
          <Text style={styles.textheader}> Booking App</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.contenant}>
            <View style={styles.desk}>
              <Text style={styles.textfooter}>Your desk </Text>
              <View style={styles.hairline} />
              <Text style={styles.textfooter2}>{this.state.data}</Text>
            </View>

            <View style={styles.button}>
              <View style={styles.button1}>
                <Button
                  onPress={() =>
                    this.props.navigation.navigate('Finale', {
                      NameOBJJ: this.props.navigation.state.params.NameOBJ,
                    })
                  }
                  title="CONFIRM"
                  loading={false}
                  loadingProps={{size: 'small', color: 'white'}}
                  buttonStyle={{
                    height: 60,
                    width: 150,
                    backgroundColor: '#05375a',
                    borderRadius: 15,
                  }}
                  textStyle={{fontWeight: 'bold', fontSize: '30'}}
                />
              </View>
              <View style={styles.button2}>
                <Button
                  onPress={this.exit_function}
                  title="CANCEL"
                  loading={false}
                  loadingProps={{size: 'small', color: 'white'}}
                  buttonStyle={{
                    height: 60,
                    width: 150,
                    backgroundColor: '#05375a',
                    borderRadius: 15,
                  }}
                  textStyle={{fontWeight: 'bold', fontSize: '30'}}
                />
              </View>
            </View>
          </View>
          <Image source={motif} style={styles.logom} />
        </View>
      </View>
    );
  }
}
export default Confirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05375a',
    alignItems: 'center',
  },

  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#05375a',
  },

  textheader: {
    color: 'white',
    fontSize: 'bold',
    fontSize: 10,
    letterSpacing: 2,
  },

  footer: {
    flex: 3,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
  },

  textfooter: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  button: {
    alignItems: 'center',
    paddingTop: '15%',
    flexDirection: 'row',
  },
  button1: {
    paddingRight: 20,
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },

  logom: {
    width: 410,
    height: 200,
    marginTop: '15%',
  },
  logo: {
    width: 110,
    height: 50,
  },
  contenant: {
    paddingHorizontal: 40,
  },

  desk: {
    alignItems: 'center',
  },
  textfooter2: {
    color: '#B04900',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingTop: 30,
  },
  hairline: {
    backgroundColor: '#243659',
    height: 2,
    width: 100,
    borderRadius: 5,
    marginTop: 10,
  },
});
