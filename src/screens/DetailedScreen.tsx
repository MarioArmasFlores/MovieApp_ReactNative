import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { Movies } from '../interfaces/movieInterfaces';
import { RouteStackParams } from '../navigation/Navigation';
import { Screens } from '../enum/Screens';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons";
import { useMovieDetails } from '../hooks/useMovieDetails';

interface Props extends StackScreenProps<RouteStackParams, Screens.DETAILED_SCREEN> { };

const screenHeight = Dimensions.get('screen').height;




export const DetailedScreen = ({ route }: Props) => {


  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  useMovieDetails( movie.id );

  console.log(movie.id);




  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri }}
          style={styles.posterImage}

        />
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <View style={styles.marginContainer}>
        <Icon
          name='star-outline'
          color='grey'
          size={ 20 }
        />
      </View>



    </ScrollView>

  )
}



const styles = StyleSheet.create({

  imageContainer: {

    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.10,
    shadowRadius: 16.00,
    elevation: 10,

  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subTitle: {
    fontSize: 18,
    opacity: 0.8

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }

});