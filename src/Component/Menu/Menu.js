import React from 'react'
import {Link} from "react-router-dom"

const Menu = () => {
  return (
    <header>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <Link class="nav-link text-light" to="/">Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto fs-5">
        {/* <li class="nav-item nav-link ">
          <Link class="nav-link text-light" to="/">Home</Link>
        </li> */}
        <li class="nav-item nav-link">
          <Link class="nav-link" to="/galerie">Galerie</Link>
        </li>
        <li class="nav-item nav-link">
          <Link class="nav-link" to="/tarifs">Tarifs</Link>
        </li>
        <li class="nav-item nav-link">
          <Link class="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Menu

/**

 */