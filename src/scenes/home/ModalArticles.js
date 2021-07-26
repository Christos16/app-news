import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import SingleMessage from './SingleMessage';
import { FlatList } from 'react-native-gesture-handler';
import CardModal from './CardModal';

const styles = StyleSheet.create({
  input: {
    height: 48,
    alignItems: 'center',
    padding: 8,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
  default: {
    flex: 1,
    fontSize: 14,
    padding: 4,
    fontWeight: '400',
  },
  inputView: {
    borderWidth: 1,
    height: 32,
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
});



export default function ComposeMail(props) {

    

    const renderRow = ({item}) => {
        return <CardModal closeModal={props.onPress} item={item} category={props.selectedCategory} navigation={props.navigation}  />;
      }

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 20,
      }}
      {...props}
    >
      <View style={{
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: "lightgray",
        borderBottomWidth: 0.7,
      }}>
        <TouchableOpacity
          onPress={props.onPress}
        >
          <Ionicons name='ios-arrow-back' color='gray' size={24} />
        </TouchableOpacity>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        
        </View>
      </View>
      <FlatList data={props.articles} keyExtractor={item => item.title} renderItem={renderRow} />
    </View>
  );
}