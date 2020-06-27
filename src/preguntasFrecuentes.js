const fs = require ('fs');
let preguntasFrecuentes = {
    bd:'./data/faqs.json',
    titulo:"------------------------------------------------PREGUNTAS FRECUENTES-------------------------------------------",
    
    leerJSON: function(){
    let preguntasJson = fs.readFileSync(this.bd,'utf-8');
    let preguntas = JSON.parse(preguntasJson)
    return preguntas;

    },
    cantidad:function(){
    return this.leerJSON().total_faqs;
    
    },
     listarPreguntas : function(){
         let preg = this.leerJSON()
         let cuestionario2 = []
         preg.faqs.forEach(function(cuestionario3){
         cuestionario2.push(cuestionario3)
         })
        return cuestionario2
        }}
        module.exports = preguntasFrecuentes

    