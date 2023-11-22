<!-- Recursos Utilizados 
 
    - BADGES => https://shields.io/badges 
    - EMOJIS => https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md 
    - DOCUMENTAR => https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax 

-->

<p align="center">
  <a href="https://github.com/GermanBejarano/ChatProject">
    <!-- <img width="160px" src="https://i.imgur.com/JIyBtKW.png"><br/> -->
    <img width="160px" src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"><br/>
  </a>
  <h2 align="center">Proyecto Chat
</h2>
</p>


<p align="center">
  <a href="https://www.npmjs.com/"><img src="https://img.shields.io/badge/npm-v9.2.0-blue" alt="NPM downloads"></a>
  <a href="https://nodejs.org/en"><img src="https://img.shields.io/badge/nodejs-v16.19.0-green" alt="Node js"></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/react js-v17.0.1-orange" alt="React"></a>
</p>

- - - 

##### *Asignatura*: Diplomado de seguridad en devOps
##### *Carrera*: Ingenieria de Sistemas

- - -
<p align="right">
  <a href="https://www.npmjs.com/"><img src="https://img.shields.io/badge/STATUS-EN DESARROLLO-green" alt="NPM downloads"></a>
</p>


## Índice

* [Introducción](#Introducción)
* [Descripción del proyecto](#descripción-del-proyecto)
* [Requerimientos](#requerimientos)
* [Diagramas](#Diagramas)
* [Funcionalidades](#Funcionalidades)
* [Ejecución](#Ejecución)
* [Dockerización](#Dockerización)
* [Manuales](#Manuales)



## Introducción

## Descripción del proyecto

Este proyecto consiste en el desarrollo de un aplicativo (chat) que permita el envió de datos en tiempo real, siempre y cuando se de correctamente el proceso de validación de los usuarios. 

## Requerimientos

### Requerimientos Funcionales y No Funcionales

Descripción de los requerimientos funcionales y no funcionales.

Formato de la tabla de especificación de los requerimientos:


|  Código del requerimiento     |       |
| ----------------------------- | ----- |
| Nombre del requerimiento      |       | 
| Descripción del requerimiento |       | 
| Datos de entrada              |       | 
| Resultados                    |       |  
| Prioridad                     |       |  

#### Código del requerimiento:

Cada requerimiento debe tener una identificación, el nombre puede ser alfanumérico y se requiere que inicie con las letras en mayúscula RF o RNF que hace referencia a requerimientos funcionales y no funcionales. Seguidos de un número, ejemplo 01 o 1.

#### Nombre del requerimiento: 

Se da con el fin de identificar el requerimiento de forma resumida, por el nombre se da a entender a que hace referencia.

#### Descripción del requerimiento: 

Sspecifica directamente que se quiere lograr con este requerimiento, es una breve explicación de su funcionalidad.

#### Datos de entrada: 

Se explica que tipos de datos se requiere para el buen uso del sistema.


#### Datos de salida: 

Hace referencia al resultado que se obtiene al ingresar los datos y poner en funcionamiento el sistema.
Prioridad: describe su nivel de importancia. Alta, media  o baja.


### Requerimientos Funcionales

| Código del requerimiento      | RF-01                                                                                |
| ----------------------------- | -----                                                                                |
| Nombre del requerimiento      | Registro de usuarios                                                                 | 
| Descripción del requerimiento | El usuario deberá diligenciar un formulario, el cual contiene datos personales como: |
------------------------------- | nombre, correo electrónico, teléfono, contraseña (este dato debe ser escrito 2 veces,|
------------------------------- | para su comprobación), cuando ya se haya diligenciado el formulario se envia y se    |
------------------------------- | realizan validaciones en el servidor de base de datos donde se confirma que el       |
------------------------------- | usuario no existe y que los datos son válidos, de esta forma se puede registrar.     |
------------------------------- | Del mismo modo, se generan notificaciones en caso de que algún dato sea erroneo.     |
| Datos de entrada              | nombre, correo electrónico, teléfono, contraseña                                     | 
| Resultados                    | Registro de usuario exitoso                                                          | 
| Prioridad                     | Alta                                                                                 | 


| Código del requerimiento      | RF-02                                                                                |
| ----------------------------- | -----                                                                                |
| Nombre del requerimiento      | Modificación de usuario                                                              | 
| Descripción del requerimiento | El usuario podrá modificar los datos registrados con anterioridad, siempre y cuando  |
------------------------------- | se validen los datos en la base de datos, se deben ingresar datos como datos         |
------------------------------- | personales como: nombre, correo electrónico, teléfono, contraseña (este dato debe    |
------------------------------- | ser escrito 2 veces, para su comprobación).                                          |
| Datos de entrada              | nombre, correo electrónico, teléfono, contraseña                                     | 
| Resultados                    | Usuario modificado exitosamente                                                      | 
| Prioridad                     | Baja                                                                                 | 


| Código del requerimiento      | RF-04                                                                                |
| ----------------------------- | -----                                                                                |
| Nombre del requerimiento      | Ingreso de usuarios                                                                  | 
| Descripción del requerimiento | Los usuarios ya registrados y autenticados podrán ingresar a la interfaz de usuarios |
------------------------------- | resgistrados y autenticados.                                                         |
| Datos de entrada              | datos de usuarios                                                                    | 
| Resultados                    | Se mostrará la interfaz de usuarios registrados                                      | 
| Prioridad                     | media                                                                                |


| Código del requerimiento      | RF-05                                                                                |
| ----------------------------- | -----                                                                                |
| Nombre del requerimiento      | Ingreso automático de usuarios                                                       | 
| Descripción del requerimiento | Los usuarios ya registrados y autenticados podrán guardar sus datos, para que el     |  
------------------------------- | siguiente inicio de sesión lo pueda hacer de forma automatica solo registrando la    |
------------------------------- | opción guardar datos de inicio.                                                      |
| Datos de entrada              | usuario, contraseña                                                                  | 
| Resultados                    | Se ingresa automaticamente                                                           | 
| Prioridad                     | media                                                                                |


| Código del requerimiento      | RF-06                                                                                |
| ----------------------------- | -----                                                                                |
| Nombre del requerimiento      | Selección de usuarios                                                                | 
| Descripción del requerimiento | Los usuarios ya registrados y autenticados podrán verificar los datos de los otros   |
------------------------------- | usuarios, seleccionarlos para poder enviar un mensaje.                               |
| Datos de entrada              | selección de usuarios                                                                | 
| Resultados                    | Dirige el usuario a la interfaz de envio de mensajes                                 | 
| Prioridad                     | Media                                                                                | 


| Código del requerimiento      | RF-07                                                                                |
| ----------------------------- | -----                                                                                |
| Nombre del requerimiento      | Enviar mensajes                                                                      | 
| Descripción del requerimiento | Los usuarios ya registrados y autenticados podrán escribir y enviar mensajes de      |
------------------------------- | texto, los cuales pueden incluir letras, números y símbolos.                         |
| Datos de entrada              | números, letras, simbolos                                                            | 
| Resultados                    | El mensaje se enviará al usuario seleccionado                                        | 
| Prioridad                     | Alta                                                                                 | 


| Código del requerimiento      | RF-08                                                                                |
| ----------------------------- | -----                                                                                |
| Nombre del requerimiento      | Recibir mensajes                                                                     | 
| Descripción del requerimiento | Los usuarios ya registrados y autenticados podrán recibir los mensajes enviados por  |
------------------------------- | otros usuarios registrados y autenticados.                                           |
| Datos de entrada              | N/A                                                                                  | 
| Resultados                    | visualiza los mensajes que ha recibido                                               | 
| Prioridad                     | Alta                                                                                 | 


| Código del requerimiento      | RF-09                                                                                |
| ----------------------------- | -----                                                                                |
| Nombre del requerimiento      | Cierre de sesión                                                                     | 
| Descripción del requerimiento | Los usuarios ya registrados y autenticados podrán cerrar la sesión cuando ya no      |
------------------------------- | hagan uso del chat.                                                                  |
| Datos de entrada              | N/A                                                                                  | 
| Resultados                    | cerró sesión exitosamente                                                            | 
| Prioridad                     | Alta                                                                                 | 


### Requerimientos No Funcionales

RNF-01 Validar estado de los usuarios
RNF-02 Cantidad de texto permitido
RNF-03 Generar alertas (pendiente)
RNF-04 disponibilidad 24/7
RNF-05 Interfaz amigable 
RNF-06 Compatibilidad (Chrome, firefox)
RNF-07 manual de usuario
RNF-08 Manual técnico



## Diagramas:
-Estos son los diagramas que representan la arquitectura y el flujo de datos del sistema.

`Diagrama de Arquitectura:`
Este diagrama muestra la estructura general del sistema, incluyendo los componentes principales y cómo se comunican entre sí.

El Cliente Web se conecta al Servidor Node.js a través de HTTP para la carga inicial de la página.
Una vez cargada la página, se establece una conexión bidireccional persistente a través de Socket.io para permitir la comunicación en tiempo real entre el cliente y el servidor.
El Servidor Node.js gestiona la lógica del chat y comunica los mensajes entre los clientes conectados.
La Base de Datos almacena la información del chat, como mensajes y usuarios.


<pre>
<code>

+-----------------+            +-----------------------+            +-------------------+
|                 |            |                       |            |                   |
|   Cliente Web   +<---------->+   Servidor Node.js   +<---------->+   Base de Datos    |
|                 |   HTTP     |   con Socket.io       |   DB       |    (MongoDB)      |
+-----------------+            +-----------------------+            +-------------------+
            |                               |
            +-------------------------------+
                        Socket.io
                                                
</code>
</pre>


`Diagrama de Flujo:`

Este diagrama muestra el flujo de acciones y eventos en el sistema, desde la carga inicial de la página hasta el intercambio de mensajes en tiempo real.

El Cliente Web carga la página, establece una conexión WebSocket con el Servidor Node.js a través de Socket.io.
Cuando un usuario envía un mensaje, el cliente lo envía al servidor.
El Servidor Node.js recibe el mensaje y lo retransmite a todos los clientes conectados.
La Base de Datos puede ser consultada para almacenar o recuperar mensajes.


<pre>
<code>

+---------------------+
|      Inicio         |
+---------------------+
         |
         v
+---------------------+
|  Usuario Conectado  |
|    al Chat          |
+---------------------+
         |
         v
+---------------------+
|   Cliente HTML/CSS  |
|     (Interfaz)      |
+---------------------+
         |
         v
+---------------------+
|   Evento de Chat    |
|   (Escribir/Mandar) |
+---------------------+
         |
         v
+---------------------+
|  Cliente con Socket  |
|    (Envía al         |
|    Servidor)         |
+---------------------+
         |
         v
+---------------------+
|     Servidor        |
|   Node.js con        |
|   Socket.io          |
+---------------------+
         |
         v
+---------------------+
| Gestionar Mensajes  |
|   y Usuarios        |
+---------------------+
         |
         v
+---------------------+
|     Base de Datos   |
|                     |
+---------------------+
         |
         v
+---------------------+
|  Actualizar Estado  |
|   del Chat en Todos |
+---------------------+
         |
         v
+---------------------+
|  Actualizar Interfaz|
|   para Todos        |
+---------------------+
         |
         v
+---------------------+
|  Fin del Proceso    |
+---------------------+


</pre>
</code>


                            
`Diagrama de Secuencia:`

Muestra la interacción entre los diferentes componentes del sistema en secuencia temporal, desde el envío de un mensaje por parte del cliente hasta su almacenamiento en la base de datos y la transmisión a otros clientes.

<pre>
<code>

+----------------------+        +---------------------+        +---------------------+       +----------------------+
|        Usuario       |        | Cliente HTML/CSS   |        |   Cliente con        |       |       Servidor       |
|                      |        | (Interfaz)          |        |      Socket         |       | (Node.js con Socket.io)|
+----------------------+        +---------------------+        +---------------------+       +----------------------+
         |                               |                                |                                |
         |                               |                                |                                |
         |                               |                                |                                |
         |                               |                                |                                |
         +-------- "Conexión al Chat" ---->|                              |                                |
         |                               |                                |                                |
         |                               |                                |                                |
         |                               |                                |                                |
         +-------- "Interacción en la    |                                |                                |
         |           Interfaz"           |                                |                                |
         |                               |                                |                                |
         |                               |                                |                                |
         |                               +--- "Envío de Mensaje" -------> |                                |
         |                               |                                |                                |
         |                               |                                |                                |
         |                               +--- "Recepción de Mensaje" ---->|                                |
         |                               |                                |                                |
         |                               |                                |                                |
         |                               +--- "Almacenar en Base de Datos"----->|                          |
         |                               |                                |                                |
         |                               |                                |                                |
         |                               |                                |                                |
         |                               |                                |                                |
         |                               |                                |                                |
         |                               |                                |                                |
         |                               |                                |                                |
         |                               |                                |                                |
         |                               |                                |                                |
         |                               |                                |                                |
         |                               |                                |                                |
         |                               |                                |                                |
         |                               |                                |                                |
         |                               |                                |                                |
         |                               |                                |                                |
         |                               |                                |                                |
         |                               |                                |                                |
         |                               |                                |                                |
         +----- "Actualización en Tiempo |                                |                                |
                |  Real de la Interfaz"  |                                |                                |
                |                        |                                |                                |
                +<--- "Actualización de  |                                |                                |
                                         |  la Interfaz para Todos"       |                                |
                                         |                                |                                |
                                         +<--- "Actualización de Estado   |                                |
                                         |   del Chat para Todos"         |                                |
                                         |                                |                                |
                                         +-------------------------------->|                               |
                                         |                                |                                |
                                         |                                +<--- "Envío a Cliente" ---------|
                                         |                                |                                |
                                         |                                +<--- "Envío a Cliente" ---------|
                                         |                                |                                |
                                         |                                +<--- "Envío a Cliente" ---------|
                                         |                                |                                |
                                         |                                +<--- "Envío a Cliente" ---------|
                                         |                                |                                |
                                         +<--- "Fin del Proceso" ---------|                                |
                          



</code>
</pre>


## :hammer:Funcionalidades del proyecto

- `Funcionalidad 1`: Registrar usuarios en plataforma
- `Funcionalidad 2`: Ingresar usuarios a plataforma
- `Funcionalidad 3`: Chatear en tiempo real con usuarios



## :medal_sports:Ejecución del proyecto

- `Frontend`:
  - Ejecutarl el comando `npm run install` para instalar las dependencias.
  - Ejecutar el comando `npm run start` para lanzar la aplicación.
  
- `Backend`:
  - Ejecutarl el comando `npm run install` para instalar las dependencias.
  - Ejecutar el comando `npm run dev` para ejecutar el servicio en modo desarrollador o en su defecto correr el comando `npm run start` si se lanzara en producción.
  


> [!IMPORTANT]
> Para que ejecute la aplicacion sin problema hay que tener en cuenta las versiones de los lenguajes y frameworks utilizados



