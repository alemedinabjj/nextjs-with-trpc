'use client'

import { trpc } from '@/app/_trpc/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z
  .object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    // confirm password zod validation
    // passwords should match
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export default function RegisterPage() {
  const { handleSubmit, register } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  })

  const createNewUser = trpc.createUser.useMutation({
    onSuccess: (data) => {
      console.log(data)
    },
  })

  const onSubmit = (values) => {
    createNewUser.mutateAsync(values)
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <Input {...register('name')} placeholder="Username" />
          <Input {...register('email')} placeholder="Email" />
          <Input
            type="password"
            {...register('password')}
            placeholder="Password"
          />
          <Input
            type="password"
            {...register('confirmPassword')}
            placeholder="Confirm Password"
          />

          <Button type="submit">Register</Button>
        </form>
      </div>
    </div>
  )
}
