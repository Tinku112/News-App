import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../ClassComponents/Home.jsx'
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: 'hi',               // Default language is Hindi
      search: "",                   // Search term
      currentCategory: "All"        // Default category
    }

    this.changeLanguage = this.changeLanguage.bind(this)
    this.changeSearch = this.changeSearch.bind(this)
    this.changeCategory = this.changeCategory.bind(this)
  }

  changeLanguage(selectedLanguage) {
    this.setState({ language: selectedLanguage })
  }

  changeSearch(searchQuery) {
    this.setState({ search: searchQuery })
  }

  changeCategory(category) {
    this.setState({ currentCategory: category })
  }

  render() {
    const { language, search } = this.state;

    return (
      <BrowserRouter>
        <NavBar
          changeLanguage={this.changeLanguage}
          changeSearch={this.changeSearch}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                language={language}
                search={search}
                q="All"
              />
            }
          />
          <Route
            path="/All"
            element={
              <Home
                language={language}
                search={search}
                q="All"
              />
            }
          />
          <Route
            path="/Politics"
            element={
              <Home
                language={language}
                search={search}
                q="Politics"
              />
            }
          />
          <Route
            path="/Crime"
            element={
              <Home
                language={language}
                search={search}
                q="Crime"
              />
            }
          />
          <Route
            path="/Education"
            element={
              <Home
                language={language}
                search={search}
                q="Education"
              />
            }
          />
          <Route
            path="/Science"
            element={
              <Home
                language={language}
                search={search}
                q="Science"
              />
            }
          />
          <Route
            path="/Technology"
            element={
              <Home
                language={language}
                search={search}
                q="Technology"
              />
            }
          />
          <Route
            path="/Entertainment"
            element={
              <Home
                language={language}
                search={search}
                q="Entertainment"
              />
            }
          />
          <Route
            path="/Sports"
            element={
              <Home
                language={language}
                search={search}
                q="Sports"
              />
            }
          />
          <Route
            path="/Cricket"
            element={
              <Home
                language={language}
                search={search}
                q="Cricket"
              />
            }
          />
          <Route
            path="/IPL"
            element={
              <Home
                language={language}
                search={search}
                q="IPL"
              />
            }
          />
          <Route
            path="/Jokes"
            element={
              <Home
                language={language}
                search={search}
                q="Jokes"
              />
            }
          />
          <Route
            path="/India"
            element={
              <Home
                language={language}
                search={search}
                q="India"
              />
            }
          />
          <Route
            path="/World"
            element={
              <Home
                language={language}
                search={search}
                q="World"
              />
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    )
  }
}
