import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './routes/App.js'
import NotFound from './components/NotFound.js'

const Root = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route component={NotFound} /> {/* Si aucune route ne correspond à ce qui est affiché dans l'url, on affiche le composant NotFound */}
        </Switch>
    </BrowserRouter>
  )
}

export default Root