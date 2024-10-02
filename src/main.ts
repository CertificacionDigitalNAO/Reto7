import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './docs/swagger.config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as express from 'express';

/**
 * Función principal para iniciar la aplicación NestJS.
 * 
 * @async
 * @function bootstrap
 * @returns {Promise<void>} Una promesa que se resuelve cuando la aplicación ha iniciado.
 */
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configura Swagger para la documentación de la API
  setupSwagger(app);

  // Configura el servidor para servir archivos estáticos
  // app.use('/docs', express.static(join(__dirname, '..', 'node_modules', 'swagger-ui-dist')));

  // Inicia la aplicación en el puerto 3000 o en el puerto definido en la variable de entorno PORT
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0'); // Escucha en todas las interfaces de red

  // Obtén la URL base de la aplicación
  const baseUrl = `http://localhost:${port}`;

  // Muestra la URL completa de la documentación de Swagger
  console.log(`Application is running on: ${baseUrl}`);
  console.log(`Swagger UI is available at: ${baseUrl}/docs`);
}

// Llama a la función bootstrap para iniciar la aplicación
bootstrap();