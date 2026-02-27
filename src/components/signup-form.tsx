import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { FaGithub } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"
import { Separator } from "@/components/ui/separator"

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  return (
    <Card {...props} className="gap-2">
      <CardHeader>
        <CardTitle className="text-3xl text-center mb-1 font-light">Create an account</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup className="gap-4">
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input id="name" type="text" placeholder="John Doe" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" required />
            </Field>
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
