import { Body, Controller, Get, HttpCode, HttpStatus, Ip, Param, Post, Redirect, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

interface UserBody {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    isTermsAndConditions: boolean;
}

@Controller('users')
export class UsersController {

    @Get('/')
    @HttpCode(HttpStatus.OK)
    @Redirect('users/account')
    getUser(@Req() req: Request, @Res({ passthrough: true }) res: Response, @Body() body: UserBody) {
        console.log("req body is ", body);
        return {
            ...body
        };
    }

    @Get('/account')
    getAccount() {
        return {
            message: "this is account route"
        };
    }

    @Get("/ip")
    getIp(@Ip() ip:string) {
        return "your ip is " + ip
    }
    @Get('/:slug')
    getSingleUser(@Param() param : Record<string,number>) {
        return {
            message: "this is account route " + param.slug
        };
    }

}
