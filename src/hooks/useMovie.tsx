import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { MovieDBMovResponse, Movies } from '../interfaces/movieInterfaces';

interface MoviesState {
    nowPlaying: Movies[]
    popular:    Movies[]
    topRated:   Movies[]
    upComing:   Movies[]
}


export const useMovie = () => {

    const [isLoading, setIsLoading] = useState(true)

    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular:    [],
        topRated:   [],
        upComing:   []
    })

    const getMovies = async () => {

        const nowPlayingPromise = movieDB.get<MovieDBMovResponse>('/now_playing');
        const popularPromise    = movieDB.get<MovieDBMovResponse>('/popular');
        const topRatedPromise   = movieDB.get<MovieDBMovResponse>('/top_rated');
        const upComingPromise   = movieDB.get<MovieDBMovResponse>('/upcoming');

        const response = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upComingPromise
        ])

        setMoviesState({
            nowPlaying: response[0].data.results,
            popular:    response[1].data.results,
            topRated:   response[2].data.results,
            upComing:   response[3].data.results,
        })
        
        setIsLoading(false);
    }


    useEffect(() => {
        //now_playing
        getMovies();
    }, [])


    return {
        ...moviesState,
        isLoading
    }

}
