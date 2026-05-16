'use client';

import { Check } from '@gravity-ui/icons';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { authClient } from '../../lib/auth-client';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';

function SignInPage() {
  const onSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      rememberMe: true,
      callbackURL: '/',
    });

    if (error) {
      toast.error('Login Failed');
    }
  };

  const handleGoogleSignIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: 'google',
    });

    if (error) {
      toast.error('Login Failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="bg-[#e6e5df]/90 border border-gray-300 rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold pb-4">Sign In</h2>
        <Form className="flex w-96 flex-col gap-1.5" onSubmit={onSubmit}>
          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={value => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return 'Please enter a valid email address';
              }

              return null;
            }}
          >
            <Label className="pb-1">Email</Label>
            <Input name="email" placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={value => {
              if (value.length < 8) {
                return 'Password must be at least 8 characters';
              }
              if (!/[A-Z]/.test(value)) {
                return 'Password must contain at least one uppercase letter';
              }
              if (!/[0-9]/.test(value)) {
                return 'Password must contain at least one number';
              }

              return null;
            }}
          >
            <Label className="pb-1">Password</Label>
            <Input name="password" placeholder="Enter your password" />
            <Description className="py-2">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button type="submit" className="bg-[#232323] hover:bg-[#232323]/90">
              <Check />
              Login
            </Button>
            <Button className="bg-brick-red/80 hover:bg-brick-red/70 text-white">
              <Link href="/auth/signup">Register</Link>
            </Button>
          </div>

          <div>
            <Button className="bg-[#232323] hover:bg-[#232323]/90" onClick={handleGoogleSignIn}>
              Login with Google
            </Button>
          </div>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignInPage;
