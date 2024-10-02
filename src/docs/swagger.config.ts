import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

/**
 * Configuración de Swagger para la aplicación NestJS.
 *
 * @param {INestApplication} app - La instancia de la aplicación NestJS.
 * @returns {void}
 */
export function setupSwagger(app: INestApplication): void {
    const config = new DocumentBuilder()
        .setTitle('API RESTful para Users') // Título de la documentación de la API
        .setDescription('Reto 7: REST y HTTP para obtener y generar datos') // Descripción de la API
        .setVersion('1.0') // Versión de la API
        .addTag('DigitalNAO') // Etiqueta para agrupar las operaciones de la API
        .build();
    const document = SwaggerModule.createDocument(app, config); // Crea el documento Swagger
    SwaggerModule.setup('docs', app, document); // Cambia la ruta a '/docs'
}