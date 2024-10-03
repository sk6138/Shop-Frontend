
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';


const onRedirectCallback = (appState) => {
  window.history.replaceState(
    {},
    document.title,
    appState?.returnTo || window.location.pathname
  );
};


createRoot(document.getElementById('root')).render(
 
  <Auth0Provider
  domain="dev-u4zotyqgup2z3tt1.us.auth0.com"
  clientId="hjhhfs9XBpuo5D2Cf6Rhfl4wjcHzuzTZ"
  redirectUri={window.location.origin}
  onRedirectCallback={onRedirectCallback}
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>  
  <App />
</Auth0Provider>,
)
