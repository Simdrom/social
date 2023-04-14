import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Container, Col, Row } from 'react-bootstrap';

import VerticalMenu from "./components/Common/VerticalMenu/VerticalMenu";

import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About"
import NoMatch from "./components/Pages/NoMatch/NoMatch"

import styles from './App.module.css'

const App = () => {
  return (

    <React.StrictMode>
      <Container fluid="md">
        <Row>
          <Col xs={6} md={4} className={styles.redBackground} >
            <VerticalMenu></VerticalMenu>
          </Col>
          <Col xs={6} md={4} className={styles.blueBackground} >
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<NoMatch />} />
              </Route>
            </Routes>
          </Col>
          <Col xs={6} md={4} className={styles.greenBackground} >Other column</Col>
        </Row>
      </Container >
    </React.StrictMode>
  );
}

export default App;
