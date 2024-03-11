export default function BlogPost() {
  return (
    <>
      <h1 className="mb-8 text-4xl font-black">Título de post</h1>
      <main className="mx-auto min-h-[80vh] max-w-2xl max-sm:px-6">
        <div className="mb-6 flex justify-between">
          <time className="text-[rgba(113,128,150)]">Fri Mar 19 2021</time>
          <a href="/blog" className="text-[rgba(113,128,150)] underline">
            ← Voltar para blog
          </a>
        </div>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nam
            repellendus ad tempora laboriosam iure atque doloremque? Quos quod
            at quasi soluta voluptatibus laudantium cumque! Eveniet, quibusdam!
            Natus, ullam tempora.
          </p>
        </div>
      </main>
    </>
  )
}
