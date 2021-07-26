import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
    StyleSheet, Text, View, Image,ScrollView, Dimensions
  } from 'react-native'
import tailwind from "tailwind-rn";
import PropTypes from 'prop-types'
import moment from "moment"

const CardModal = ({ navigation, item, category, closeModal }) => {
   
    
    const goToArticle = () => {

            navigation.setParams({ title: "View Message"});
            navigation.navigate('Details', { from: 'Home', item: item, name: item && item.source && item.source.name} )
                
    closeModal()  
    }
    

    return (
<TouchableOpacity onPress={() => {
    goToArticle()}}
   >
  <View style={tailwind("p-2")}>
 
    <View style={tailwind("w-full max-w-full flex")}>
    
   
      <View style={tailwind("border-r flex-row border-b border-l border-gray-400  border-t border-gray-400 bg-white rounded p-4 justify-between leading-normal")}>
      <View style={tailwind(" w-1/2 mx-auto relative")}>
          <Image style={tailwind("rounded-3xl w-11/12 h-40 ml-auto mr-auto shadow-lg")} source={{uri:  item.urlToImage}} alt=""/>
      </View>
      <View style={tailwind(" w-1/2 mx-auto relative")}>
        <View style={tailwind("mb-8")}>
          <View style={tailwind("text-sm text-gray-600 flex items-center")}>
           
       <Text>{item && item.source && item.source.name}</Text>     
          </View>
          <Text style={tailwind("text-gray-900 font-bold text-xl mb-2")}>Best Mountain Trails 2020</Text>
          <Text style={tailwind("text-gray-700 text-base")}>{item.title}</Text>
        </View>
        <View style={tailwind("flex items-center")}>     
        {/* <Image style={tailwind("w-10 h-10 rounded-full mr-4")} source={{uri:  item.urlToImage}} alt=""/>
*/}
          <View style={tailwind("text-sm")}>
            <Text style={tailwind("text-gray-900 leading-none")}>{item.author}</Text>
            <Text style={tailwind("text-gray-600")}>{moment(item.publishedAt).format("LLLL")}</Text>
          </View>
        </View>
      </View>
      </View>
</View>
</View>
</TouchableOpacity>
    )
}
CardModal.propTypes = {
    navigation: PropTypes.shape({ navigate: PropTypes.func }),
  }
  
  CardModal.defaultProps = {
    navigation: { navigate: () => null },
  }

  
export default CardModal