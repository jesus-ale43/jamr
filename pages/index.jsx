import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Jesus A.</title>
        <meta name="description" content="A boy who has nothing to do" />
        <link rel="icon" href="assets/favicon.ico" />
      </Head>
      <p className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">Hello World!</p>
    </div>
  )
}
