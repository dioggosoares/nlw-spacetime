import { cookies } from 'next/headers'

import { Memory } from '@/components/Memory'
import { EmptyMemories } from '@/components/EmptyMemories'

interface MemoriesProps {
  params: {
    id: string
  }
}

export default function Memories({ params }: MemoriesProps) {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value

  return (
    <section className="flex flex-1 flex-col gap-4 p-10">
      <Memory token={token} id={params.id} />
    </section>
  )
}
