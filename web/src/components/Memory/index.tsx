'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Camera, ChevronLeft } from 'lucide-react'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'

import { api } from '@/lib/api'
import { MediaPicker } from '../MediaPicker'

dayjs.locale(ptBr)

interface MemoryProps {
  token?: string | null
}

interface IMemory {
  id: string
  coverUrl: string
  content: string
  isPublic: boolean
  created_at: string
}

export function Memory({ token }: MemoryProps) {
  const [memory, setMemory] = useState<IMemory>()
  const [checked, setChecked] = useState<boolean | undefined>(false)
  const { id } = useParams()

  async function getMemory() {
    const response = await api.get(`/memories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    setMemory(response.data)
  }

  useEffect(() => {
    getMemory()
  }, [memory])

  return (
    <>
      <Link
        href="/"
        className="flex w-max items-center gap-1 text-sm text-gray-200
          hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar a timeline
      </Link>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <label
            htmlFor="midia"
            className="flex cursor-pointer items-center gap-1.5 text-sm
      text-gray-200 hover:text-gray-100"
          >
            <Camera className="h-4 w-4" />
            Anexar mídia
          </label>

          <label
            htmlFor="isPublic"
            className="flex items-center gap-1.5 text-sm
          text-gray-200 hover:text-gray-100"
          >
            <input
              type="checkbox"
              id="isPublic"
              name="isPublic"
              value={String(memory?.isPublic)}
              checked={memory?.isPublic ?? checked}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setChecked((prevChecked) => !prevChecked)
              }}
              className="h-4 w-4 rounded border-gray-400 bg-gray-700
              text-purple-500 focus:ring-2 focus:ring-purple-300"
            />
            Tornar memória pública
          </label>
        </div>

        <MediaPicker />

        <article className="flex flex-col gap-4">
          <time
            className="-ml-10 flex items-center gap-2 text-sm text-gray-100
              before:h-px before:w-5 before:bg-gray-50"
          >
            {dayjs(memory?.created_at).format(
              'D[ de ]MMMM[, ]YYYY[ - ]HH:mm:ss',
            )}
          </time>
          <Image
            src={memory?.coverUrl ?? ''}
            alt="cover"
            width={592}
            height={280}
            className="aspect-video w-full rounded-lg object-cover"
          />
          <p className="text-lg leading-relaxed text-gray-100">
            {memory?.content}
          </p>
        </article>
      </div>
    </>
  )
}
