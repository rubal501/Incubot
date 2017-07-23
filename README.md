# Incubot

Sitio web del club de robotica de la facultad de ciencias.

## Sistema de plantillas:
Para facilitar el proceso de actualizacion y subida de contenido se ha implementado
la libreria de Javascript "Mustache" la cual junto con Jquery permiten el renderizar los elementos
de HTML y usar datos obtenidos de un archivo JSON.Cada archivo HTML esta vinculado a uno de JS el cual 
renderiza los elementos necesarios para cada parte del archivo.
EL formato de cada uno de los archivos JSON es el siguiente:

####Estructura del documento :```/data/carousel_data.json ```
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
####Estructura del documento :```data/academia_data.json```

```
{
  "ciclo":"numero de los ciclos escolares",
  "cursos":[
    {
      "nombre":"nombre de cada uno de los cursos que se van a impartit"
    },
  ]
}

```
####Estructura del documento :```data/concursoJumbotron_template.json```

```
{
	"anios": [{
		"imagenFondo": "https://lh3.googleusercontent.com/FFofsS4O3XjLckl5sDPZk9X0KunOi0vhjoDnm2mwLJEBqYOGVJ8an6EMBuISBi5fdlf82SG0LMpNJ8XQFsnYT2AdkDV8zux-OJd1gfe-129hdSqxS9G9XCyDByPRVMItQwRRLC73iLaYvEx3vQDNYSuA6JE-MY3nkf4jqMwXJ8bA1ZAa3D130AL6_ltY0IgXF3nIJjUHZ1ZWakghmXtjQ28l6ZAFypc7X4_qfgaB9z1OMjxMMMGZM9nj8Y_PldQ8pboyh8RIx7oCgQUcvTyg99xZOuRHLqu1WOXYv4RZ5T6a9-G0BrB9jwGumFWRVlRKXmwUPnQMIotNX_yJriMfvsiJl4YJLMkeQpb5ZWEgmaZ6aA8gVHDJiCH5Z2F4vm_RZPvk8ZyVREYAPUlU2wZhvrtzOXk_Xfb_l1rukSK5AlBxSj59pbVVGlckv1o8hd5t_bRxv0h84Z_kC8yW-dCSvF8ihbzI1-174B--4NDkjl5YI_BodFZ3CdKRTUcJk6QWs0unRtmjCfZTPzNa8z9eDCWDXWJcn94nmcVpUL4IdyRxUG8Q5n0_M0ig20bJceAQPyMWuhToBVuQ-ykKE3QghUKEzJgWTU53svA-ko82OBIdoSEGCfPV29rVarrWkMZxBGKIiaFmK_9snjn8kXALfpwQFMIMBvf_E32p0FeTqQ=w1118-h745-no",
		"numeroConcurso": "primer",
		"leyendaConcurso": "leyenda del concurso",
		"descripcionConcurso": "esta es una magica descripcion",
		"idModal": "primerConcurso",
		"linkFotos": "google.com",
		"categorias": [{
			"categoria": "nombre de la categoria"
		}],
		"primerosLugares": [{
			"nombrePersona": "nombre de la persona que gano",
			"nombreRobot": "nombre del robot"
		}],

		"segundosLugares": [{
			"nombrePersona": "nombre de la persona que gano",
			"nombreRobot": "nombre del robot"
		}],

		"tercerosLugares": [{
			"nombrePersona": "nombre de la persona que gano",
			"nombreRobot": "nombre del robot"
		}]
	}]
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

