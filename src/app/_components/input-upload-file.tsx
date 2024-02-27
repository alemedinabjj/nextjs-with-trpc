'use client'
import { File } from 'lucide-react'

import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

interface InputUploadFileProps {
  files: File[]
  setFiles: (files: File[]) => void
}

export function InputUploadFile({ files, setFiles }: InputUploadFileProps) {
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  if (files.length) {
    return (
      <div className="bg-primary border-2 border-dashed border-secondary rounded-md p-4 flex items-center justify-center flex-col gap-4 my-5">
        <File className="text-secondary text-4xl" />
        <p>
          Você selecionou {files.length} arquivo{files.length > 1 ? 's' : ''}:
        </p>
      </div>
    )
  }

  return (
    <div {...getRootProps()} className="my-5">
      <input {...getInputProps()} />
      {isDragActive ? (
        <div className="bg-primary border-2 border-dashed border-secondary rounded-md p-4 flex items-center justify-center flex-col gap-4">
          <File className="text-secondary text-4xl" />
          <p>Drop the files here ...</p>
        </div>
      ) : (
        <div className="bg-transparent border-2 border-dashed border-primary rounded-md p-4 flex items-center justify-center flex-col gap-4">
          <File className="text-primary text-4xl" />
          <p>
            Arraste e solte arquivos aqui, ou clique para selecionar arquivos
          </p>
        </div>
      )}
    </div>
  )
}
