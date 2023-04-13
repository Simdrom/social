import React from 'react';
import { Nav } from 'react-bootstrap';

import './VerticalMenu.css'

const VerticalMenu = () => {
  return (
    
      <Nav className="flex-column" id='verticalMenu'
    //    style={{border: 'none', boxShadow: 'none'}}
      >
        <Nav.Item>
          <Nav.Link href="#" active className='nav-link-custom'>
            Item 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className='nav-link-custom'>
            Item 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className='nav-link-custom'>
            Item 3
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className='nav-link-custom'>
            Item 4
          </Nav.Link>
        </Nav.Item>
      </Nav>
  );
};

export default VerticalMenu;