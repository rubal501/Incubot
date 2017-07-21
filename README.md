# Incubot

Sitio web del club de robotica de la facultad de ciencias.

## Sistema de plantillas:
#### index.html
Para facilitar el proceso de actualizacion y subida de contenido se ha implementado
la libreria de Javascript "Mustache" la cual junto con Jquery permiten el renderizar los elementos
de HTML y usar datos obtenidos de un archivo JSON.
EL formato de cada uno de los archivos JSON es el siguiente:

Estructura del documento :```/data/carousel_data.json ```
```
{
  "srcActive": "Ruta de la primera imagen",
  "altActive": "texto alternativo de a primera imagen",
  "tituloActivo": "Sexto concurso de robotica",
  "subtituloActivo": "realizado el 18 de mayo del 2017",
 
```

la esctructura de los elementos del array se repiten
```
  "elements": [{
    "srcImg": "ruta de la imagen",
    "altImg": "segundaImagen",
    "titulo": "titulo especial",
    "subtitulo": "subtitylo especual"
    },
  ]
}
```

## Construido con:

* [Bootstrap4](https://v4-alpha.getbootstrap.com/) - El framework para el frontend.
* [Dreamweaver](http://www.adobe.com/mx/products/dreamweaver.html) - IDE.
* [WebStorm](http://www.adobe.com/mx/products/dreamweaver.html) - IDE.
* [Jquery](https://jquery.com/) - Libreria de JavaScript.
* [Mustache](https://mustache.github.io/) - Libreria de JavaScript para templates.

## Autores:

* **Roberto Rubalcava** - *Trabajo inicial* - [rubal501](https://github.com/rubal501)
## Agradecimientos a:

* [Donají Xochitl Cruz López](https://sites.google.com/a/ciencias.unam.mx/lab-electricidad---electromagnetismo/personal/donaji)
* [Fernando Angeles Uribe](http://www.astroscu.unam.mx/IA/index.php?option=com_content&view=article&id=493&Itemid=46&lang=es)
* [Universidad Nacional Autonoma de Mexico](https://www.unam.mx/)

