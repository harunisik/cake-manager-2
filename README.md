# Cake Manager

This is a sample node.js, express.js, mongodb and React microservices project. This uses a docker compose file for booting all applications up. Please make sure you have installed docker in your local environment before running this application.

To run this application, in the root directory;

### `docker-compose up -d`

Runs the entire app with docker compose.

### `docker-compose up -d --build`

Rebuilds the docker images when you have code changes.

## Configurations

### MongoDB

- MONGODB_USER: root
- MONGODB_PASSWORD: root

### Node & Express.js backend application

- http://localhost:8080/api/cakes

You can create, find, update and delete a cake event through this application. The data will be stored in the databases. I have implemented an MVC application in this project. It has controller, service and repository layer.

### React frontend application

- http://localhost:3000/

Please visit this link to see how the application works on the browser.
