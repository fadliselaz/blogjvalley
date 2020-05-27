import './blog.scss'
import Navbar from '../../component/navbar/Navbar'
import { useEffect } from 'react'
import {Card, Button} from 'react-bootstrap'
import Head from 'next/head'

const Blog = ({data}) => {

  return (
    <>
    <Head>
        <title>Blog page</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Dapatkan Tutorial web programing gratis" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="fadliselaz" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Navbar active='blog'/>
        <h1 className='title'>Blog</h1>
    <div className='containerBlog'>
    
        {data.map((e)=>{
            const image = e.image.formats.medium.url
            console.log(image)
            return(
                
                <Card style={{ width: '48%' }} key={e.id} className='card'>
                <Card.Img variant="top" src={`https://admin.jvalleyschool.com${image}`} alt='gambar jvalley'/>
                <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text className='cardText'>
                    {e.trigerText}
                    </Card.Text>
                    <Button variant="primary">selengkapnya</Button>
                </Card.Body>
                </Card>
            )
        })}

    </div>
    </>
  )
}

Blog.getInitialProps = async ()=>{
    const res = await fetch('https://admin.jvalleyschool.com/blog-contents')
    const data = await res.json()
    return{
        data : data
    }
}

export default Blog
