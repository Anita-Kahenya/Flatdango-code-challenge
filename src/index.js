
function Movies(
    id, 
    title,
    runtime,
    capacity,
    showtime,
    tickets_sold,
    description,
    poster 
    ) {
        (this.id = id),
        (this.title = title),
        (this.runtime = runtime),
        (this.capacity = capacity),
        (this.showtime = showtime),
        (this.tickets_sold = tickets_sold),
        (this.description = description),
        (this.poster = poster)
    }

document.addEventListener("DOMContentLoaded",() => {
    allMovies()
});


// putting the fetching url into a variable
const baseUrl = "http://localhost:3000/films"



//2nd deliverable: makes a list with the menu of all movies


function allMovies(){
 fetch(baseUrl)
    .then((response) => response.json())
    .then((moviesData) => {
        //console.log(movieData)
        const films = document.getElementById("films")
        moviesData.forEach((filmData) => {
            let movieDataInfo = new Movies(
                filmData.id,
                filmData.title,
                filmData.runtime,
                filmData.capacity,
                filmData.showtime,
                filmData.tickets_sold,
                filmData.description,
                filmData.poster
            );
          //  console.log(filmData.title)
          const filmList = document.createElement("li")
          filmList.className = "film item"
          filmList.innerText = filmData.title
          films.append(filmList)

          //adding the click functionalities
          filmList.addEventListener("click", () => {
            fetchOneMovie(movieDataInfo.id);
          })
            
        })
    })
}
 



//1st deliverable
//fetching the first movie 
//this function also delivers the first bonus deliverable whereby,
//when you click on a movie in the menu it replaces the currently 
//displayed movie's details with the new movie's details. 
 


function fetchOneMovie(id){

    // baseUrl and id interpolated to make it dynamic
    fetch(`${baseUrl}/${id}`)
    .then((response)=>response.json())
    .then((movieData) =>{
        let movieDataInfo = new Movies(
            movieData.id,
            movieData.title,
            movieData.runtime,
            movieData.capacity,
            movieData.showtime,
            movieData.tickets_sold,
            movieData.description,
            movieData.poster
        );

            document.getElementById("poster").src = movieDataInfo.poster
            document.getElementById("title").innerText = movieDataInfo.title
            document.getElementById("runtime").innerText =`${movieDataInfo.runtime} minutes`
            document.getElementById("showtime").innerText = movieDataInfo.showtime
            document.getElementById("film-info").innerText = movieDataInfo.description
            document.getElementById("ticket-num").innerText = movieDataInfo.capacity - movieDataInfo.tickets_sold
            


            //3rd deliverable: reduces the remaining tickets after a click

            document.getElementById("buy-ticket").addEventListener("click", () => {
               // console.log("i was clicked")
               if ((document.getElementById("ticket-num").innerText -= 1) <= 0){
                return (document.getElementById("ticket-num").innerText = 0);
               }
            })
        })
        
    }








function fetchAllMovies(data){
    fetch("http://localhost:3000/films")
    .then(resp => resp.json())
    .then(data =>data.forEach(data => moviesList(data)))

}
function moviesList(data){
    
}