export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="w-[360px] text-center leading-relaxed">
        Você ainda não registrou nenhuma lembrança, comece a{' '}
        <a href="" className="underline hover:text-red-600">
          criar agora
        </a>
        !
      </p>
    </div>
  )
}
