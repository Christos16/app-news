import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,Image, Dimensions, ScrollView
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import tailwind from "tailwind-rn"
import ActionButton from 'react-native-action-button';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux';
import { handleOpenWebView } from '../../slices/app.slice';
import moment from "moment"
import { WebView } from 'react-native-webview';

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  root: {
  //  flex: 1,
  height: '100%',
  width: "95%",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 20,
  //flexDirection: 'column',
  //  alignItems: '',
  //  justifyContent: '',
   // backgroundColor: "whitesmoke",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    width: 22,
    zIndex: 999
  },
  image:{
    width: width - 50,
    height: 150,
    borderRadius: 20
  }
})

const Details = ({ route, navigation }) => {


  const offset = 5;
const dispatch = useDispatch()

  const { openModal } = useSelector((state) => state.app)
  const { openWebView } = useSelector(state => state.app);

console.log(openWebView, "OPEN WEB VIEW")


  const renderFOB = () => {
    return <ActionButton
      buttonColor="#00aad4"
      icon={
          <FontIcon
          name={"arrow-left"}
          color={"white"}
          style={styles.actionButtonIcon}
          size={24}
        />
      }
      offsetY={offset}
      offsetX={15}
      onPress={() => {
    navigation.navigate("Home")
      }}
    />
  }
const newModal = () => {
  return (
    <View style={tailwind("p-4 mr-5 rounded-xl radius h-auto mt-2 p-4 absolute top-0 right-0 bg-white")}>
    <View style={{flexDirection: "row", marginBottom:20}}>
<FontIcon name="eye-slash" size={15} /> 
<Text style={tailwind("ml-2")}>Mark as unread</Text>
    </View>
    <View style={{flexDirection: "row", marginBottom:20}}>
    
<FontIcon name="flag"  /> 
<Text style={tailwind("ml-2")}>Own</Text>
    </View>
        <View style={{flexDirection: "row", marginBottom:20}}>
<FontIcon name="pen"  /> 
<Text style={tailwind("ml-2")}>New Message</Text>
    </View>
        <View style={{flexDirection: "row", marginBottom:20}}>
<FontIcon name="copy"  /> 
<Text style={tailwind("ml-2")}>Copy</Text>
    </View>
        <View style={{flexDirection: "row", marginBottom:20}}>
<FontIcon name="edit"  /> 
<Text style={tailwind("ml-2")}>Edit</Text>
    </View>
        <View style={{flexDirection: "row", marginBottom:20}}>
<FontIcon name="share"  /> 
<Text style={tailwind("ml-2")}>Forward</Text>
    </View>
    <View style={{flexDirection: "row", marginBottom:20}}>
<FontIcon name="reply"  /> 
<Text style={tailwind("ml-2")}>Reply</Text>
    </View>
    <View style={{flexDirection: "row", marginBottom:20}}>
<FontIcon name="reply-all"  /> 
<Text style={tailwind("ml-2")}>Reply All</Text>
    </View>
    <View style={{flexDirection: "row", marginBottom:20}}>
<FontIcon name="exclamation-triangle"  /> 
<Text style={tailwind("ml-2")}>Error Info</Text>
    </View>

    <View style={{flexDirection: "row", marginBottom:20}}>
<FontIcon name="sign-out-alt"  /> 
<Text style={tailwind("ml-2")}>Log Out</Text>
    </View>

    </View>
  )
}


const renderWebView = () => {
  return (
    <View style={{ height: height - 150, width: width}}>
  <WebView  source={{uri: route.params.item.url}}/>
    </View>
  )
}

  return (
    <>
    <ScrollView
        
   // scrollEventThrottle={1}
  //  horizontal={true}
   // showsHorizontalScrollIndicator={false}
  >
  
  
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
   <View style={(tailwind("bg-gray-200 rounded-md p-5 "))}>
   <Text style={(tailwind("text-xl font-medium tracking-wide text-gray-600 mb-2 "))} >{route.params.item.author}</Text>
<Text style={(tailwind("text-2xl font-medium tracking-wide text-gray-800 mb-2"))} >{route.params.item.title}</Text>
  <Text style={(tailwind("text-xs text-gray-600"))}>{moment(route.params.item.publishedAt).format("LLLL")}</Text>
   </View>
   <View style={tailwind("p-5")}>
   <Image source={{
  uri:route.params.item.urlToImage,
        }}  style={styles.image}/>

        <Text style={tailwind("mt-4 text-gray-600 text-base dark:text-gray-300")}>
      {route.params.item.description}
        </Text>
        </View>
<View style={tailwind("p-5")}>
<Button backgroundColor="black" style={tailwind("p-4 text-center")} onPress={() => dispatch(handleOpenWebView({ openWebView: !openWebView }))}>
  <Text style={tailwind("text-center text-base text-white")}>Read the full article</Text>
</Button>
</View>
    </View>
    </ScrollView>
    {renderFOB(navigation)}
    {openModal && newModal()}
    {openWebView && renderWebView()}
    </>
  )
}

Details.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Details.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Details
