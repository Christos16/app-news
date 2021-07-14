import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, Image,ScrollView,TouchableOpacity, Dimensions
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import { Ionicons } from '@expo/vector-icons';
import tailwind from 'tailwind-rn';

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const iconColor = "#ededed"
const SingleMessage = ({ navigation, item, category }) => {


    return(

        <TouchableOpacity  onPress={() => {
              navigation.setParams({ title: "View Message"});
                    navigation.navigate('Message', { from: 'Home', id: "5", name: "View Message"} )
                  }}>

       
<View style={{width: width -50 , left: 0, marginRight: "auto",  marginLeft: "auto" }}>
  
  <View style={tailwind(" w-11/12 mx-auto")}>
    <View style={tailwind("bg-white flex-col  border-gray-100 ml-auto mr-auto	 rounded-3xl pl-4 pr-8 flex space-x-8")}>
      <View style={tailwind("w-full mx-auto relative")}>
          <Image style={tailwind("rounded-3xl w-11/12 h-40 ml-auto mr-auto shadow-lg")} source={{uri:  item.urlToImage}} alt=""/>
      </View>
      <View style={tailwind("flex-col w-full space-y-4 w-11/12 ml-auto mr-auto")}>
      <Text style={tailwind("text-lg t font-bold text-blue-300 mt-2 mb-2")} >{category && category.toUpperCase()}</Text>
      <View style={tailwind("flex-col justify-between items-start text-white")}>
          <Text style={tailwind("text-base font-bold text-black")}>{ item.title}</Text>
        </View>
       
         
      </View>

    </View>
  </View>
  
</View>
          </TouchableOpacity>
    
)
                }
SingleMessage.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

SingleMessage.defaultProps = {
  navigation: { navigate: () => null },
}

export default SingleMessage
