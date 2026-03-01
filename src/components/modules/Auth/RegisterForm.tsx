"use client";

import * as z from "zod";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"

const formSchema = z.object({
    name: z
        .string()
        .min(3, "Name must have at least 3 characters.")
        .max(24, "Name must be at most 24 characters."),
    email: z
        .email("Please enter a valid email address."),
    password: z
        .string()
        .min(6, "Password should contain at least 6 characters."),
    confirmPassword: z
        .string().min(6, "Password must have 6 characters at least.")
})

export default function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data);
    }

    return (
        <Card {...props} className="gap-2">
            <CardHeader>
                <CardTitle className="text-3xl text-center mb-1 font-light">Create an account</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup className="gap-4">
                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel htmlFor="name">Full Name</FieldLabel>
                                    <Input {...field} id={field.name} type="text" placeholder="John Doe" required autoComplete="off" aria-invalid={fieldState.invalid} />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel htmlFor="email">Email</FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                        autoComplete="off"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />
                        <Controller
                            name="password"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                    <Input {...field} id={field.name} type="password" required autoComplete="off" aria-invalid={fieldState.invalid} />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>

                            )}
                        />
                        <Field>
                            <FieldLabel htmlFor="confirm-password">
                                Confirm Password
                            </FieldLabel>
                            <Input id="confirm-password" type="password" required />
                        </Field>
                        <FieldGroup>
                            <Field>
                                <Button type="submit">Create Account</Button>
                                <Separator />
                                <Button variant="outline" type="button">
                                    <FcGoogle />
                                    <span>
                                        Sign up with Google
                                    </span>
                                </Button>
                                <Button variant="outline" type="button">
                                    <FaGithub />
                                    <span>
                                        Sign up with Github
                                    </span>
                                </Button>
                                <FieldDescription className="px-6 text-center">
                                    Already have an account? <Link href="/login">Sign in</Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    )
}
