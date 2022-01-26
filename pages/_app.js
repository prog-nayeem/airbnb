import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import ContextProvider from '../components/context/Context';
import ProgressBar from '@badrap/bar-of-progress';
import { Router } from 'next/dist/client/router';

const progress = new ProgressBar({
  size: 3,
  color: '#f57373',
  className: 'z-50',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </Provider>
  );
}

export default MyApp;
