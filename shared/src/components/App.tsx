import { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorBoundaryFallback } from './ErrorBoundaryFallback';

export const App: FC = ({ children }) => (
  <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
    {children}
  </ErrorBoundary>
);

App.displayName = 'App';
