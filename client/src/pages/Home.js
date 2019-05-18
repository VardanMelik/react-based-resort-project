import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
      <Hero>
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
          our rooms
          </Link>
        </Banner>
      </Hero>
        <Services />
      </React.Fragment>
    )
  }
}
export default Home
