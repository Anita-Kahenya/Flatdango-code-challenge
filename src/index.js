document.addEventListener("DOMContentLoaded",() => {
   // firstMovieData();
    //fetchAllMovies();
    fetchingFirstMovieData()
});

//const baseUrl = "http://localhost:3000/films/1"

 
//1st deliverable
//fetching the first movie data 
function fetchingFirstMovieData(){
   // fetch(baseUrl)
    fetch("http://localhost:3000/films/1")
    .then((response)=>response.json())
    .then(data=> firstMovieData(data))
        
    }

function firstMovieData(movieData){

const poster = document.getElementById("poster")
 poster.src=movieData.poster
const title=document.getElementById("title")
title.textContent=movieData.title
const runtime=document.getElementById("runtime")
runtime.textContent= movieData.runtime
const showtime=document.getElementById("showtime")
showtime.textContent=movieData.showtime
const description=document.getElementById("film-info")
description.textContent=movieData.description
const availableTickets=document.getElementById("ticket-num")
availableTickets.textContent= movieData.capacity-movieData.tickets_sold

}

//2nd deliverable 

function fetchAllMovies(data){
    fetch("http://localhost:3000/films")
    .then(resp => resp.json())
    .then(data =>data.forEach(data => moviesList(data)))

}
function moviesList(data){
    
}