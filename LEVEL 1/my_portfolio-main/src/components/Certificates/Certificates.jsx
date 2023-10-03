import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Particle from '../Particle';
import CertificateCard from './CertificateCard';
import jsBasic from '../../Assets/Cerificates/jsBasic.jpg';
import JsIntermediate from '../../Assets/Cerificates/JsIntermediate.jpg';
import react from '../../Assets/Cerificates/react.png';
import jquery from '../../Assets/Cerificates/jquery.png';
import css from '../../Assets/Cerificates/css.png';
import dom from '../../Assets/Cerificates/dom.png';
import html from '../../Assets/Cerificates/html.png';


const Certificates = () => {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My  <strong className="purple">Certificates </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few certificates I've earn.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={jsBasic}
                            title={"Javascript Basics"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={JsIntermediate}
                            title={"Javascript Intermediate"}
                        />
                    </Col>
                
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={react}
                            title={"Introduction to react"}
                        />
                    </Col>
                   
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={jquery}
                            title={"Introduction to jQuery"}
                        />
                    </Col>
                   
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={css}
                            title={"Introduction to CSS"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={dom}
                            title={"Introduction to DOM"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={html}
                            title={"Introduction to HTML"}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Certificates