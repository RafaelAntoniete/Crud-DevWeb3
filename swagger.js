const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Employee API',
      version: '1.0.0',
      description: 'API para gerenciamento de funcionários',
      contact: {
        name: 'Rafael Antoniete',
      },
      servers: [
        {
          url: 'https://crud-devweb3.onrender.com',
          description: 'Servidor da API',
        },
      ],
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };
