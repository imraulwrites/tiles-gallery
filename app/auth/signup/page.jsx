'use client';

import { Check } from '@gravity-ui/icons';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { authClient } from '../../lib/auth-client';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';

export default function SignUpPage() {
  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      photourl: userData.photourl,
      password: userData.password,
      callbackURL: '/',
    });

    if (error) {
      toast.error('Registration Failed.');
    }
  };

  const handleGoogleSignIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: 'google',
    });

    if (error) {
      toast.error('Login Failed.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="bg-[#e6e5df]/90 border border-gray-300 rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold pb-4">Sign Up </h2>
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
          {/* User Name */}
          <TextField
            isRequired
            name="name"
            validate={value => {
              if (value.length < 3) {
                return 'Name must be at least 3 characters';
              }

              return null;
            }}
          >
            <Label>Name</Label>
            <Input name="name" placeholder="John Doe" />
            <FieldError />
          </TextField>

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
            <Label>Email</Label>
            <Input name="email" placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* Photo URL */}

          <TextField
            isRequired
            name="photourl"
            validate={value => {
              if (value.length < 3) {
                return 'Name must be at least 3 characters';
              }

              return null;
            }}
          >
            <Label>Photo</Label>
            <Input name="photourl" placeholder="https://unsplash.com/photos/abcd..." />
            <FieldError />
          </TextField>

          {/* Password */}
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
            <Label>Password</Label>
            <Input name="password" placeholder="Enter your password" />
            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button className="bg-[#232323] hover:bg-[#232323]/90" type="submit">
              <Check />
              Register
            </Button>
            <Button className="bg-brick-red/80 hover:bg-brick-red/70 text-white">
              <Link href="/auth/signin">Login</Link>
            </Button>
          </div>

          <div>
            <Button className="bg-[#232323] hover:bg-[#232323]/90" onClick={handleGoogleSignIn}>
              Sign Up with Google
            </Button>
          </div>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
}
