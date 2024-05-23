# Inicializando el backend

### Requisitos
Para el correcto funcionamiento del Backend debemos tener instalado NodeJs, y además tener instalado y corriendo el servicio de mysql.

Para NodeJs podemos descargarlo desde su pagina oficial https://nodejs.org/es para luego instalarlo.

En el caso de mysql podemos descarlgo de https://dev.mysql.com/downloads/ 


### Instalando los paquetes
Para instalar todos los paquetes necesarios, primero debemos posicionarnos en la raíz del proyecto y ejecutar el siguiente comando:

```sh
npm i 
```

### Configurando las variables de entorno

Debemos setear los valores de las variables de entorno, para eso creamos un archivo .env en la raíz del proyecto y completamos las propiedades con los valores que correspondan, siguiendo de ejemplo el archivo .env_example.


### Levantar el servicio de Backend

Para que el backend entre en funcionamiento debemos ejecutar el siguiente comando ubicados en la raíz del proyecto:

```sh
npm start
```
Esto levantara el servidor express y en caso de no existir tanto la DB como algunas de las tablas, las creará automáticamente.

### Para la entrega 24/5
En este caso contamos con la entidad "Establecimiento" para realizar el CRUD. El mismo ya cuenta con persistencia en DB.

Las rutas actualmente funcionales son:
```sh
GET *host*/establecimientos
Devuelve el listado completo de establecimientos.

GET *host*/establecimientos/:id
Devuelve el establecimiento coincidente con el id.

POST *host*/establecimientos
Requiere que se envíe en el cuerpo los valores para las claves 'nombre', 'direccion' y 'telefono'. Inserta un registro en la tabla Establecimientos.

POST *host*/establecimientos/:id
Requiere que se envíe en el cuerpo los valores para las claves 'nombre', 'direccion' y 'telefono'. Actualiza un registro en la tabla Establecimientos que coincida con el id proporcionado.

POST *host*/establecimientos/:i/habilitar
Cambia a 1 el estado del campo habilitado de un registro de la tabla Establecimientos que coincida con el id proporcionado.

POST *host*/establecimientos/1/deshabilitar
Cambia a 0 el estado del campo habilitado de un registro de la tabla Establecimientos que coincida con el id proporcionado.
```