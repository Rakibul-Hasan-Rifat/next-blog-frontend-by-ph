"use server";

import z from 'zod';
import { registerFormSchema } from './../components/modules/Auth/RegisterForm';
import toast from 'react-hot-toast';
import { loginFormSchema } from '@/components/modules/Auth/LoginForm';

export const registerUser = async (data: z.infer<typeof registerFormSchema>) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!res?.ok) {
        console.log('User registration failde', await res.text());
        toast.error(await res.text())
        return
    }
    return await res.json();
}

export async function loginUser (data: z.infer<typeof loginFormSchema>) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (!res?.ok) {
        console.log('User registration failde', await res.text());
        toast.error(await res.text())
        return
    }
    return await res.json()
}