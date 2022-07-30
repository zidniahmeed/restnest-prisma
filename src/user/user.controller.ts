import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    /**
     * get all data
     * @returns 
     */
    @Get()
    async users(){
        return await this.userService.findAll();
    }


    /**
     * input user
     * @param body 
     * @returns 
     */
    @UsePipes(ValidationPipe)
    @Post()
    async createUser(@Body() body: createUserDto){
        return await this.userService.createData(body)
    }


    /**
    *update user 
    * @param id 
    * @param body 
    * @returns 
    */
    @UsePipes(ValidationPipe)
    @Patch('/:id')
    async updateUser(@Param('id', ParseIntPipe) id, @Body()body){
        return await this.userService.updateData(id, body)
    }

    /**
     * delete user
     * @param id 
     * @returns 
     */

    @UsePipes(ValidationPipe)
    @Delete('/:id')
    async deleteUser(@Param('id', ParseIntPipe) id){
        return await this.userService.deleteUser(id)
    }
}
