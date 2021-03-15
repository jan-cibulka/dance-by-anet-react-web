import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Index from '../pages';
import Contact from '../pages/contact';
import Instructor from '../pages/instructor';
import { Schedule } from '../pages/schedule';
import Video from '../pages/video';
import Layout from './layout';
import { useAuth0 } from '@auth0/auth0-react';
import { Account } from '../pages/account';

interface AppProps {

}

export const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <>Ověřování</>
  }

  return (
        <Layout >
          <Route path='/' exact component={Index} />
          <Route path='/instructor' component={Instructor} />
          <Route path='/schedule' component={Schedule} />
          <Route path='/contact' component={Contact} />
          <Route path='/video' component={Video} />
          <Route path='/account' component={Account} />
        </Layout>
  )
}
