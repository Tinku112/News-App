

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ""
    }
  }

  postData(e) {
    e.preventDefault();
    this.props.changeSearch(this.state.search); // Pass search state to App
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg background sticky-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-light" to="/">NEWS APP</NavLink>
          <button className="navbar-toggler border-3 border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="material-symbols-outlined text-light">menu</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><NavLink className="nav-link text-light" to="/">All</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" to="/Politics">Politics</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" to="/Crime">Crime</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" to="/Education">Education</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" to="/Science">Science</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" to="/Technology">Technology</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" to="/Entertainment">Entertainment</NavLink></li>
              <li className="nav-item dropdown">
                <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Other
                </a>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/Sports">Sports</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Cricket">Cricket</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/IPL">IPL</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Jokes">Jokes</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/India">India</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/World">World</NavLink></li>
                </ul>
              </li>

              {/* Language Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Language
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#" onClick={() => this.props.changeLanguage('hi')}>Hindi</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => this.props.changeLanguage('en')}>English</a></li>
                </ul>
              </li>
            </ul>

            {/* Search Form */}
            <form className="d-flex" role="search" onSubmit={(e) => this.postData(e)}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
              />
              <button className="btn btn-outline-success text-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

