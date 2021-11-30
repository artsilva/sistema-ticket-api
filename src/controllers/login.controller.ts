import { Login } from './../interfaces/login.interface';
import { login, users } from './../models/login.model';
import { Request, Response } from 'express';
import * as _ from 'lodash';

export const authUser = async (req: Request, res: Response): Promise<Response> => {
    const userLoggin = req.body;
    try {
        const loginData: Login[] = await login();
        const userAuth = loginData.find(u => u.nickname === userLoggin.username && u.pass === userLoggin.pass);
        console.log(userAuth, _.isEmpty(userAuth));
        if (!_.isEmpty(userAuth)) {
            const userList = await users();
            const user = userList.find(u => u.id === userAuth?.userid)
            return res.status(200).json(user);
        }
        return res.status(204).json();
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
}