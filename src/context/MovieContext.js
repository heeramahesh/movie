import {createContext,useEffect,useState} from 'react'
import axios from 'axios'
export  const MovieContext= createContext();
 const MovieApp=({children})=>{
const API=process.env.REACT_APP_API_KEY
const [mov ,setMovies]=useState([])
const [search,setSearch]=useState('')
const [moveDet,detailMovie]=useState('')

const fetchMovies=async(searchValue)=>{
    try{
    const response=await axios(`https://www.omdbapi.com/?apikey=${API}&s=${searchValue}`)
    const res=response.data
    setMovies(res.Search)

    }
    catch(err){
        return err.message
    }

}

const selectedDetails=async(id)=>{

    try{
        const res= await axios(`https://www.omdbapi.com/?apikey=${API}&i=${id}`)
        detailMovie(res.data)
    }
    catch(e){
        return e.message
    }
}
useEffect(()=>{
    
fetchMovies(search)

},[search])
    return (
        <MovieContext.Provider
        value={{
            mov,
            setSearch,
            moveDet,
            selectedDetails
        }}
        >
            {children}
        </MovieContext.Provider>
    )
}
export default MovieApp