import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GridContext from '../context/gridContext';


function Navbar() {
  const gridContext = useContext(GridContext);
  
  const toggleIsGrid= () => {
    gridContext.setIsGrid(!gridContext.isGrid);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container px-4 px-lg-5">

        <Link className="navbar-brand" to="/issues">ComicVine</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/issues">Issues</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/characters" >Characters</Link>
            </li>
          </ul>
        </div>

        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={toggleIsGrid} checked={gridContext.isGrid} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{gridContext.isGrid ? 'Grid' : 'List'}</label>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
