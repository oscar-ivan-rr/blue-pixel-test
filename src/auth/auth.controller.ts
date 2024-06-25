import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { userDTO } from './DTOs/userDTO';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  auth(@Body() userData: userDTO) {
    return this.authService.login(userData.username, userData.password)
  }
}
