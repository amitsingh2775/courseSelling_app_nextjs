// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Admin } from "db";
import jwt from "jsonwebtoken"
import { ensureConnectDB } from "@/lib/dbConnect";

type Data = {
    token?: string;
    message?:string;
    name?:string
};
const SECRET="w4t54654"
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    await ensureConnectDB()
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email })

    if (admin) {
        res.status(403).json({message: 'Admin already exists' });
    } else {
        const obj = { username: email, password: password };
        console.log("obj in api ",obj);
        
        const newAdmin = new Admin(obj);
       await newAdmin.save();

        const token = jwt.sign({ email, role: 'admin' }, SECRET, { expiresIn: '1h' });
        console.log("token in controller ",token);
        
        res.json({ message: 'Admin created successfully', token });
    }


}
