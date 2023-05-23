import { cookies } from 'next/headers'

import { Memory } from '@/components/Memory'
import { EmptyMemories } from '@/components/EmptyMemories'

export default function Memories() {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value

  return (
    <section className="flex flex-1 flex-col gap-4 p-10">
      <Memory token={token} />
    </section>
  )
}
