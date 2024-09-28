import { NextRequest, NextResponse } from "next/server";
import User from "@/modal/userModal";
import bcryptjs from "bcryptjs"
import { connect } from "@/database/dbConnection";
import jwt from "jsonwebtoken";


connect();

export async function POST(req:NextRequest) {
    try {
        const body = await req.json();
        const {email, password} = body;
        const user = await User.findOne({email});
        if(!user)
            return NextResponse.json({message:"User doesn't exist"}, {status:400});

        const isPasswordMatch = await bcryptjs.compare(password, user.password);
        if(!isPasswordMatch) 
            return NextResponse.json({message:"Invalid email or password"});

            const tokenData = {
                id:user._id,
                username:user.username,
                email:user.email,
            }
            const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn:"1d"});
            const response = NextResponse.json({
                message: `Welcome back ${user.username}`,
                success: true
            });
            response.cookies.set("token", token, {
                httpOnly: true,
                maxAge: 60 * 60 * 24,  // 1 day
            });
            return response;
            
        
    } catch (error:any) {
        return NextResponse.json({error:error.message}, {status:500});
    }
}