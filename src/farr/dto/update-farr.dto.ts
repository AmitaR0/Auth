import { PartialType } from '@nestjs/swagger';
import { CreateFarrDto } from './create-farr.dto';
import { ApiProperty } from "@nestjs/swagger";

export class UpdateFarrDto extends PartialType(CreateFarrDto) {
    @ApiProperty({ description: "Name" })
  name: string;
}
