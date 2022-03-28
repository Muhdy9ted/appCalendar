import React, { lazy, Suspense } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import CssBaseline from "@mui/material/CssBaseline";
import CircularProgress from '@mui/material/CircularProgress';

const HomePage = lazy(() => import('./webpages/homepage/homepage'));

function App() {
  return (
    <Suspense fallback={<CircularProgress color='secondary' />}>
      <CssBaseline />
      <Switch>
        <Route exact path= '/' component={HomePage} />
        <Redirect to='/' />
      </Switch>
    </Suspense>
  );
}

export default App;
