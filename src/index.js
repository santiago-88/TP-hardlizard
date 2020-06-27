let homePage = require('./homePage');
let enCartelera = require ('./enCartelera');
let masVotadas = require('./masVotadas');
let sucursales = require('./sucursales');
let preguntasFrecuentes = require('./preguntasFrecuentes');
let contacto = require('./contacto')

let index={
homePage:function(res){
      res.write(homePage.titulo)+'\n\n';
      res.write('\n\n'+'TOTAL DE PELICULAS:'+ homePage.cantidad()+'\n\n')
      let titulos = homePage.listarPelis();
      for (titulo of titulos){ 
      res.write( titulo) 
      res.write('\n')
      }
      res.write(
       `------En cartelera
        ------Mas Votadas
        ------Sucursales
        ------Contacto
        ------Preguntas Frecuentes       
        `)
     
      res.end()  
   },
enCartelera:function(res){
   res.write(enCartelera.titulo)
   res.write('\n\n')
   
   res.write('TOTAL DE PELICULAS EN CARTELERA :'+enCartelera.cantidad());
   res.write('\n\n')
            
   res.write('LISTADO DE PELICULAS : \n\n')
   let peliculas = enCartelera.listarPelis();
   peliculas.forEach(function(pelicula) {
      res.write('TITULO :' +pelicula.title)
      res.write('\n\n')
      res.write('RESEÑA :'+ pelicula.overview)
      res.write('\n\n')
   }); 
   res.end()
   },
masVotadas:function(res){
      res.write('\n\n')
      res.write(masVotadas.titulo+'\n')
      res.write('\n\n')
      res.write(`TOTAL DE PELICULAS : ${masVotadas.cantidad()}            `)
      console.log(masVotadas.cantidad());
      
      res.write('\n\n')
      
       res.write( ' RATING PROMEDIO DE ESTAS PELICULAS :\n\n ')
      let ListaVotadas= masVotadas.listarPelis();
      ListaVotadas.forEach(function(pelicula){
         res.write(` --${pelicula.vote_average}--`)
         })
         let pelis = masVotadas.listarPelis();
         res.write('\n')
         res.write('\n')
         res.write ('LISTADO DE PELICULAS MAS VOTADAS:')
         for(peli of pelis){
         res.write(`         
Titulo: ${peli.title}
Rating: ${peli.vote_average}
                  
Reseña: ${peli.overview}
               `)
                    }  
res.end()
   },
     preguntasFrecuentes:function(res){
     res.write(`  
      ${preguntasFrecuentes.titulo}
     
      TOTAL DE PREGUNTAS : ${preguntasFrecuentes.cantidad()}     
       
      ` )
      let cuestionario = preguntasFrecuentes.listarPreguntas();
     cuestionario.forEach(function(varia){

     res.write(`
***** ${varia.faq_title}
------${varia.faq_answer}    
     ` )



   })

   res.end()
   
   },
   contacto:function(res){
   
      res.write(`${contacto.titulo()}\n\n`)
      

      res.write( `${contacto.info()} `) 
      res.end()   
                     
   },
   sucursales:function(res){
      res.write('\n\n')
      res.write(sucursales.titulo +'\n')
      res.write('\n\n')
      res.write(`TOTAL DE SALAS : ${sucursales.cantidad()}           
      
      `)
      console.log(sucursales.cantidad());
       res.write( 'LISTADO DE SALAS :' )
      let listateatros = sucursales.listarTeatros();
   listateatros.forEach(function(teatro){
    
  
      res.write(`
    
      
----NOMBRE: ${teatro.name}

----DIRECCIÓN:${teatro.address}
   
DESCRIPCIÓN:${teatro.description}
                                                 `
) }) 
      res.end()                  
   }
}
module.exports= index;