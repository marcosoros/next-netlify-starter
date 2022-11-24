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
          MR.HITS una foto
        </p>
      </main>

      <Footer />
    </div>
  )
}
