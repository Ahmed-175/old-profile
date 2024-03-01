import React from 'react'
import "./container.css";
import {MyComponent , About , Services , Profile} from "./components/index-con";


function Container() {
  return (
    <>
    <section className='section-con'>
      <MyComponent />
      <About />
      <Services />
      <Profile />
    </section>
    </>

  )
}

export default Container
