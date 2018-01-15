import React, { Component } from 'react';
import { 
    AppRegistry,
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

class SplashScreen extends Component{
    render(){
        return (
             <View style = {styles.stylish}>
                   <Image 
                    style={styles.container}
                    source={require('./assets/Logo-ITATS.png')}
                    />
                    <Text style={styles.title}>Welcome</Text>
                    <Text style={styles.subtitle}>Powered By ITATS Oye</Text>
                 </View>
                  
                );
            }
        }
export default SplashScreen;

const styles = StyleSheet.create({
    container: {width:300, height:370},
    title: {color: '#000000',fontSize: 35, fontWeight: 'bold'},
    subtitle: {color: '#000000',fontSize: 20, fontWeight: '200'},
    stylish: {backgroundColor: '#ffdab9', justifyContent:'center',flex:1, alignItems: 'center'}
});

