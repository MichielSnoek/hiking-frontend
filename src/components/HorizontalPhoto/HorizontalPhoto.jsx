import React from 'react'
import './HorizontalPhoto.css';
import { Container, Jumbotron } from 'react-bootstrap';

export default function HorizontalPhoto() {
    return (

        <Jumbotron fluid>
            <Container className="jumbotron-fluid container-photo-central">
            <div className="hero-title">
                <h1>Hi, king...</h1>
                <h3>...walk towards your dreams</h3>
            </div>   
            </Container>
        </Jumbotron>
        // {/* <div className="jumbotron-fluid">
        // <div className="container container-photo-central">
        //     <img className="Photo-central" src="/Chile_Paine.jpg" alt="central-main-img" fluid/>
        //     {/* <h2 className="display-3">Hi, king...</h2> */}
        //     {/* <p>...walk towards your dreams</p> */}
        // </div>
        // </div> */}


    )
}
