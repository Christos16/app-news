import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import tailwind from 'tailwind-rn';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useDispatch, useSelector} from "react-redux";
import { handleModal } from '../../../slices/app.slice';
import { Button } from 'native-base';

const styles = StyleSheet.create({
  button: {
    paddingLeft: 15,
  },
})

const HeaderRight = ({ navigation, name }) => {
    const dispatch = useDispatch()

    const { openModal } = useSelector((state) => state.app)
   

    return (
 
<>

  {name ? <Button  onPress={() =>   dispatch(handleModal({ openModal: !openModal }))}  style={tailwind("rounded bg-gray-400 p-2 w-8 flex  items-center text-center mr-2 mb-2 h-8")}>
  
  <FontIcon 

                  name="ellipsis-v"
                  color={"white"}
                  size={15}
                  solid
                />
                   
                </Button> : <View style={tailwind("rounded bg-gray-700 p-2 w-8 flex  items-center text-center mr-2 mb-2 h-8")}>
  <FontIcon
                  name="search"
                  color={"white"}
                  size={15}
                  solid
                />
                </View>}

                </>

)

}
HeaderRight.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func,
  }),
}

HeaderRight.defaultProps = {
  navigation: { openDrawer: () => null },
}

export default HeaderRight
