
# Rimac seguro vehicular - Johan Segura

Rimac seguro vehicular cumple todas las funcionalidades esperadas por parte de la evalucacion. Tendras la capacidad de logearte gracias a una API como usuario nuevo o usuario existente, dependiendo de tu numero de DNi y tu numero de Placa. Asimismo, puedes elegir el plan de coberturas y monto asegurado que mas se ajuste a ti. Por utimo, los datos persisten hasta las pagina de Gracias.

## API

Cree una Fake API basica alojada en Heroku para reste proyecto. Capaz de ejecutar los Metodos API rest pero no persiste los datos si deja de recibir llamadas.

API: https://my-rimac-seguro-vehicular-api.herokuapp.com/users

API-repositorio: https://github.com/yamathe5/rimac-seguro-vehicular-api

## Funcionalidades Extra

1. Si tu DNI se repite entonces la API te devolvera el nombre pero con un carro distinto
2. Si tu DNI, el numero de telefono y el numero de placa coinciden entonces te mostrara todos los datos del perfil anteriormente creado.


## Librerias o Dependencias adicionales
- React Router Dom

## Recursos Utilizados
- Sass
- Postman
- Heroku

## Division de tareas
### Se dividio el trabajo en ramas
1. Creacion de pagina, Componentes y estilos basicos
2. Agregacion de Servicios API
3. Authenticacion usuario usando React Context 
4. Añadir React Router Dom
5. Mejorar los estilos

## Levantar el proyecto
1. Debemos tener actualizado npm y node
2. Copiamos el proyeco en una carpeta
3. Entramos al proyecto
4. Corremos el comando **npm install** dentro del proyecto
5. Corremos el comando **npm start** dentro del proyecto
6. Revisamos el **localhost:3000** o el que react nos indique o el que tengamso asignado.

## Detalles del proyecto 
1. La API simula un servidor externo y tiene los metodos API REST pero al cabo de un tiempo se borra esta data y se mantiene la de repositorio de github. 
2. La indicacion nro.2 en la pagina arma-tu-plan se implemento segun lo indicado, pero el usuario aun tiene la posibilidad de marcar o desmarcar esta cobertura.
El detalle es saber si esta cobertura se encuentra desbloqueada para marcar en cualquier momento, o si solo se agrega o desagrega cuando se supera el monto asegurado a 16000

## Apreciacion del proyecto
1. El proyecto ha sido entretenido y algo retador, este proyecto me ayudo a mejorar mis habilidades usando y pasando props, render de componentes con el iterador map, en que situaciones aplicar el React Context y uso de React Router Dom, 
2. Gracias al proyecto aprendi a levantar una fake API basica, adquiri conocimientos en Postman y descubri mas funcionalidades de sass.
