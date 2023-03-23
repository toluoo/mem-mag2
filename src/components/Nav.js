import {React, Component} from "react";
import "./Nav.css"
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
  return(

    <div className="navbar">
      <div className="logo">MemMag</div>
       <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/ClassPhotos">Class Photos</Link>
          <Link to="/funCorner">Fun Corner</Link>
          <NavDropdown title = "Themes" id = "themeList" >
            <NavDropdown.Item eventKey="Ashley">Ashley</NavDropdown.Item>
            <NavDropdown.Item eventKey="Laiba">Laiba</NavDropdown.Item>
            <NavDropdown.Item eventKey="Michelle">Michelle</NavDropdown.Item>
            <NavDropdown.Item eventKey="Tolu">Tolu</NavDropdown.Item>
          </NavDropdown>
       </div>
    </div>
  );
};
export default Nav;
