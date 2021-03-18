import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import About from '../pages/about';
import Contact from '../pages/contact';
import Instructor from '../pages/instructor';
import { Schedule } from '../pages/schedule';
import Video from '../pages/video';
import Layout from './layout';
import { useAuth0 } from '@auth0/auth0-react';
import Account from '../pages/account';
import LecturesRoster from '../pages/lectures-roster';
import LecturesAdmin from '../pages/lectures-admin';

interface AppProps {

}

export const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <>Ověřování</>
  }

  return (
    <Layout >
      <Route path='/' exact component={About} />
      <Route path='/instructor' component={Instructor} />
      <Route path='/schedule' component={Schedule} />
      <Route path='/contact' component={Contact} />
      <Route path='/video' component={Video} />
      <Route path='/account' component={Account} />
      <Route path='/lecturesroster' component={LecturesRoster} />
      <Route path='/lecturesadmin' component={LecturesAdmin} />
    </Layout>
  )
}
