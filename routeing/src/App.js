import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div className="container text-center mt-5">
      <Route exact path="/" component={ Home } />
      <Route path path="/about" component={ About } />
      <Route path path="/blog/:id" component={ Blog } />
    </div>
  </BrowserRouter>
)

const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <p><Link to= "/about">About</Link></p>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h1>about</h1>
    </div>
  )
}

const Blog = props => {
  const { id } = props.match.params

  return (
    <div>
      <h1>{ id }番目の記事です</h1>
    </div>
  )
}

export default App
