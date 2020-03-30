import Link from 'next/link'
import React from 'react'
import Head from 'next/head'

interface Props { }

interface State {

}

export default class About extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <>
        <Head>
          <title>Ryan Fornara</title>

          {/*TEMPORARY - MAKE CUSTOM FONT */}
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />

          <link rel="stylesheet" href="/css/style.css" />
        </Head>
        <div className="hero">
          <h2>Ryan Fornara</h2>
          <div className="sub">
            <p>PROFESSIONAL UX DESIGNER, ENTREPRENEUR</p>
          </div>
          <nav>
            <div className="nav-item instagram">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="nav-item twitter">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="nav-item linkedin">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <div className="nav-item github">
              <i className="fab fa-github"></i>
            </div>
            <div className="nav-item soundcloud">
              <i className="fab fa-soundcloud"></i>
            </div>
          </nav>
          <ul>
            <li>ABOUT</li>
            <li>PORTFOLIO</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </>
    )
  }
}
