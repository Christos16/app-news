import React from 'react'
import PropTypes from 'prop-types'
import { View, SafeAreaView, Text } from 'react-native'

import { DrawerActions } from '@react-navigation/native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'
import tailwind from 'tailwind-rn';
import { useDispatch } from 'react-redux';
import { handleSearch } from '../../../slices/app.slice';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import axios from "axios"

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
   // marginLeft: 20,
    fontWeight: "bold",
    fontSize: 12
   // alignItems: 'center',
  },
  category: {
    flexDirection: "row", marginBottom:10, fontWeight: "bold", backgroundColor: "black",
    paddingTop: 10, paddingBottom: 10, 
  }
}



const DrawerMenu = (props) => {

  const dispatch = useDispatch()


  function handleSearchByCategory(value) {
    return (dispatch) => {
      console.log(value)
      //  dispatch(handleLoadState(true));
      const request = axios.get(`
      https://newsapi.org/v2/top-headlines?country=us&category=${value}&apiKey=ac66bc13be8b4a5bad780c4bee9da43d`)
      request
        .then((response) => {
        
          dispatch(searchByText({ topHeadlines: response.data.articles }))
          // dispatch(setActiveStep())
        })
        .catch((error) => {
          //dispatch(handleLoadState(false));
          console.log(error, "ERROR");
        });
    };
   }

  const handleSelect = (value) =>  {
    dispatch(handleSearch(value))
    dispatch(handleSearchByCategory(value))
   
    props.navigation.dispatch(DrawerActions.closeDrawer())
    
  }


  return (

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
    <Text style={tailwind("text-xl mb-2 ml-2 font-bold  tracking-widest")}>Search by category:</Text>
    <View style={tailwind("font-bold  rounded-xl radius h-auto mt-2 bg-white")}>
    <TouchableOpacity style={styles.category}   onPress={() => {
         handleSelect("Business")
        }}>
<FontIcon name="briefcase" style={tailwind("text-xl ml-2 text-white")} size={15} /> 
<Text style={tailwind("ml-2 text-xl font-bold text-white")}>Business</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.category}   onPress={() => {
         handleSelect("Technology")
        }}>
    
<FontIcon name="microship" style={tailwind("text-xl  ml-2 text-white")} /> 
<Text style={tailwind("ml-2 font-bold text-white text-xl")}>Technology</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.category}   onPress={() => {
         handleSelect("Politics")
        }}>
<FontIcon name="landmark" style={tailwind("text-xl  ml-2 text-white")} /> 
<Text style={tailwind("ml-2 font-bold text-white text-xl")}>Politics</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.category}   onPress={() => {
         handleSelect("Sports")
        }}>
<FontIcon name="futbol" style={tailwind("text-xl  ml-2 text-white")} /> 
<Text style={tailwind("ml-2 font-bold text-white text-xl")}>Sports</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.category}   onPress={() => {
         handleSelect("Europe Markets")
        }}>
<FontIcon name="global-europe" style={tailwind("text-xl  ml-2 text-white")} /> 
<Text style={tailwind("ml-2 font-bold text-white text-xl")}>Europe Markets</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.category}   onPress={() => {
         handleSelect("Us markets")
        }}>
<FontIcon name="flag-usa" style={tailwind("text-xl  ml-2 text-white")} /> 
<Text style={tailwind("ml-2 font-bold text-white text-xl")}>Us Markets</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.category}   onPress={() => {
         handleSelect("Asia Markets")
        }}>
<FontIcon name="global-asia" style={tailwind("text-xl  ml-2 text-white")} /> 
<Text style={tailwind("ml-2 font-bold text-white text-xl")}>Asia Markets</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.category}   onPress={() => {
         handleSelect("Energy")
        }}>
<FontIcon name="solar-panel" style={tailwind("text-xl  ml-2 text-white")} /> 
<Text style={tailwind("ml-2 font-bold text-white text-xl")}>Energy</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.category}   onPress={() => {
         handleSelect("Economy")
        }}>
<FontIcon name="chart-line" style={tailwind("text-xl  ml-2 text-white")} /> 
<Text style={tailwind("ml-2 font-bold text-white text-xl")}>Economy</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.category}   onPress={() => {
         handleSelect("Cryptocurrency")
        }}>
<FontIcon name="bitcoin" style={tailwind("text-xl  ml-2 text-white")}  /> 
<Text style={tailwind("ml-2 font-bold text-white text-xl")}>Cryptocurrency</Text>
    </TouchableOpacity>


    </View>
    </View>
  </SafeAreaView>

  )
}

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
