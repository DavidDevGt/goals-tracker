# Goals Tracker

Goals Tracker es una aplicación web para gestionar tareas y objetivos, desarrollada con React para el frontend y Node.js con Express para el backend. Esta aplicación permite a los usuarios añadir, eliminar y gestionar sus tareas y objetivos de manera eficiente.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Uso](#uso)
- [Orquestación con Docker](#orquestación-con-docker)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Características

- Crear, editar y eliminar objetivos o metas
- Crear, editar y eliminar tareas
- Gestión de tareas y objetivos con una interfaz amigable
- Middleware para autorización por clave de API en el backend

## Tecnologías

### Frontend

- React
- Redux
- Bootstrap
- React-Bootstrap
- React-Datepicker

### Backend

- Node.js
- Express
- Winston (para logging)
- Celebrate (para validaciones)

## Estructura del Proyecto

```plaintext
.
├── client
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── app
│       │   └── store.js
│       ├── components
│       │   ├── Goal.js
│       │   ├── GoalForm.js
│       │   ├── GoalList.js
│       │   ├── Navbar.js
│       │   ├── Task.js
│       │   ├── TaskForm.js
│       │   └── TaskList.js
│       ├── features
│       │   ├── goals
│       │   │   └── goalsSlice.js
│       │   └── tasks
│       │       └── tasksSlice.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── reportWebVitals.js
│       ├── setupTests.js
│       └── styles
│           ├── Goal.css
│           └── GoalForm.css
└── server
    ├── combined.log
    ├── error.log
    ├── index.js
    ├── package-lock.json
    ├── package.json
    └── src
        ├── config
        │   └── logger.js
        ├── controllers
        │   ├── goalController.js
        │   └── taskController.js
        ├── index.js
        ├── middleware
        │   └── apiKey.js
        ├── models
        │   ├── goalModel.js
        │   └── taskModel.js
        ├── routes
        │   ├── goalRoutes.js
        │   └── taskRoutes.js
        ├── services
        │   ├── goalService.js
        │   └── taskService.js
        └── utils
            └── errorHandler.js
```

## Instalación

### Requisitos Previos

- Node.js y npm instalados en tu sistema

### Pasos

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/goals-tracker.git
   cd goals-tracker
   ```

2. Instala las dependencias para el frontend:
   ```bash
   cd client
   npm install
   ```

3. Instala las dependencias para el backend:
   ```bash
   cd ../server
   npm install
   ```

## Uso

### Iniciar el Frontend

1. Navega al directorio del cliente:
   ```bash
   cd client
   ```

2. Inicia la aplicación de React:
   ```bash
   npm start
   ```

### Iniciar el Backend

1. Navega al directorio del servidor:
   ```bash
   cd ../server
   ```

2. Inicia el servidor de Node.js:
   ```bash
   npm start
   ```

### Endpoints del Backend

- `/api/goals`: Endpoints para la gestión de objetivos
- `/api/tasks`: Endpoints para la gestión de tareas

## Orquestación con Docker

### Usando Docker Compose

Para construir y ejecutar la aplicación completa (servidor Node.js y base de datos MySQL) utilizando Docker Compose, sigue estos pasos:

1. Asegúrate de estar en el directorio raíz del proyecto `goals-tracker`.

2. Construye y levanta los contenedores:
   ```bash
   docker-compose up --build
   ```

Esto construirá las imágenes Docker y levantará los contenedores para el servidor y la base de datos. La aplicación estará disponible en `http://localhost:3000`.

### Archivos Docker

#### Dockerfile para el servidor Node.js (`server/Dockerfile`)

```Dockerfile
# Fase 1: Construcción
FROM node:20 as builder

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de proyecto
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "src/index.js"]
```

#### Dockerfile para la base de datos MySQL (`db/Dockerfile`)

```Dockerfile
FROM mysql:latest

# Copiar el script de inicialización
COPY db.sql /docker-entrypoint-initdb.d/

# Exponer el puerto
EXPOSE 3306
```

#### Archivo `db.sql` (dentro del directorio `db`)

```sql
CREATE DATABASE IF NOT EXISTS goal_tracker_db;
USE goal_tracker_db;

CREATE TABLE goals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    goal VARCHAR(255) NOT NULL,
    deadline DATE NOT NULL
);

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task VARCHAR(255) NOT NULL,
    deadline DATE NOT NULL
);
```

#### Archivo `docker-compose.yml`

```yaml
version: '3.8'

services:
  db:
    build: 
      context: ./db
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: goal_tracker_db
    ports:
      - "3306:3306"

  server:
    build: 
      context: ./server
    environment:
      DB_HOST: db
      DB_USER: root
      DB_PASSWORD: rootpassword
      DB_NAME: goal_tracker_db
    ports:
      - "3000:3000"
    depends_on:
      - db
```

### Forma Manual

#### Frontend

1. Instala las dependencias:
   ```bash
   cd client
   npm install
   ```

2. Inicia la aplicación de React:
   ```bash
   npm start
   ```

#### Backend

1. Instala las dependencias:
   ```bash
   cd server
   npm install
   ```

2. Configura la base de datos MySQL y ejecuta el script `db.sql` para crear las tablas necesarias.

3. Inicia el servidor de Node.js:
   ```bash
   npm start
   ```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para contribuir.

## Licencia

Este proyecto está licenciado bajo la licencia propia de DavidDevGt.