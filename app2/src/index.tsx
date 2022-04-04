import { App } from '@apps/shared/src/components';
import { Buffer } from 'buffer';
import * as React from 'react';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import Main from './components/Main';

window.Buffer = Buffer;
window.React = window.React || React;

const appWrapper = document.getElementById('app');

render(
  <StrictMode>
    <App>
      <Main />
    </App>
  </StrictMode>,
  appWrapper
);
