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

**Visión General:**
El proyecto "Sistema de Chat en Tiempo Real" tiene como objetivo proporcionar una plataforma de mensajería instantánea que permita a los usuarios conectarse y comunicarse en tiempo real. El sistema utilizará tecnologías como Node.js, Socket.io, SQL, HTML y CSS para ofrecer una experiencia de usuario fluida y eficiente.

**Objetivos del Proyecto:**


`Conexión Instantánea:`

- Permitir a los usuarios conectarse al sistema de chat de manera rápida y sin complicaciones.
- Interfaz Intuitiva:

- Ofrecer una interfaz de usuario intuitiva y atractiva, desarrollada con HTML y CSS, que garantice una experiencia de usuario positiva.
Comunicación en Tiempo Real:

- Facilitar la comunicación instantánea entre usuarios a través de la implementación de Socket.io para la transmisión de mensajes en tiempo real.
  
`Persistencia de Datos:`

- Almacenar de manera segura y eficiente los mensajes y datos de usuario en una base de datos SQL para garantizar la continuidad de las conversaciones.
Escalabilidad:

- Diseñar el sistema para ser escalable, permitiendo la gestión efectiva de un creciente número de usuarios y mensajes.
  
`Seguridad:`

- Implementar medidas de seguridad robustas para proteger la integridad de los datos y garantizar la privacidad de los usuarios.

**Beneficios Esperados:**

`Comunicación Eficiente:`

- Mejorar la eficiencia de la comunicación entre usuarios, permitiendo interacciones más rápidas y directas.
Experiencia de Usuario Mejorada:

- Proporcionar una interfaz de usuario atractiva y fácil de usar, mejorando la satisfacción del usuario.
Colaboración en Tiempo Real:

- Facilitar la colaboración en proyectos y grupos al proporcionar una plataforma de chat en tiempo real.
 
`Adaptabilidad:`

- Brindar una plataforma adaptable que pueda integrarse con futuras tecnologías y requisitos.

**Stakeholders:**
`Desarrolladores:`

- Contribuirán al desarrollo y mantenimiento del sistema.

`Usuarios Finales:`

- Utilizarán el sistema para la comunicación en tiempo real.

`Gerencia de Proyecto:`

- Supervisará el progreso y la entrega del proyecto.
  
`Operaciones:`

- Gestionarán la implementación y mantenimiento del sistema en producción.
  
**Alcance del Proyecto:**
- El alcance del proyecto incluye el diseño, desarrollo, implementación y mantenimiento del sistema de chat en tiempo real. Se abordarán los siguientes aspectos:

**Registro de usuarios y autenticación.**

- Interfaz de usuario atractiva y fácil de usar.
- Funcionalidades de chat en tiempo real utilizando Socket.io.
- Almacenamiento persistente de mensajes en una base de datos SQL.
- Implementación de medidas de seguridad para proteger la privacidad y la integridad de los datos.
  
**Restricciones y Limitaciones:**
- El proyecto se desarrollará en un marco de tiempo definido.
- Los recursos, tanto humanos como tecnológicos, estarán limitados según los requisitos del proyecto.
  
**Entregables Esperados:**

- Código fuente del sistema.
- Documentación completa del código y del sistema.
- Guías de implementación y operación.
- Interfaz de usuario funcional y atractiva.
- Sistema desplegado y en funcionamiento.



## Requerimientos

### REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES

Este proyecto consiste en el desarrollo de un aplicativo (chat) que permita el envió de datos en tiempo real, siempre y cuando se de correctamente el proceso de validación de los usuarios. 

Descripción de los requerimientos funcionales y no funcionales.

Formato de la tabla de especificación de los requerimientos:


|  Código del requerimiento     |       |
| ----------------------------- | ----- |
| Nombre del requerimiento      | 2 - 3 | 
| Descripción del requerimiento | 4 - 5 | 
| Datos de entrada              | 6 - 7 | 
| Resultados                    | 8 - 9 | 
| Prioridad                     | 8 - 9 | 



|  Código del requerimiento     |       |
| ----------------------------- | ----- |
| Nombre del requerimiento      | 2 - 3 | 
| Descripción del requerimiento | 4 - 5 | 
| Datos de entrada              | 6 - 7 | 
| Resultados                    | 8 - 9 | 
| Prioridad                     | 8 - 9 | 

|  Código del requerimiento     |       |
| ----------------------------- | ----- |
| Nombre del requerimiento      | 2 - 3 | 
| Descripción del requerimiento | 4 - 5 | 
| Datos de entrada              | 6 - 7 | 
| Resultados                    | 8 - 9 | 
| Prioridad                     | 8 - 9 | 

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



