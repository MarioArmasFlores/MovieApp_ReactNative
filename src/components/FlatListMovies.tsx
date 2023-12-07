import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { MoviePoster } from './MoviePoster'
import { Movies } from '../interfaces/movieInterfaces';



interface Props {
    title?: string;
    movies: Movies[];
}




export const FlatListMovies = ({title, movies}: Props) => {
    return (
        <View style={{ height: ( title ) ? 200 : 220  }}>
          { title &&   <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft:5 }}>{title}</Text>}
            <FlatList
                data={movies}
                renderItem={({ item }: any) => (
                    <MoviePoster movie={item} width={200} height={140} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}


            />
        </View>
    )
}
