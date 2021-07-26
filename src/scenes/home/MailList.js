import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, ScrollView, Dimensions, Animated, Modal, SafeAreaView
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import SingleMessage from './SingleMessage';
import { FlatList } from 'react-native-gesture-handler';
import ModalArticles from './ModalArticles';
import ActionButton from 'react-native-action-button';
import tailwind from 'tailwind-rn';
import Carousel from 'react-native-snap-carousel';
import {useDispatch, useSelector} from "react-redux";
import { getTopHeadlines } from '../../slices/app.slice';

const { width } = Dimensions.get("window");
import axios from "axios";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    width: 22
    
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const dataSource= [1, 2, 3, 4, 5, 6, 7, 8]



  


const iconColor = "#ededed"

  



  

const MailList = ({ navigation }) => {
    const offset = 10
    const { topHeadlines } = useSelector((state) => state.app)
    const [modal, setModal] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState("Business")
  const [activeIndex, setIndex] = useState(0)
  const dispatch = useDispatch()

   const carouselItems = [
    {
        title:"Business",
        text: "Text 1",
    },
    {
        title:"Technology",
        text: "Text 2",
    },
    {
        title:"Politics",
        text: "Text 3",
    },
    {
        title:"Sports",
        text: "Text 4",
    },
    {
        title:"Finance",
        text: "Text 5",
    },
  ]

  const renderItem = ({item, index}) => {

  

    function handleSearchByCategory(category) {
      
      setSelectedCategory(category)
     return (dispatch) => {
       //  dispatch(handleLoadState(true));
       const request = axios.get(
         `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=ac66bc13be8b4a5bad780c4bee9da43d`,
       );
   
       request
         .then((response) => {
  // console.log(respose, "RESPONSE")
           dispatch(getTopHeadlines({ topHeadlines: response.data.articles }))
           // dispatch(setActiveStep())
         })
         .catch((error) => {
           //dispatch(handleLoadState(false));
           console.log(error, "ERROR");
         });
     };
   }



 
      return (
        <Button onPress={() => dispatch(handleSearchByCategory(item.title))} style={{
            backgroundColor: selectedCategory === item.title ? 'black' : "lightblue",
            borderRadius: 25,
           // height: 80,
       // height: 50,
        textAlign:"center",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",        
            padding: 5,
           // marginLeft: 5,
            marginRight: 5, 
            }}>
          <Text style={{fontSize: 20, color: 'white',   textAlign:"center",
marginLeft: "auto", marginRight: "auto"   }}>{item.title}</Text>
        </Button>
      )
  
  }

    const renderFOB = () => {
        return <ActionButton
          buttonColor="#00aad4"
          icon={
              <FontIcon
              name={"edit"}
              color={"white"}
              style={styles.actionButtonIcon}
              size={24}
            />
          }
          offsetY={offset}
          offsetX={10}
          onPress={() => {
            setModal(true);
          }}
        />
      }

      const renderRow = ({item}) => {
    
        return <SingleMessage item={item} category={selectedCategory} navigation={navigation}  />;
      }

      const renderModal = () => {
        return  <Modal
            animationType={'slide'}
            transparent={false}
            visible={modal}
            onRequestClose={() => {
            }}
          >
            <ModalArticles navigation={navigation} articles={topHeadlines} onPress={() => setModal(false)} />
          </Modal>
      }

    
      const renderCategoryArticles = () => {
        return (
          <SafeAreaView style={tailwind("text-center")}>
          <View style={{  flexDirection:'row', justifyContent: 'center', textAlign: "center" }}>
             <SingleMessage categoryArticle={true} navigation={navigation} item={topHeadlines[0]} />
          </View>
        </SafeAreaView>
        )
      }

      

    return (
        <ScrollView>
          <View style={{width: width - 20, backgroundColor: "whitesmoke", borderRadius: 20,padding: 20, marginLeft: "auto", marginRight: "auto", marginTop: 20}}>
        <Text style={tailwind("text-3xl mb-2 font-bold  tracking-widest")}>Browse</Text>
        <SafeAreaView style={tailwind("text-center ")}>
            <View style={{  flexDirection:'row', justifyContent: 'center', textAlign: "center",  }}>
    
                <Carousel
                  layout={"default"}
             //    ref={ref => thiscarousel = ref}
                  data={carouselItems}
                  sliderWidth={120 }
                  itemWidth={130}
                  itemHeight={20}
                  renderItem={renderItem}
                  onSnapToItem = { index => setIndex(index) } />
            </View>
          </SafeAreaView>
          </View>

          {selectedCategory && 
          <>
                    <View style={tailwind("flex-row justify-between p-4")}>
            <Text style={tailwind("text-2xl  font-bold tracking-widest")}>{selectedCategory}</Text>

<Button backgroundColor="black" color="white" style={tailwind("text-white rounded text-base flex-col h-8 bg-black-500 font-bold items-center")} title="See all" onPress={() => setModal(true)}></Button>
</View>

{renderCategoryArticles()}

</>
          }
        

          <View style={tailwind("flex-row justify-between p-4 mt-8")}>
          <Text style={tailwind("text-2xl  font-bold tracking-widest")}>TRENDING</Text>

          <Button backgroundColor="black" color="white" style={tailwind("text-white rounded text-base flex-col h-8 bg-black-500 font-bold items-center")} title="See all"  onPress={() => setModal(true)}></Button>
          </View>
          {/*  <FlatList data={topHeadlines} keyExtractor={item => item.title} renderItem={renderRow}

 />*/}
   
    <SafeAreaView style={tailwind("text-center")}>
            <View style={{  flexDirection:'row', justifyContent: 'center', textAlign: "center" }}>
    
                <Carousel
                  layout={"default"}
             //    ref={ref => thiscarousel = ref}
                  data={topHeadlines}
                  sliderWidth={200 }
                  itemWidth={250}
                  itemHeight={120}
                  renderItem={renderRow}
                  onSnapToItem = { index => setIndex(index) } />
            </View>
          </SafeAreaView>

   
    {/*renderFOB()*/}
 
    {renderModal()}
        </ScrollView>
    
      );

}


MailList.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

MailList.defaultProps = {
  navigation: { navigate: () => null },
}

export default MailList
