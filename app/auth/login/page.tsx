"use client";

import { useActionState } from "react";
import { signIn } from "../actions";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function SignInPage() {
  const [state, dispatchAction, isPending] = useActionState(signIn, {});

  return (
    <Card className="w-full sm:max-w-md ring-0">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Access your dashboard account.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={dispatchAction} className="space-y-3">
          <FieldSet className="w-full">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  name="email"
                  autoComplete="email"
                  required
                />
                <FieldDescription>
                  Use the email linked to your account.
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <FieldDescription>
                  Enter your account password.
                </FieldDescription>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  autoComplete="current-password"
                  required
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          {state.error ? (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          ) : null}
          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? "Signing in..." : "Sign in"}
          </Button>
          <p className="text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/auth/sign-up" className="underline">
              Sign up
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
