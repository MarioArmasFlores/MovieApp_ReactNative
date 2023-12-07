import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Movies } from '../interfaces/movieInterfaces'
import { CommonActions, NavigationProp, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RouteStackParams } from '../navigation/Navigation';
import { Screens } from '../enum/Screens';



interface Props {
    movie: Movies;
    height?: number;
    width?: number;

}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    const navigation = useNavigation<NavigationProp<RouteStackParams>>();


    return (
        <TouchableOpacity
            onPress={() => navigation.dispatch(CommonActions.navigate(Screens.DETAILED_SCREEN, movie))}
            activeOpacity={0.8}
            style={{
                width,
                height,
                marginHorizontal: 5,
                paddingBottom: 20,
                paddingHorizontal:7,

            }}
        >
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}


                />
                {/* <Text>{movie.title}</Text> */}
            </View>
        </TouchableOpacity>
    )
}





const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.10,
        shadowRadius: 16.00,

        elevation: 10,
    }

});