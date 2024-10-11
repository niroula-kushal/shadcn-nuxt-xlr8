<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const username = ref("");
const password = ref("");

const performSignIn = async () => {
  // if(!username.value || !password.value)
  // {
  //   alert("Please input username/password");
  //   return; 
  // }
  // const result = await signIn({
  //   username: username.value,
  //   password: password.value
  // }, { callbackUrl: 'http://localhost:3000' });
};
</script>

<template>
  <Card class="mx-auto max-w-sm">
    <CardHeader>
      <CardTitle class="text-2xl">
        Login
      </CardTitle>
      <CardDescription>
        Enter your email below to login to your account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="grid gap-4">
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            v-model="username"
          />
        </div>
        <div class="grid gap-2">
          <div class="flex items-center">
            <Label for="password">Password</Label>
            <a href="#" class="ml-auto inline-block text-sm underline">
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required v-model="password"/>
        </div>
        <Button type="submit" class="w-full" @click.prevent="performSignIn">
          Login
        </Button>
      </div>
      <div class="mt-4 text-center text-sm">
        Don't have an account?
        <a href="#" class="underline">
          Sign up
        </a>
      </div>
    </CardContent>
  </Card>
</template>