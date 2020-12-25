import React from 'react';
import { render } from "react-dom";
import { Router, Link } from '@reach/router'
import Home from './Home'
import Layout from './../components/Layout'
import Portfolio from './../pages/Portfolio'
import Contact from './../pages/Contact'
import Intro from './Intro'


const index = props => {
  return (
    <div class="overflow-hidden">
      <Layout />
      <Home />
      <Intro />
      <Portfolio />
      <Contact />
    </div>
  )
};

export default index;
