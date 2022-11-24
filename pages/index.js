import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>MR.HITS COMEME LOS HUEVOS!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bienvenido MR.HITS!" />
        <p className="description">
          A ver, pedazo de Mr Hits, me dijiste que ibas a poner el puto resumen, donde coño está? xq yo no lo veo eh, es que eres un poco subnormal tmbn te digo, pero bueno. Asique cállate de una puta vez y pon el fucking resumen.
        </p>
      </main>

<p>
Un cordial saludo, Lorenzo Haspot. Feliz San Valentín.
</p>
    
      <Footer />
    </div>
  )
}
