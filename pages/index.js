import React from "react"

import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

import "bootstrap/dist/css/bootstrap.min.css"



export default function App(){
  return (
    <section> 

      <Head>
          <title>Teste de automação</title>
          <link rel="icon" href="/vercel.svg" />
          <link href = "https://fonts.googleapis.com/css2? family = Source + Sans + Pro: ital, wght @ 1.200 & display = swap "rel =" stylesheet "></link>
          <link href = "https://fonts.googleapis.com/css2? family = Tajawal: wght @ 200 & display = swap" rel = "stylesheet"></link>
      
      </Head>
      <h1>Bem vindo ao sistema!</h1>
      <Image src="/vercel.svg" width={144} height={200} alt="Imagem da vercel" />
      
      <Link href="/sobreNos">
        <a>Ver</a> 

       </Link>
      </section>
  )
}