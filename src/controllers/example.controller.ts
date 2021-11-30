// import { User } from '../interfaces/user.interface';
// import { Request, Response } from 'express';
// import { selectAllUsers, selectUserById, updateUserById, createUser, deleteUserById } from './../models/example.model';

// export const getUsers = async (req: Request, res: Response): Promise<Response> => {
//     try {
//         const usuarios = await selectAllUsers();
//         console.log(usuarios);
//         return res.status(200).json(usuarios);
//     }
//     catch (e) {
//         console.log(e);
//         return res.status(500).json('Internal Server error');
//     }   
// }

// export const getUserById = async (req: Request, res: Response): Promise<Response> => {
//     try {
//         const id: number = parseInt(req.params.id);
//         const response = await selectUserById(id);
//         console.log(response);
//         return res.status(200).json(response);
//     }
//     catch (e) {
//         console.log(e);
//         return res.status(500).json('Internal Server error');
//     }
// }

// export const setUser = async (req: Request, res: Response): Promise<Response> => {
//     const user: User = req.body;
//     try {
//         await createUser(user);
//         return res.json({
//             message: 'User created Successfully',
//             user
//         });
//     }
//     catch (e) {
//         console.log(e);
//         return res.json({
//             message: 'Cannot create user',
//             user
//         });
//     }
// }

// export const updateUser = async (req: Request, res:Response): Promise<Response> => {
//     const user: User = req.body;
//     try {
//         await updateUserById(user);
//         return res.status(200).json({
//             message: 'User updated Successfully',
//             user
//         });
//     }
//     catch (e) {
//         console.log(e);
//         return res.status(500).json({
//             message: 'Cannot update user',
//             user
//         });
//     }
// }

// export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
//     const id: number = parseInt(req.params.id);
//     try {
//         await deleteUserById(id);
//         return res.status(200).json({
//             message: `User deleted Successfully`,
//         });
//     }
//     catch (e) {
//         return res.status(500).json({
//             message: 'Cannot delete user'
//         });
//     }
// }