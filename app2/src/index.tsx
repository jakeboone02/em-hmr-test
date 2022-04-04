import App from '@apps/shared/src/components/App';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import Main from './components/Main';

const appWrapper = document.getElementById('app');

render(
  <StrictMode>
    <App>
      <Main />
    </App>
  </StrictMode>,
  appWrapper
);
