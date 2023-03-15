import React,{ useEffect, useState } from 'react'
import Axios from 'axios';
export default function Home() {
    const imgpath = "https://image.tmdb.org/t/p/w500";
const[movieContainer,setMovieContainer]=useState([]);

let category = "now_playing";

async function getMovies(){
let {data}= await Axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=b7ed3ef8d2fddd67928ca17512db61f4`)
setMovieContainer(data.results)
}
console.log(movieContainer);
useEffect(()=>{

    getMovies();
    setMovieContainer()
},[])
  return (
    <div>
    
    </div>
  )
}
