export function EmptyMemories() {
  return (
    <article className="flex flex-1 items-center justify-center">
      <p className="w-[22.5rem] text-center leading-relaxed">
        Você ainda não registrou nenhuma lembrança, comece a{' '}
        <a
          href=""
          className="underline transition-colors delay-150 ease-linear
              hover:text-gray-50"
        >
          criar agora!
        </a>
      </p>
    </article>
  )
}
