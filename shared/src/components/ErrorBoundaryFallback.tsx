import { FallbackProps } from 'react-error-boundary';

export const ErrorBoundaryFallback = ({ error }: FallbackProps) => (
    <div style={{ backgroundColor: 'white', padding: '0.8125rem' }}>
      <h2 style={{ color: '#FF2800', marginTop: 0 }}>
        Something went wrong! ☹
      </h2>
      <p style={{ color: 'gray' }}>Here's what we know...</p>
      <p style={{ color: 'gray' }}>
        <strong>Error:</strong> {error.toString()}
      </p>
    </div>
  );;

ErrorBoundaryFallback.displayName = 'ErrorBoundaryFallback';
