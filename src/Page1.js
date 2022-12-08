import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Carousel  from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'

export default function Page1(){
    return(
        <>
        <div className='container-fluid '>
            <div className='row nav'>
                <div className='col-lg-7'>&nbsp;</div>
                <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/" className='text-primary ml-3'>Home</Nav.Link>
                    <Nav.Link href="/" className='text-primary ml-3'>About Us</Nav.Link>
                    <Nav.Link href="/" className='text-primary ml-3'>Our Service</Nav.Link>
                    <Nav.Link href="/" className='text-primary ml-3'>Our Protfolio</Nav.Link>
                    <Nav.Link href="/" className='text-primary ml-3'>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
        <div>
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100 mb-5" src={img1} alt="First slide" height="600px"/>
                    <Carousel.Caption>
                        <h3>Game Development</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 mb-5" src={img2} alt="First slide" height="600px"/>
                    <Carousel.Caption>
                        <h3>Game Development</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 mb-5" src={img3} alt="First slide" height="600px"/>
                    <Carousel.Caption>
                        <h3>Game Development</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
        </>
    )
}