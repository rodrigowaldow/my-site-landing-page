import React, { Component } from 'react'

import Footer from '../components/Footer'
import Layout from '../layouts/Layout'
import Navbar from '../components/Navbar'

export default () => (
    <Layout>
      <div className="hero is-info has-text-centered">
        <div className="hero-head">
          <Navbar />
        </div>
        <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-three-fifths">
              <img src="static/success.png" style={{marginBottom: 60 + 'px', maxWidth: 300 + 'px'}}/>
              <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Message received. Thanks!</h1>
              <h2 className="subtitle is-size-4-desktop">I'll be in touch with you shortly.</h2>
              <a className="button is-info is-outlined is-medium is-inverted" style={{marginTop: 30 + 'px', fontWeight: 500}} href="/">Back to home</a>
            </div>
          </div>
        </div>
        </div>
      </div>
  
      <Footer />
    </Layout>
  )