import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './docs/swagger.config';

/**
 * Función principal para iniciar la aplicación NestJS.
 * 
 * @async
 * @function bootstrap
 * @returns {Promise<void>} Una promesa que se resuelve cuando la aplicación ha iniciado.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configura Swagger para la documentación de la API
  setupSwagger(app);

  // Inicia la aplicación en el puerto 3000
  await app.listen(3000);
}

// Llama a la función bootstrap para iniciar la aplicación
bootstrap();