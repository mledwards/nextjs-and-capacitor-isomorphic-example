// import App from 'next/app'
import { Auth0Provider } from '@auth0/auth0-react';

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="mymotorhub.eu.auth0.com"
      clientId="OIJgUdKZhRgFeMcKzxCNdL19vpiiRAEa"
      redirectUri="capacitor://localhost"
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
