import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import styled from 'styled-components';
import Index from '../pages';
import Contact from '../pages/contact';
import Instructor from '../pages/instructor';
import { Schedule } from '../pages/schedule';
import Layout from './layout';

interface AppProps {

}

export default function App({ }: AppProps) {
  return (
    <BrowserRouter >
      <Layout >
        <Route path='/' exact component={Index}/>
        <Route path='/instructor' component={Instructor}/>
        <Route path='/schedule' component={Schedule}/>
        <Route path='/contact' component={Contact}/>     
      </Layout>
    </BrowserRouter>
  )
}
