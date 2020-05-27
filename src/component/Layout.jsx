import Navbar from "./navbar/Navbar"
import Head from 'next/head'


const Layout = (props) => {

  
  return (
    <>
      <div className='bg-light'>
        <Head>
            <title>MyNextAPp</title>
            <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/simplex/bootstrap.min.css" rel="stylesheet" integrity="sha384-6ge4b1Lr1zrvyGvm5pdAkc3NMa97XYhFPBWsZsT6O3eOU+hqURR1bQEMm11Grf3a" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,300;0,400;0,900;1,200;1,300;1,900&display=swap" rel="stylesheet" />
            <meta name="description" content="next app pertama saya"></meta>
        </Head>
        <Navbar />

        {props.children}

    </div>
    </>
  )
}

export default Layout
