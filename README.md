# Goals Tracker

Goals Tracker es una aplicación web para gestionar tareas y objetivos, desarrollada con React para el frontend y Node.js con Express para el backend. Esta aplicación permite a los usuarios añadir, eliminar y gestionar sus tareas y objetivos de manera eficiente.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Uso](#uso)
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

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para contribuir.

## Licencia

Este proyecto está licenciado bajo la licencia MIT.
