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
        <Header title="Croissant Enterprise S.A." />
        <p className="description">
          Croissant Enterprises S.A ofrecemos los mejores madalenas para la salud mental virtualmente expositivo, actualemnte muchos hits como MR.HITS sufren de gilipollitis y con croissant enterprise vendemos madalenas para poder curar a gente como MR.HITS. Juntos podemos madalenar al pobre hits para poder hacer un mundo mejor. 
        </p>
      </main>

<p>
Un cordial saludo, Lorenzo Haspot. Feliz San Valentín.
</p>
    
      <Footer />
    </div>
  )
}
