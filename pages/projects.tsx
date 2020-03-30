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

          <link rel="stylesheet" href="/css/style.css" />
        </Head>
        <h2>Home Page</h2>
        <Link href='/about'><a>About</a></Link>
      </>
    )
  }
}
