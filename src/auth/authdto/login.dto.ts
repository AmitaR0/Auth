import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
  @ApiProperty({ description: "userame" })
  username:string;

  @ApiProperty({ description: "password" })
  password:string;

}
