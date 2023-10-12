import { Building, ExternalLink, Github, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="-mt-24">
      <section className="mx-auto flex max-w-3xl gap-8 rounded-xl bg-gray-800 p-8 shadow-xl">
        <Image
          className="h-36 w-36 rounded-lg"
          src="https://github.com/adeonir.png"
          alt="Adeonir Kohl"
          width={200}
          height={200}
          priority
        />
        <div className="flex flex-1 flex-col gap-2">
          <header className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Adeonir Kohl</h1>
            <Link
              target="_blank"
              href="https://github.com/adeonir"
              className="flex items-start gap-2 text-sm text-blue-500 transition hover:text-blue-400"
            >
              GitHub <ExternalLink className="h-4 w-4" />
            </Link>
          </header>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean
            malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </p>
          <footer className="mt-auto flex items-center gap-6">
            <div className="flex items-center gap-1 text-gray-200">
              <Github className="h-5 w-5 text-gray-500" /> adeonir
            </div>
            <div className="flex items-center gap-1 text-gray-200">
              <Building className="h-5 w-5 text-gray-500" /> Joyjet
            </div>
            <div className="flex items-center gap-1 text-gray-200">
              <Users className="h-5 w-5 text-gray-500" /> 45 seguidores
            </div>
          </footer>
        </div>
      </section>
      <section className="mx-auto mt-20 flex max-w-3xl flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-100">Publicações</span>
          <span className="whitespace-nowrap text-sm text-gray-400">6 publicações</span>
        </div>
        <input
          type="search"
          className="rounded-lg border border-gray-600 bg-gray-950 px-4 py-3 transition placeholder:text-gray-500 focus:border-blue-500/70"
          placeholder="Buscar conteúdo"
        />
      </section>
      <section className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-8">
        <article className="rounded-lg bg-gray-800 shadow-lg transition hover:bg-gray-700/70">
          <Link href="#" className="flex flex-col gap-4 p-8">
            <header className="flex items-start justify-between gap-4">
              <h1 className="text-xl font-bold">JavaScript data types and data structures</h1>
              <span className="whitespace-nowrap text-sm text-gray-400">Há 1 dia</span>
            </header>
            <p className="line-clamp-4 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia deleniti unde distinctio eaque, quis
              dolorem porro suscipit minus! Culpa illo iusto totam, quibusdam aliquam quam laudantium saepe possimus
              expedita atque magnam similique laborum cum illum ex incidunt inventore itaque omnis? Nobis explicabo,
              quasi deleniti nam libero repellendus velit fuga?
            </p>
          </Link>
        </article>
        <article className="rounded-lg bg-gray-800 shadow-lg transition hover:bg-gray-700/70">
          <Link href="#" className="flex flex-col gap-4 p-8">
            <header className="flex items-start justify-between gap-4">
              <h1 className="text-xl font-bold">JavaScript data types and data structures</h1>
              <span className="whitespace-nowrap text-sm text-gray-400">Há 1 dia</span>
            </header>
            <p className="line-clamp-4 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia deleniti unde distinctio eaque, quis
              dolorem porro suscipit minus! Culpa illo iusto totam, quibusdam aliquam quam laudantium saepe possimus
              expedita atque magnam similique laborum cum illum ex incidunt inventore itaque omnis? Nobis explicabo,
              quasi deleniti nam libero repellendus velit fuga?
            </p>
          </Link>
        </article>
        <article className="rounded-lg bg-gray-800 shadow-lg transition hover:bg-gray-700/70">
          <Link href="#" className="flex flex-col gap-4 p-8">
            <header className="flex items-start justify-between gap-4">
              <h1 className="text-xl font-bold">JavaScript data types and data structures</h1>
              <span className="whitespace-nowrap text-sm text-gray-400">Há 1 dia</span>
            </header>
            <p className="line-clamp-4 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia deleniti unde distinctio eaque, quis
              dolorem porro suscipit minus! Culpa illo iusto totam, quibusdam aliquam quam laudantium saepe possimus
              expedita atque magnam similique laborum cum illum ex incidunt inventore itaque omnis? Nobis explicabo,
              quasi deleniti nam libero repellendus velit fuga?
            </p>
          </Link>
        </article>
        <article className="rounded-lg bg-gray-800 shadow-lg transition hover:bg-gray-700/70">
          <Link href="#" className="flex flex-col gap-4 p-8">
            <header className="flex items-start justify-between gap-4">
              <h1 className="text-xl font-bold">JavaScript data types and data structures</h1>
              <span className="whitespace-nowrap text-sm text-gray-400">Há 1 dia</span>
            </header>
            <p className="line-clamp-4 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia deleniti unde distinctio eaque, quis
              dolorem porro suscipit minus! Culpa illo iusto totam, quibusdam aliquam quam laudantium saepe possimus
              expedita atque magnam similique laborum cum illum ex incidunt inventore itaque omnis? Nobis explicabo,
              quasi deleniti nam libero repellendus velit fuga?
            </p>
          </Link>
        </article>
      </section>
    </main>
  )
}
