import Image from 'next/image'

import logo from '../assets/valentines-logo.png'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image className="h-30" src={logo} alt="Valentin's Day" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-red-600">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <a
        className="inline-block rounded-full bg-red-500 px-5 py-3 font-alt text-sm uppercase leading-none text-red-50 hover:bg-red-700"
        href=""
      >
        CADASTRAR LEMBRANÇA
      </a>
    </div>
  )
}
