import { ApiProperty } from "@nestjs/swagger";

export class signUpDto {
  @ApiProperty({ description: "roles" })
  roles:string;
    
  @ApiProperty({ description: "userame" })
  username:string;

  @ApiProperty({ description: "password" })
  password:string;


}