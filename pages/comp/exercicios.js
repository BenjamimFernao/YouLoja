import React from "react";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css"

import {Container, Row, Media, Button, Alert} from "react-bootstrap"

 function Exercicios(){
    return(
        <section>
          <Head>
                <title>Teste de automação</title>
                <link rel="icon" href="/vercel.svg" />
                <link href = "https://fonts.googleapis.com/css2? family = Source + Sans + Pro: ital, wght @ 1.200 & display = swap "rel =" stylesheet "></link>
                <link href = "https://fonts.googleapis.com/css2? family = Tajawal: wght @ 200 & display = swap" rel = "stylesheet"></link>  
         </Head>


         <Container fluid>
            
            <Row >
                <h1 style={{fontFamily:"Source Sans Pro"}} className="btn btn-primary">Exercicios!</h1>
                
            </Row>
            <Row className="m-5">
            <Media >
                    <img width={100} height={100} src="/favicon.ico" />
                    <Media.Body className="bg-light p-3">
                        <h5 style={{fontFamily:"Source Sans Pro"}} >Benjamim Fernao</h5>
                        <h6 style={{fontFamily:"Tajawal"}} className="text-muted">Programador Sénior</h6>
                        <p style={{fontFamily:"Tajawal"}}>Estamos muito felizes com a plataforma</p>
                        <Button style={{fontFamily:"Tajawal"}}>Conhecer</Button>
                    </Media.Body>
                </Media>
            </Row>

            <Row className="m-5">

                <Alert variant="primary">
                <h1 style={{fontFamily:"Source Sans Pro"}} >
                    
                    Vamos testar o alert
                </h1>
                

                </Alert>

            </Row>
        </Container>
        </section>
        
    )
}
export default Exercicios;