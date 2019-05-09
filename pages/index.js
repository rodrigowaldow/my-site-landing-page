import { Bounce, Fade } from 'react-reveal'
import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../components/Footer'
import IAmInterested from '../components/IAmInterested'
import Layout from '../layouts/Layout'
import LazyLoad from 'react-lazyload'
import Navbar from '../components/Navbar'
import Spring from '../components/Spring'
import { faTerminal, faDatabase, faLaptopCode, faCode } from '@fortawesome/free-solid-svg-icons'
import metadata from '../metadata'

class SectionFirst extends Component {
  render() {
    return (
      <div className="has-background-info">
        <section className="section">
          <div className="container">
            <LazyLoad>
              <Fade>
                <div id="avatar" />
              </Fade>
            </LazyLoad>
            <div className="box g-max-width">
              <div className="has-text-centered">
                {this.props.children}
              </div>
            </div>
          </div>
        </section>
        {/* <div className="has-background-dark" id="g-section-separator" /> */}
        <style jsx>{`
          #avatar {
            position: relative;
            z-index: 2;
            margin: 0 auto -96px;
            width: 192px;
            height: 192px;
            background-image: url('/static/ninja.svg');
            background-size: cover;
            // border: 3px white solid;
            border-radius: 100%;
          }
          #knowledge {
            position: relative;
            z-index: 2;
            margin: 0 auto -96px;
            width: 192px;
            height: 192px;
            background-image: url('/static/scroll.svg');
            background-size: cover;
            // border: 3px white solid;
            // border-radius: 100%;
          }
          .box {
            padding-top: calc(96px + 2rem);
          }
          // .container {
          //   padding: 0.4rem 0.4rem 0;
          // }
          #g-section-separator {
            margin-top: calc(7px - 8rem);
            height: 4rem;
          }
        `}</style>
      </div>
    )
  }
}

const Skillsets = () => (
  <div>
    <div className="content">
      <div className="column">
        <h1><FontAwesomeIcon icon={faLaptopCode} /></h1>
        <h3>Front-end Developer</h3>
        <p>I design responsive and friendly user interfaces.</p>
      </div>
      <br />
      <div className="columns content">
        <div className="column">
          <LazyLoad>
            <Fade>
              <div className="badges" id="knowledge-front" />
            </Fade>
          </LazyLoad>
          <h6>Known languages</h6>
          <ul className="list-unstyled">
            <li>CSS3</li>
            <li>Sass</li>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="column">
          <LazyLoad>
            <Fade>
              <div className="badges" id="weapons-front" />
            </Fade>
          </LazyLoad>
          <h6>Primary weapons</h6>
          <ul className="list-unstyled">
            <li>GitHub / GitLab</li>
            <li>Ionic</li>
            <li>Visual Studio Code</li>
          </ul>
        </div>
        <div className="column">
          <LazyLoad>
            <Fade>
              <div className="badges" id="iamgood-front" />
            </Fade>
          </LazyLoad>
          <h6>Things I'm good at</h6>
          <ul className="list-unstyled">
            <li>AngularJS</li>
            <li>Bulma</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
    </div>
    {/* <div className="" id="g-section-separator" /> */}
    <div className="content">
      <div className="column">
        <h1><FontAwesomeIcon icon={faCode} /></h1>
        <h3>Back-end Developer</h3>
        <p>I develop website logics and information systems.</p>
      </div>
      <br />
      <div className="columns content">
        <div className="column">
          <LazyLoad>
            <Fade>
              <div className="badges" id="knowledge-back" />
            </Fade>
          </LazyLoad>
          <h6>Known languages</h6>
          <ul className="list-unstyled">
            <li>C#</li>
            <li>ASP.NET</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>PHP</li>
          </ul>
        </div>
        <div className="column">
          <LazyLoad>
            <Fade>
              <div className="badges" id="weapons-back" />
            </Fade>
          </LazyLoad>
          <h6>Primary weapons</h6>
          <ul className="list-unstyled">
            <li>GitHub / GitLab</li>
            <li>SQL Studio</li>
            <li>Visual Studio</li>
            <li>Visual Studio Code</li>
          </ul>
        </div>
        <div className="column">
          <LazyLoad>
            <Fade>
              <div className="badges" id="iamgood-back" />
            </Fade>
          </LazyLoad>
          <h6>Things I'm good at</h6>
          <ul className="list-unstyled">
            <li>Sharepoint Server/Online</li>
            <li>Office365</li>
            <li>MVC</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

class SectionSecond extends Component {
  render() {
    return (
      <div className="has-background-info">
        <section className="section call-to-action has-text-centered">
          <IAmInterested />
        </section>
        <style jsx>{`
          .card-content {
            padding: 4rem 1rem;
          }
          .container {
            padding: 0 0.4rem;
          }
        `}</style>
      </div>
    )
  }
}

export default () => (
  <Layout>
    <div className="hero is-info is-fullheight">
      <div className="hero-head">
        <Navbar />
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <Bounce top>
            <Spring />
          </Bounce>
          <div className="subtitle">
            Hello there! I'm Rodrigo Waldow, a software developer from Santa Cruz do Sul, Brazil.
          </div>
        </div>
        
      </div>
    </div>

    <SectionFirst>
      <div className="content">
        <h1>
          Converting coffee <i className="e1a-coffee" /> to code{' '}
          <FontAwesomeIcon icon={faTerminal} /> since 2012
        </h1>
        <p style={{ maxWidth: '800px', margin: '0 auto' }}>
        I started learning programming by myself, I went to college and I still learn new tricks every day. 
        I have worked on several projects and collaborated with other skilled people to create and develop websites, 
        collaborative sites and information systems.
        </p>
      </div>
      <hr />
      <Skillsets />
    </SectionFirst>

    <SectionSecond />

    <Footer />

    <style global jsx>{`
      hr {
        margin: 3rem 0;
      }
      // section.section {
      //   padding-left: 0;
      //   padding-right: 0;
      // }
      ul.list-unstyled {
        display: inline;
        list-style: none;
        margin: 0;
      }
      .card {
        border-radius: 4px;
        height: 100%;
      }
      .card-image,
      .image > img {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      .badges {
        position: relative;
        z-index: 2;
        margin: 0 auto;
        width: 70px;
        height: 70px;
        margin-bottom: 1em
        background-size: cover;
      }
      #knowledge-front{
        background-image: url('/static/scroll2.svg');
      }
      #weapons-front{
        background-image: url('/static/blades.svg');
      }
      #iamgood-front{
        background-image: url('/static/target.svg');
      }
      #knowledge-back{
        background-image: url('/static/scroll.svg');
      }
      #weapons-back{
        background-image: url('/static/shuriken.svg');
      }
      #iamgood-back{
        background-image: url('/static/gong.svg');
      }
    `}</style>
  </Layout>
)
