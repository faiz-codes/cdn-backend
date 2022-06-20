import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Developer } from 'src/entities/developer.entity';

@Injectable()
export class DeveloperService {
    constructor(
        @InjectRepository(Developer)
        private developerRepository: Repository<Developer>
    ) { }
    
    async  readAll(): Promise<Developer[]> {
        return await this.developerRepository.find();
    }

    async create(contact: Developer): Promise<Developer> {
        return await this.developerRepository.save(contact);
    }

    async update(contact: Developer): Promise<UpdateResult> {

        return await this.developerRepository.update(contact.id,contact);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.developerRepository.delete(id);
    }

}


