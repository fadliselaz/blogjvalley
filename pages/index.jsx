import Head from 'next/head'
import Navbar from '../component/navbar/Navbar'
import { useEffect } from 'react'
import {Table} from 'react-bootstrap'
import Dict from '../model/Dict'


const Home = ({data}) => {
  useEffect(()=>{
    console.log(data);
    
  },[])
  return (
    <>
    <Head>
        <title>home page</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="fadliselaz" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Navbar active='home'/>
    <div className='home'>
    
        <Table striped bordered hover variant='dark'>
      <thead>
        <tr>
          <th>#</th>
          <th>username</th>
          <th>email</th>
          <th>image</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e)=>{
          return(
            <tr id={e.id} key={e.id}>
              <td>{e.id}</td>
              <td>{e.username}</td>
              <td>{e.email}</td>
              <td>{e.image}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>




    </div>


  <style jsx global>{`
    .home{
        width : 100vw;
        height : 100vh;
        display : flex;
        justify-content : center;
        align-items : center;
        padding : 0px 16%;
    }
  `}</style>
    </>
  )
}

Home.getInitialProps = async ()=>{
  const res = await fetch(' http://localhost:4000/userdata')
  const data = await res.json()
  return{
    data : data
  }

}

export default Home
