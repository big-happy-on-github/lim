import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <header>
        <title>lims extravaganza</title>
        <link rel="icon" href="/favicon.ico" />
      </header>

      <main>
        <header title="lim's extravaganza" />
        <p class="description">
          A collection of miscellaneous <code>code</code>
        </p>
      </main>

      <footer><footer />
    </div>
  )
}
