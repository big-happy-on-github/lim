import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>lim extravaganza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="lim's extravaganza" />
        <p className="description">
          A collection of miscellaneous <code>code</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
