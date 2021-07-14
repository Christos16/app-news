import React, { useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Text, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { Dimensions } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import tailwind from 'tailwind-rn';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;

const Login = ({navigation}) => {
const dispatch = useDispatch()
    
    const [username, setUsername] = useState("")
    const [server, setServer] = useState("")
    const [password, setPassword] = useState("")
    const [toast, setToast] = useState(false)
    

    const signIn = () => {

           
         navigation.navigate("Home")
          
       

    }



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

           
     
       <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require('../../assets/images/itelix.png')}
      />
    </View>
      <Text style={styles.label}>Server:</Text>
        <TextInput
               defaultValue={server}
          onChangeText={(server) => setServer( server )}
          placeholder={'IP:Port'}
          style={styles.input}
        />
         <Text style={styles.label}>Username:</Text>
         <TextInput
          defaultValue={username}
          onChangeText={(username) => setUsername( username )}
          placeholder={'Username'}
          style={styles.input}
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          defaultValue={password}
          onChangeText={(password) => setPassword({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <View style={styles.button}>
        <FontIcon name="sign-in-alt"/>
        <Button
          title={'Log In'}
         style={tailwind("text-black")}
          onPress={() => signIn()}
        />
        </View>

      </ScrollView>
    
        </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
   // alignItems: "center",
   marginLeft: "auto",
   marginRight: "auto",
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  imageContainer: {
 // width: "80%",
 width: width - 20,
 //height: 200,
 //height: "50%",
 display: "flex",
 marginLeft: "auto",
 marginRight: "auto"
 // alignItems: "center",
  },
  image: {
    marginLeft: "auto",
    marginRight: "auto",
      width: "40%",
    height: 150,
    textAlign: "center",
    borderRadius: 10,
//   resizeMode: 'stretch',
  //  width: width -20,
  //  height: 5'0,
  // resizeMode: ""
  },
  label: {
    marginBottom: 10,
    alignItems: "flex-end"
  },    
  input: {
    width: width - 20,
    height: 44,
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  button: {
    width: width - 20, 
    height: 44,
    backgroundColor: "lightgrey",
    color: "black",
    flexDirection: "row",
    borderRadius: 5,
display: "flex",
justifyContent: "center",
alignItems: "center"
  }
});

export default Login