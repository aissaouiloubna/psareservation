{
  /* <Text>QRCODE= {this.props.navigation.state.params.NameOBJJ} </Text> */
}
import React, {Component, useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, View, BackHandler,Image,Alert} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import './variableglobale';
import motif from '../images/motif.png';
import LinearGradient from 'react-native-linear-gradient';
const Finale = () => {
  const scanner = useRef(null);
  const [scan, setScan] = useState(true);
  const [result, setResult] = useState(null);

  useEffect(() => {
    setResult(null);
  }, []);

  const onSuccess = (e) => {
    setResult(e);
    if (
      e.rawData.localeCompare(
        '43f68747470733a2f2f7777772e696e766573746f70656469 612e636f6d2f7465726d732f712f717569636b2d726573706f 6e73652d71722d636f64652e6173700ec11ec11ec11ec11ec 11ec11ec11ec11ec11ec11ec',
      ) == 1
    ) {
      fetch(
        'http://bookdesk.eu5.net/clear.php?NAME=' +
          global.name +
          '&STATUS=OCCUPIED',
      );
    } 
    else {
      alert('Qr Not Matching')
    }
    setScan(false);
  };

  return !scan ? (
    <LinearGradient
      colors={['white', '#243659']}
      style={styles.container}
      start={{x: 0.6, y: 0}}
      locations={[0.7, 1]}
      end={{x: 0.2, y: 1}}>
      <View style={styles.container}>
        <Text style={styles.textfooter}>DESK NUMBER</Text>
        <View style={styles.hairline} />
        <Text style={styles.textfooter2}>{global.number}</Text>
      
        <Image source={motif} style={styles.logom} />
      </View>
    </LinearGradient>
  ) : (
    <QRCodeScanner onRead={onSuccess} showMarker={true} style={styles.qr} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  logom: {
    width: 410,
    height: 250,
    marginBottom: 16,
    position: 'absolute',
    bottom: '-2%',
  },
  textfooter2: {
    color: '#B04900',
    alignSelf:'center',
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingTop: 20,
  },
  textfooter: {
    marginTop:'50%',
   alignSelf:'center',
    color: '#05375a',
    fontSize: 35,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  hairline: {
    backgroundColor: '#243659',
    alignSelf:'center',
    marginTop:20,
    height: 2,
    width: 200,
    borderRadius: 5,
  },
});

export default Finale;
