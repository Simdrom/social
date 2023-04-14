import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Button } from 'react-bootstrap';

import styles from './VerticalMenu.module.css'

const VerticalMenu = React.memo(() => {
  return (
    <Nav className="flex-column">
      <Nav.Item as={Button} variant="link" size="lg" aria-label="Go to Home Page" className={styles.button}>
        <Link to="/" className={styles.linkWithoutLinkStyle}>Inicio</Link>
      </Nav.Item>
      <Nav.Item as={Button} variant="link" size="lg" aria-label="Go to About Page" className={styles.button}>
        <Link to="/about" className={styles.linkWithoutLinkStyle}>About</Link>
      </Nav.Item>
      <Nav.Item as={Button} variant="link" size="lg" aria-label="Go to Else Page" className={styles.button}>
        <Link to="/nothing-here" className={styles.linkWithoutLinkStyle}>Nothing Here</Link>
      </Nav.Item>
    </Nav>
  );
});

export default VerticalMenu;