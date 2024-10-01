import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserService } from '../users/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.entity';

describe('AuthService', () => {
    let authService: AuthService;
    let userService: UserService;
    let jwtService: JwtService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AuthService,
                {
                    provide: UserService,
                    useValue: {
                        findByEmail: jest.fn(),
                        create: jest.fn(),
                    },
                },
                {
                    provide: JwtService,
                    useValue: {
                        sign: jest.fn(),
                    },
                },
            ],
        }).compile();

        authService = module.get<AuthService>(AuthService);
        userService = module.get<UserService>(UserService);
        jwtService = module.get<JwtService>(JwtService);
    });

    it('should be defined', () => {
        expect(authService).toBeDefined();
    });

    describe('validateUser', () => {
        it('should return a user if validation is successful', async () => {
            const user: User = {
                username: 'testuser',
                email: 'test@example.com',
                password: 'password123',
                firstName: 'Test',
                lastName: 'User',
                roles: ['user'],
                createdAt: new Date(),
                updatedAt: new Date(),
                isActive: true,
                lastLogin: new Date(),
                tokens: [],
            };
            jest.spyOn(userService, 'findByEmail').mockResolvedValue(user);

            const result = await authService.validateUser('test@example.com', 'password123');
            expect(result).toEqual({
                username: 'testuser',
                email: 'test@example.com',
                firstName: 'Test',
                lastName: 'User',
                roles: ['user'],
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
                isActive: true,
                lastLogin: user.lastLogin,
                tokens: [],
            });
        });

        it('should return null if validation fails', async () => {
            jest.spyOn(userService, 'findByEmail').mockResolvedValue(null);

            const result = await authService.validateUser('test@example.com', 'wrongpassword');
            expect(result).toBeNull();
        });
    });

    describe('login', () => {
        it('should return an access token', async () => {
            const user = { userId: 1, username: 'testuser' };
            jest.spyOn(jwtService, 'sign').mockReturnValue('token');

            const result = await authService.login(user);
            expect(result).toEqual({ access_token: 'token' });
        });
    });
});