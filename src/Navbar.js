import React from 'react'
import { useSelector } from 'react-redux'
export const Navbar = () => {
  const amount = useSelector(state => state.amount)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand text-white" to="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" to="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" to="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" to="#">Action</a>
          <a className="dropdown-item" to="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" to="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" to="#">Disabled</a>
      </li>
    </ul>
    <button className="btn btn-primary">Your Balance: {amount}</button>
  </div>
</nav>
        </div>
    )
}
