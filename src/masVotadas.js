const fs = require('fs')
let masVotadas= {
    bd: './data/movies.json',
    titulo: "---------------------------------------------------MAS VOTADAS!-----------------------------------",
    leerJSON: function() {
        let moviesJson = fs.readFileSync(this.bd, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies
    },
    cantidad: function() {
         peliculas = this.leerJSON()
         masVotadas = peliculas.movies.filter(function(movie){
        return movie.vote_average>=7;
        })
        return masVotadas.length;
     },
    listarPelis: function() {
        peliculas = this.leerJSON()
         masVotadas = peliculas.movies.filter(function(movie){
        return movie.vote_average>=7;
        })
        return masVotadas;
        
        
    }
}
module.exports = masVotadas;