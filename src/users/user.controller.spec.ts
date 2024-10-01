import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { User } from './user.entity';
import { BadRequestException, ConflictException, HttpException, HttpStatus } from '@nestjs/common';

describe('UserController', () => {
    let userController: UserController;
    let userService: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [
                {
                    provide: UserService,
                    useValue: {
                        findAll: jest.fn(),
                        create: jest.fn(),
                        findOne: jest.fn(),
                        update: jest.fn(),
                        delete: jest.fn(),
                        findByEmail: jest.fn(), // Asegúrate de incluir este mock
                    },
                },
            ],
        }).compile();

        userController = module.get<UserController>(UserController);
        userService = module.get<UserService>(UserService);
    });

    it('should be defined', () => {
        expect(userController).toBeDefined();
    });

    describe('findAll', () => {
        it('should return an array of users', async () => {
            const result: User[] = [
                {
                    username: 'testuser',
                    email: 'test@example.com',
                    password: 'password123',
                    firstName: 'Test',
                    lastName: 'User',
                    roles: ['user'],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    isActive: true,
                    tokens: []
                }
            ];
            jest.spyOn(userService, 'findAll').mockResolvedValue(result);

            expect(await userController.findAll()).toBe(result);
        });
    });

    describe('create', () => {
        it('should create a new user', async () => {
            const createUserDto: CreateUserDto = { email: 'test@example.com', password: 'password123', username: 'testuser', roles: ['user'] };
            const result: User = {
                username: 'testuser',
                email: 'test@example.com',
                password: 'password123',
                firstName: 'Test',
                lastName: 'User',
                roles: ['user'],
                createdAt: new Date(),
                updatedAt: new Date(),
                isActive: true,
                tokens: []
            };

            jest.spyOn(userService, 'findByEmail').mockResolvedValue(null);
            jest.spyOn(userService, 'create').mockResolvedValue(result);

            expect(await userController.create(createUserDto)).toBe(result);
        });

        it('should throw an exception if user already exists', async () => {
            const createUserDto: CreateUserDto = { email: 'test@example.com', password: 'password123', username: 'testuser', roles: ['user'] };
            const existingUser: User = {
                username: 'testuser',
                email: 'test@example.com',
                password: 'password123',
                firstName: 'Test',
                lastName: 'User',
                roles: ['user'],
                createdAt: new Date(),
                updatedAt: new Date(),
                isActive: true,
                tokens: []
            };

            jest.spyOn(userService, 'findByEmail').mockResolvedValue(existingUser);

            await expect(userController.create(createUserDto)).rejects.toThrow(ConflictException);
        });
    });

    describe('findOne', () => {
        it('should return a user if found', async () => {
            const result: User = {
                username: 'testuser',
                email: 'test@example.com',
                password: 'password123',
                firstName: 'Test',
                lastName: 'User',
                roles: ['user'],
                createdAt: new Date(),
                updatedAt: new Date(),
                isActive: true,
                tokens: []
            };
            jest.spyOn(userService, 'findOne').mockResolvedValue(result);

            expect(await userController.findOne('1')).toBe(result);
        });

        it('should throw an exception if user not found', async () => {
            jest.spyOn(userService, 'findOne').mockResolvedValue(null);

            await expect(userController.findOne('1')).rejects.toThrow(HttpException);
        });
    });

    describe('update', () => {
        it('should update a user', async () => {
            const updateUserDto: UpdateUserDto = { email: 'test@example.com', password: 'password123' };
            const result: User = {
                username: 'testuser',
                email: 'test@example.com',
                password: 'password123',
                firstName: 'Test',
                lastName: 'User',
                roles: ['user'],
                createdAt: new Date(),
                updatedAt: new Date(),
                isActive: true,
                tokens: []
            };
            jest.spyOn(userService, 'update').mockResolvedValue(result);

            expect(await userController.update('1', updateUserDto)).toBe(result);
        });

        it('should throw an exception if user not found', async () => {
            const updateUserDto: UpdateUserDto = { email: 'test@example.com', password: 'password123' };
            jest.spyOn(userService, 'update').mockResolvedValue(null);

            await expect(userController.update('1', updateUserDto)).rejects.toThrow(HttpException);
        });
    });

    describe('delete', () => {
        it('should delete a user', async () => {
            const result: User = {
                username: 'testuser',
                email: 'test@example.com',
                password: 'password123',
                firstName: 'Test',
                lastName: 'User',
                roles: ['user'],
                createdAt: new Date(),
                updatedAt: new Date(),
                isActive: true,
                tokens: []
            };
            jest.spyOn(userService, 'delete').mockResolvedValue(result);

            expect(await userController.delete('1')).toEqual({ message: 'Usuario eliminado' });
        });

        it('should throw an exception if user not found', async () => {
            jest.spyOn(userService, 'delete').mockResolvedValue(null);

            await expect(userController.delete('1')).rejects.toThrow(HttpException);
        });
    });
});