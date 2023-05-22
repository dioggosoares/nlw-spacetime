import { Camera, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemory() {
  return (
    <section className="flex flex-1 flex-col gap-4">
      <Link
        href="/"
        className="flex w-max items-center gap-1 text-sm text-gray-200
        hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar a timeline
      </Link>

      <form className="gap2 flex flex-1 flex-col">
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
              value="true"
              className="h-4 w-4 rounded border-gray-400 bg-gray-700
              text-purple-500 focus:ring-2 focus:ring-purple-300"
            />
            Tornar memória pública
          </label>
        </div>
        <input type="file" id="midia" className="invisible" />

        <textarea
          name="content"
          spellCheck={false}
          className="w-full flex-1 resize-none rounded border-0 bg-transparent
          p-0 text-lg leading-relaxed text-gray-100 placeholder-gray-400 focus:ring-0"
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
        />
      </form>
    </section>
  )
}
