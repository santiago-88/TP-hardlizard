const fs = require('fs')
let enCartelera= {
    bd: './data/movies.json',
    titulo: "-----------------------------------------EN CARTELERA!------------------------------------------",
    leerJSON: function() {
        let moviesJson = fs.readFileSync(this.bd, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies
    },
    cantidad: function() {
        return this.leerJSON().total_movies
    },
    listarPelis: function() {
        let peliculas = this.leerJSON();
        let pelis = []
        peliculas.movies.forEach(function(movie) {
            pelis.push(movie)
        })
        
        return pelis
    }
}
module.exports =enCartelera;