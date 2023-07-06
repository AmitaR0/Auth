import { ApiProperty } from "@nestjs/swagger";

export class CreateFarrDto {
    @ApiProperty({ description: "Name" })
  name: string;
}
