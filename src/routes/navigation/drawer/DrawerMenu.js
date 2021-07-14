import React from 'react'
import PropTypes from 'prop-types'
import { View, SafeAreaView, Text } from 'react-native'

import { DrawerActions } from '@react-navigation/native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'
import tailwind from 'tailwind-rn';

const styles = {
  root: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 25
   // alignItems: 'center',
  },
}

const DrawerMenu = (props) => (
  <SafeAreaView style={styles.root}>
    <View style={styles.head}>
      <FontIcon.Button
        name="times"
        size={20}
        color={colors.gray}
        backgroundColor="white"
        onPress={() => {
          props.navigation.dispatch(DrawerActions.closeDrawer())
        }}
      />
    </View>
    <View style={styles.main}>
    <View style={tailwind("font-bold  rounded-xl radius h-auto mt-2 bg-white")}>
    <View style={{flexDirection: "row", marginBottom:20, fontWeight: "bold"}}>
<FontIcon name="eye-slash" style={tailwind("text-xl font-black")} size={15} /> 
<Text style={tailwind("ml-2 text-xl font-bold")}>Mark as unread</Text>
    </View>
    <View style={{flexDirection: "row", marginBottom:20, fontSize: 20}}>
    
<FontIcon name="flag" style={tailwind("text-xl font-black")} /> 
<Text style={tailwind("ml-2 font-bold text-xl")}>Own</Text>
    </View>
        <View style={{flexDirection: "row", marginBottom:20}}>
<FontIcon name="pen" style={tailwind("text-xl font-black")} /> 
<Text style={tailwind("ml-2 font-bold text-xl")}>New Message</Text>
    </View>
        <View style={{flexDirection: "row", marginBottom:20}}>
<FontIcon name="copy" style={tailwind("text-xl font-black")} /> 
<Text style={tailwind("ml-2 font-bold text-xl")}>Copy</Text>
    </View>
        <View style={{flexDirection: "row", marginBottom:20}}>
<FontIcon name="edit" style={tailwind("text-xl font-black")} /> 
<Text style={tailwind("ml-2 font-bold text-xl")}>Edit</Text>
    </View>
        <View style={{flexDirection: "row", marginBottom:20}}>
<FontIcon name="share" style={tailwind("text-xl font-black")} /> 
<Text style={tailwind("ml-2 font-bold text-xl")}>Forward</Text>
    </View>
    <View style={{flexDirection: "row", marginBottom:20}}>
<FontIcon name="reply" style={tailwind("text-xl font-black")} /> 
<Text style={tailwind("ml-2 font-bold text-xl")}>Reply</Text>
    </View>
    <View style={{flexDirection: "row", marginBottom:20}}>
<FontIcon name="reply-all" style={tailwind("text-xl font-black")} /> 
<Text style={tailwind("ml-2 font-bold text-xl")}>Reply All</Text>
    </View>
    <View style={{flexDirection: "row", marginBottom:20}}>
<FontIcon name="exclamation-triangle" style={tailwind("text-xl font-black")}  /> 
<Text style={tailwind("ml-2 font-bold text-xl")}>Error Info</Text>
    </View>

    <View style={{flexDirection: "row", marginBottom:20}}>
<FontIcon name="sign-out-alt" style={tailwind("text-xl font-black")} /> 
<Text style={tailwind("ml-2 font-bold text-xl")}>Log Out</Text>
    </View>

    </View>
    </View>
  </SafeAreaView>
)

DrawerMenu.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
}

DrawerMenu.defaultProps = {
  navigation: {
    dispatch: () => null,
  },
}

export default DrawerMenu
