const fs = require('fs');
let sucursales = {
    bd: './data/theaters.json',
    titulo: "------------------------------------------------NUESTRAS SALAS---------------------------------------",
    leerJSON: function() {
        let teatrosJson = fs.readFileSync(this.bd, 'utf-8');
        let teatros= JSON.parse(teatrosJson);
        return teatros
    },
    cantidad: function() {
        return this.leerJSON().total_theaters;
    

    },
    listarTeatros: function() {
        let todoTeatros = this.leerJSON();
        let teatros = [] 
        todoTeatros.theaters.forEach(function(teatro) {
        teatros.push(teatro)
        teatros.sort()
        
       })
       return teatros 
       }}
      module.exports = sucursales

        