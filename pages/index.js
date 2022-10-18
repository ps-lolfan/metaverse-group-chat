import Head from "next/head"
import Login from "../components/Login"

const Home = () => {

  const isAuthenticated = false;

  if (!isAuthenticated) return <Login />
  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home
