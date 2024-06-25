import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private jwtService: JwtService) {}

  async login(username: string, pass: string) {
    const user = this.userService.findOne(username, pass)

    if(!user) {
      throw new UnauthorizedException()
    }

    const payload = { sub: user.userId, username: user.username }
    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }
}
