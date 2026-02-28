"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
    email: z
        .email("Please enter a valid email address."),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters.")
        .max(20, "Password must be at most 20 characters."),
})

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        // Do something with the form values.
        console.log(data)
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="py-8 px-4">
                <CardHeader>
                    <CardTitle className="text-3xl text-center mb-1 font-light">Login to your account</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FieldGroup>
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
                                        <div className="flex items-center">
                                            <FieldLabel htmlFor="password">Password</FieldLabel>
                                            <Link
                                                href="#"
                                                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                            >
                                                Forgot your password?
                                            </Link>
                                        </div>
                                        <Input {...field} id={field.name} type="password" required aria-invalid={fieldState.invalid} autoComplete="off" />
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />

                            <Field>
                                <Button type="submit">Login</Button>
                                <Separator decorative={true} />
                                <Button variant="outline" type="button">
                                    <FcGoogle />
                                    <span>
                                        Login with Google
                                    </span>
                                </Button>
                                <Button variant="outline" type="button">
                                    <FaGithub />
                                    <span>
                                        Login with Github
                                    </span>
                                </Button>
                                <FieldDescription className="text-center">
                                    Don&apos;t have an account? <Link href="/register">Sign up</Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default LoginForm;