import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FarrService } from './farr.service';
import { CreateFarrDto } from './dto/create-farr.dto';
import { UpdateFarrDto } from './dto/update-farr.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Public, Roles } from 'src/auth/decorator';
import { Role } from 'src/users/role.enum';
import { RolesGuard } from 'src/users/roles.guard';


@Controller('farr')
export class FarrController {
  constructor(private readonly farrService: FarrService) {}

  @ApiBearerAuth('access-token')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  @Post()
  create(@Body() createFarrDto: CreateFarrDto) {
    return this.farrService.create(createFarrDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.farrService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.farrService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFarrDto: UpdateFarrDto) {
    return this.farrService.update(+id, updateFarrDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.farrService.remove(+id);
  }
}
