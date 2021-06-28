import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import icone from '../images/icone.png';
import motif from '../images/motif.png';
import logotr from '../images/logotr.png';
import {Button} from 'react-native-elements';
import  './variableglobale';

class Username extends Component {

  constructor(props) {
    super(props);
    this.state = {
      TextInput_Name: '',
    };
    
  }

  Send_Data_Function = () => {
    global.name[0]=this.state.TextInput_Name
    this.props.navigation.navigate('Confirmation', {
     NameOBJ: this.state.TextInput_Name,
    });
    
  };



  render() {

   
    return (
      
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logotr} style={styles.logo} />
          <Text style={styles.textheader}> Booking App</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.contenant}>
            <Text style={styles.textfooter}>Username</Text>
            <View style={styles.actions}>
              <Image source={icone} style={styles.icone} />
              <TextInput
                placeholder="Full Name"
                style={styles.textinput}
                onChangeText={(data) => this.setState({TextInput_Name: data})}
              />
            </View>

            <View style={styles.button}>
              <Button
                onPress={this.Send_Data_Function}
                title="BOOKING"
                loading={false}
                loadingProps={{size: 'small', color: 'white'}}
                buttonStyle={{
                  height: 60,
                  width: 340,
                  backgroundColor: '#05375a',
                  borderRadius: 15,
                }}
                textStyle={{fontWeight: 'bold', fontSize: '30'}}
              />
            </View>
          </View>
          <Image source={motif} style={styles.logom} />
        </View>
      </View>
    );
  }
}

export default Username;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05375a',
  },

  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#05375a',
  },
  footer: {
    flex: 3,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    paddingVertical: 50,
  },
  textheader: {
    color: 'white',
    fontSize: 'bold',
    fontSize: 10,
    letterSpacing: 2,
  },
  textfooter: {
    color: '#05375a',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  actions: {
    flexDirection: 'row',
    marginTop: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#05375a',
  },
  textinput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
    paddingBottom: '-1%',
  },
  button: {
    alignItems: 'center',
    paddingTop: '10%',
  },
  signIn: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  logom: {
    width: 410,
    height: 200,
    marginTop: '25%',
  },
  logo: {
    width: 110,
    height: 50,
  },
  contenant: {
    paddingHorizontal: 40,
    paddingTop: '10%',
  },
});
