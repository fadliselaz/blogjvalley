import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

const SideBar = (props) => {
    const active = props.active
    const menu = ['HOME', 'ABOUT', 'BLOG', 'CONTACT', 'CLIENT']

    useEffect(()=>{

    },[])

  return (
      <>
      <Head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
      </Head>
    <main className='sidebar'>
    <div className="brand bg-dark">
        <h3>jvalley</h3>
    </div>
    {menu.map((e, i)=>{
      e = e.toLowerCase()
      return (
        <Link href={e == 'home' ? `/` : `/${e}`} key={i} >
          <div className="menuItem" id={e}  >
            <a style={{
            color : active == e ? 'orange' : 'gray',
          }}>{e}</a>
          </div>
        </Link>
      )
    })}


  </main>
  </>
  )
}

export default SideBar
