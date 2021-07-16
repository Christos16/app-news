import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import Button from 'components/Button';
import { colors } from 'theme';
import tailwind from 'tailwind-rn';
import { SafeAreaView } from 'react-native-safe-area-context';
import MailList from './MailList';
import { useEffect } from 'react';
import { getTopHeadlines } from '../../slices/app.slice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  }
});

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  function getAllHeadlines() {
    return dispatch => {
      //  dispatch(handleLoadState(true));

      const request = axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=ac66bc13be8b4a5bad780c4bee9da43d`
      );

      request
        .then(response => {
          dispatch(getTopHeadlines({ topHeadlines: response.data.articles }));
          // dispatch(setActiveStep())
        })
        .catch(error => {
          //dispatch(handleLoadState(false));
          console.log(error);
        });
    };
  }

  useEffect(() => {
    dispatch(getAllHeadlines());
  }, []);

  return (
    <View>
      <MailList navigation={navigation} />
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};

Home.defaultProps = {
  navigation: { navigate: () => null }
};

export default Home;
