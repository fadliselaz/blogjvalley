import './about.scss'
import Navbar from '../../component/navbar/Navbar'
import Head from 'next/head'

const index = () => {
  return (
      <>

    <Head>
    <title>About page</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="fadliselaz" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <Navbar active='about'/>
    <div className='containerAbout'>
      <h1>About</h1>
    </div>
    </>
  )
}

export default index
