import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Index from '../pages';
import Contact from '../pages/contact';
import Instructor from '../pages/instructor';
import { Schedule } from '../pages/schedule';
import Video from '../pages/video';
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
        <Route path='/video' component={Video}/>     
      </Layout>
    </BrowserRouter>
  )
}
