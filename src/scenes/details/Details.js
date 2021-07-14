import React, { useEffect } from 'react'
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
import { handleModal } from '../../slices/app.slice';

const { width } = Dimensions.get("window");

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

  const dispatch = useDispatch()



  const from = route;
  const offset = 25;
  console.log(from.params)

  const { openModal } = useSelector((state) => state.app)

  console.log(openModal, "OPen Modal")

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
   <Text style={(tailwind("text-xl font-medium tracking-wide text-gray-600 mb-2 "))} >TradeWinds</Text>
<Text style={(tailwind("text-2xl font-medium tracking-wide text-gray-800 mb-2"))} >Dailys News Update for the month of August. Important</Text>
  <Text style={(tailwind("text-xs text-gray-600"))}>Tue, 30 Aug 2016 10:00</Text>
   </View>
   <View style={tailwind("p-5")}>
   <Image source={{
  uri:"https://images.unsplash.com/photo-1598194501777-edbff942e501?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        }}  style={styles.image}/>

        <Text style={tailwind("mt-4 text-gray-600 text-base dark:text-gray-300")}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.
        </Text>
        </View>


    </View>
    </ScrollView>
    {renderFOB(navigation)}
    {openModal && newModal()}
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
