import { Calendar, ChevronLeft, ExternalLink, Github, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function Post() {
  return (
    <div className="mx-auto -mt-24 max-w-6xl px-4">
      <section className="flex gap-8 rounded-xl bg-gray-800 p-8 shadow-xl">
        <div className="flex flex-1 flex-col gap-2">
          <header>
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="flex items-start gap-1 text-sm uppercase text-blue-500 transition hover:text-blue-400"
              >
                <ChevronLeft aria-hidden={true} className="h-5 w-5 shrink-0" /> Voltar
              </Link>
              <Link
                target="_blank"
                href="https://github.com/adeonir"
                className="flex items-start gap-2 text-sm uppercase text-blue-500 transition hover:text-blue-400"
              >
                Ver no GitHub <ExternalLink aria-hidden={true} className="h-4 w-4 shrink-0" />
              </Link>
            </div>
            <h1 className="mt-4 text-2xl font-bold">JavaScript data types and data structures</h1>
          </header>
          <footer className="mt-auto flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-6">
            <Link href="#" className="flex items-center gap-1 text-gray-200 transition hover:text-gray-100">
              <Github aria-hidden={true} className="h-5 w-5 shrink-0 text-gray-500" /> adeonir
            </Link>
            <Link href="#" className="flex items-center gap-1 text-gray-200 transition hover:text-gray-100">
              <Calendar aria-hidden={true} className="h-5 w-5 shrink-0 text-gray-500" /> Há 1 dia
            </Link>
            <Link href="#" className="flex items-center gap-1 text-gray-200 transition hover:text-gray-100">
              <MessageCircle aria-hidden={true} className="h-5 w-5 shrink-0 text-gray-500" /> 5 comentários
            </Link>
          </footer>
        </div>
      </section>
      <main>
        <article className="mt-10 flex flex-col gap-4 px-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus placeat quidem illum cupiditate, est
            facilis harum, quisquam hic deleniti quae itaque, consequatur architecto? Similique perferendis quasi
            repellendus aspernatur doloremque perspiciatis soluta provident cum ab, nulla incidunt, voluptate quod
            ducimus voluptatem optio, sunt possimus expedita culpa recusandae? Labore mollitia nam eum?
          </p>
          <p>
            Eaque iusto eligendi sint dolorum molestiae voluptatibus aperiam odio natus quasi reprehenderit labore dicta
            officia odit ut commodi molestias aut doloribus in, minus id, numquam alias! Qui, tempora reiciendis!
            Voluptatibus beatae necessitatibus similique, placeat inventore cumque mollitia veniam consectetur tempora
            error dolorum ratione atque accusamus ad porro ea rem voluptatem!
          </p>
          <p>
            Rerum debitis officia exercitationem cum hic voluptatibus ipsam illo repellendus est. Magnam maiores amet
            commodi asperiores alias. Cupiditate aspernatur sapiente tempora, incidunt quisquam quidem similique illo
            molestias, ex voluptatum sequi sunt veritatis dolorem et consequatur delectus natus exercitationem voluptate
            veniam corrupti id! Nobis dolore sed consequatur doloribus ex soluta repellat!
          </p>
        </article>
      </main>
    </div>
  )
}
