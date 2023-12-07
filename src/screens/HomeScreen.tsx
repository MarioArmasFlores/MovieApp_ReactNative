import React from 'react'
import { ActivityIndicator, Dimensions, View } from 'react-native'
import { useMovie } from '../hooks/useMovie'

import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { FlatListMovies } from '../components/FlatListMovies';


const { width: windowWidth } = Dimensions.get('window');


export const HomeScreen = () => {

  const { nowPlaying, topRated, popular, upComing, isLoading } = useMovie(); //hook personalizado para traer las peliculas de la api
  const { top } = useSafeAreaInsets(); //esto puede ser util solo en Ios


  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color={"purple"} size={100} />

      </View>
    )

  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>


        {/* <MoviePoster
      movie={ moviesInTeather[2]}
      />    */}


        <View style={{ height: 440 }}>
          
          <Carousel
            data={nowPlaying!}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            itemWidth={300}
            sliderWidth={windowWidth}
          />
        </View>
        <FlatListMovies title='Popular' movies={popular} />
        <FlatListMovies title='Top Rated' movies={topRated} />
        <FlatListMovies title='Upcoming' movies={upComing} />



      </View>
    </ScrollView>
  )
}
