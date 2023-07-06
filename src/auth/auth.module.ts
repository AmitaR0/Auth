import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      global: true,
      secret: String(process.env.JWT_SECRET),
      signOptions: { expiresIn: '10h' },
    }),
  ],
  providers: [AuthService , LocalStrategy ,JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}