import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DeveloperService } from 'src/service/developer/developer.service';
import { Developer } from 'src/entities/developer.entity';

@Controller('developers')
export class DevelopersController {
    constructor(private developerService: DeveloperService){
    }

    @Get()
    read(): Promise<Developer[]> {
      return this.developerService.readAll();
    }
    
    @Post('create')
    async create(@Body() developer: Developer): Promise<any> {
      return this.developerService.create(developer);
    }  
    
    @Put(':id/update')
    async update(@Param('id') id, @Body() developer: Developer): Promise<any> {
        developer.id = Number(id);
        return this.developerService.update(developer);
    }  
    
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.developerService.delete(id);
    }
}
