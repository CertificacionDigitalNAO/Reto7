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

  // Configura el servidor para servir archivos estáticos desde Swagger UI
  app.use('docs', express.static(join(__dirname, '..', 'node_modules', 'swagger-ui-dist')));

  // Inicia la aplicación en el puerto 3000
  await app.listen(3000);
}

// Llama a la función bootstrap para iniciar la aplicación
bootstrap();