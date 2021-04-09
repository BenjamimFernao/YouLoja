import React from "react";
import {Container, Row, Col}  from "react-bootstrap";

import Image from "next/image"



import "bootstrap/dist/css/bootstrap.min.css"

const Apresentacao = ()=>{
    return(
        <Container style={{height:"400px", width:"100%", backgroundColor:"#000000"}} fluid>
            <title>Teste de automação</title>
          <link rel="icon" href="/vercel.svg" />
          <link href = "https://fonts.googleapis.com/css2? family = Source + Sans + Pro: ital, wght @ 1.200 & display = swap "rel =" stylesheet "></link>
          <link href = "https://fonts.googleapis.com/css2? family = Tajawal: wght @ 200 & display = swap" rel = "stylesheet"></link>
            <Row>
                <Col className="ml-5 mt-5">
                    <h1 className="text-white" style={{fontFamily:"Source  Sans  Pro"}}>Para a sua compra em qualquer de momento de qualquer coisa! </h1>
                     <h1 className="text-white mt-5" style={{fontFamily:"Tajawal"}}>  Tens a YouLoja </h1>
                </Col>

                <Col style={{backgroundImage:"url(/loja.jpg)", backgroundSize:"cover", width:"100%", height:"400px"}}>
                    
                
                 </Col>

            </Row>
                    
          
            

        </Container>
    )
}

export default Apresentacao;