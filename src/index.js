import { AppStateProvider } from './store' 
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './teleporthq/style.module.css'
import ContactUs from './teleporthq/pages/contact-us'
import Zoldfaq from './teleporthq/pages/zoldfaq'
import RequestDemo from './teleporthq/pages/request-demo'
import Home from './teleporthq/pages/home'
import ZoldpricingBackup from './teleporthq/pages/zoldpricing-backup'
import Pricing from './teleporthq/pages/pricing'
import TermsOfService from './teleporthq/pages/terms-of-service'
import PrivacyPolicy from './teleporthq/pages/privacy-policy'

const App = () => {
  return (
    <Router>
      <AppStateProvider>
        <Route exact component={ContactUs} path="/contact-us" />
        <Route exact component={Zoldfaq} path="/zoldfaq" />
        <Route exact component={RequestDemo} path="/request-demo" />
        <Route exact component={Home} path="/" />
        <Route exact component={ZoldpricingBackup} path="/zoldpricing-backup" />
        <Route exact component={Pricing} path="/pricing" />
        <Route exact component={TermsOfService} path="/terms-of-service" />
        <Route exact component={PrivacyPolicy} path="/privacy-policy" />
      </AppStateProvider>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
