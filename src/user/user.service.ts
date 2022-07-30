import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(private dbService: PrismaService){}
    /**
    * all user
    * @return
    */
    async findAll(){
        return await this.dbService.user.findMany()
    }
    
    /**
     * 
     * @param data 
     * @returns 
     */
    async createData(data: createUserDto){
        return await this.dbService.user.create({
            data
        })
    }
    
    /**
     * update user
     * @param id
     * @param any
     */
    async updateData(id:number, data:any){
        return await this.dbService.user.update({
            data, 
            where:{
                id
            }
        })
    }
    /**
     * delete user
     * @param id 
     * @returns 
     */
    async deleteUser(id:number){
        return await this.dbService.user.delete({
            where:{
                id
                
            }
        })
    }

}
