'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { UploadNewFile } from './upload-new-file'

export function Header() {
  const isAuthenticated = true

  if (!isAuthenticated) {
    return (
      <header className="flex items-center justify-between w-full bg-secondary text-muted-foreground">
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between py-7">
          <h1>upload.me</h1>

          <div className="flex items-center space-x-4">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="flex items-center justify-between w-full bg-secondary text-muted-foreground">
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between py-7">
        <div className="flex items-center gap-3">
          <Image
            src="https://via.placeholder.com/150"
            width={30}
            height={30}
            alt="Avatar"
            className="rounded-full"
          />
          <h1>Olá, Alexandre</h1>
        </div>

        <div className="flex items-center space-x-4">
          <UploadNewFile />
          <Button variant="outline">Meus arquivos</Button>
        </div>
      </div>
    </header>
  )
}
