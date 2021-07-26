import React from 'react'
import { StyleSheet, Image} from 'react-native'
import { images } from 'theme'
import tailwind from 'tailwind-rn';
import {Text, View, Dimensions} from "react-native"
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import Button from '../../../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { handleOpenWebView } from '../../../slices/app.slice';



const HeaderTitle = ({messages, name}) => {

  const dispatch = useDispatch()

  const { topHeadlines } = useSelector((state) => state.app)
  const { openWebView } = useSelector(state => state.app);

return (
<View style={tailwind('relative w-full')}>
<View>
{topHeadlines && !name &&
<Text style={tailwind('text-2xl font-bold')}>{topHeadlines.length} articles</Text> 
}
{name && !openWebView && 
<Text style={tailwind(`text-2xl ${name === "iTelix" && `text-white`} font-bold`)}>{name} article</Text>
}

{openWebView &&
<Button backgroundColor="black" onPress={() => dispatch(handleOpenWebView({ openWebView: !openWebView }))}>
  <Text style={tailwind("text-white")}>Close Modal</Text>
  </Button>
}

</View>


</View>
)

}



HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}

export default HeaderTitle
