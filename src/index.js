document.addEventListener("DOMContentLoaded",() => {
    fetchingFirstMovieData();
});

const baseUrl = "http://localhost:3000/films"
const movie=document.getElementById("films")
 
function fetchingFirstMovieData(){
    fetch(baseUrl)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
    })
}
function fetchingFirstMovieData(data)
const poster = document.getElementById("poster")
const title=document.getElementById("title")
const runtime=document.getElementById("runtime")
const showtime=document.getElementById("showtime")
const description=document.getElementById("film-info")
const availableTickets=document.getElementById("ticket-num")
