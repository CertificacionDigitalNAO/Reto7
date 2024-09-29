import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function setupSwagger(app: INestApplication): void {
    const config = new DocumentBuilder()
        .setTitle('API RESTful para Users')
        .setDescription('Reto 7: REST y HTTP para obtener y generar datos')
        .setVersion('1.0')
        .addTag('DigitalNAO')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);
}