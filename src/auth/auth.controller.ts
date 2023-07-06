import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards ,Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './authdto/login.dto';
import { Public } from './decorator';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './local-auth.guard';
import { signUpDto } from './authdto/signup.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({
    type : LoginDto
  })
  async login(@Request() req) {        
    return this.authService.login(req.user);
  }

  @Get('profile')
  @ApiBearerAuth('access-token')
  getProfile(@Request() req) {
    return req.user;
  }

  @Public()
  @Post('signup')
  async signUp(@Body() user:signUpDto){
    return this.authService.signUp(user)
  }
}