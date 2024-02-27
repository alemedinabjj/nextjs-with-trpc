'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { InputUploadFile } from './input-upload-file'
import { useState } from 'react'

export function UploadNewFile() {
  const [filesToUpload, setFilesToUpload] = useState<File[]>([])

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Subir novo arquivo</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deseja subir um novo arquivo?</AlertDialogTitle>
          <AlertDialogDescription>
            Por favor, selecione o arquivo que deseja subir.
            <InputUploadFile
              files={filesToUpload}
              setFiles={setFilesToUpload}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction>Continuar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
