import React from 'react'
import { StyleSheet, Image} from 'react-native'
import { images } from 'theme'
import tailwind from 'tailwind-rn';
import {Text, View, Dimensions, Button} from "react-native"
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height; 
const styles = StyleSheet.create({
  logo: {
    width: 32,
    height: 32,
  },
})

const reloadMessages = () => {

}

const HeaderTitle = ({messages, name}) => {

  const { topHeadlines } = useSelector((state) => state.app)
return (
<View style={tailwind('relative w-full')}>
<View>
{topHeadlines &&
<Text style={tailwind('text-2xl font-bold')}>{topHeadlines.length} articles</Text> 
}
{name &&
<Text style={tailwind(`text-2xl ${name === "iTelix" && `text-white`} font-bold`)}>{name}</Text>
}

</View>


</View>
)

}



HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}

export default HeaderTitle
