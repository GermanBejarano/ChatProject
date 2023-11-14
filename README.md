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
* [Diagramas](#Diagramas)
* [Funcionalidades](#Funcionalidades)
* [Ejecución](#Ejecución)
* [Dockerización](#Dockerización)

## :Diagramas.
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


8
+----------------------+         +----------------------+
|                      |  Mensaje|                      |
|   Cliente HTML/CSS   +-------->+   Servidor Node.js   |
|                      |         |                      |
+----------------------+         +----------------------+
                                |         |
                                |  Socket |
                                |  IO     |
                                |         |
                                +---------+
                                      |
                                      v
                            +----------------------+
                            |                      |
                            |        BD            |
                            |                      |
                            +----------------------+


                            
`Diagrama de Secuencia:`

Muestra la interacción entre los diferentes componentes del sistema en secuencia temporal, desde el envío de un mensaje por parte del cliente hasta su almacenamiento en la base de datos y la transmisión a otros clientes.


         +-------------------------+
         |                         |
         |                         |
         V                         |
+------------------+      +---------------------+      +------------------+
|   Cliente Web    |      | Node.js (Socket.io) |      |   Base de Datos  |
+--------+---------+      +---------------------+      +------------------+
         |                         |                           |
         v                         v                           |
+------------------+      +---------------------+              |
|  Enviar Mensaje  |      | Manejar Conexiones  |              |
|     a Socket.io  |      |   y Mensajes con    |              |
+--------+---------+      |   Socket.io         |              |
         |                +---------------------+              |
         v                        |                            |
+------------------+              |                            |
|  Recibir Mensaje |              |                            |
|   de Socket.io   |              |                            |
+------------------+              |                            |
                                  |                            |
                                  | Guardar Mensaje en DB      |
                                  | y Actualizar Interfaz      |
                                  +----------------------------+


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



