import { Building, ExternalLink, Github, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="-mt-24">
      <section className="mx-auto flex max-w-4xl gap-8 rounded-xl bg-gray-800 p-8 shadow-xl">
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
              href="https://github.com/adeonir"
              className="flex items-start gap-1 text-sm text-blue-500"
              target="_blank"
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
    </main>
  )
}
