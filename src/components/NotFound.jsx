// NotFound displays a 404 error page and shows error details if available.
import React from 'react';
import { useLocation } from 'react-router-dom';

function NotFound() {
  const location = useLocation();
  const error = location.state && location.state.error;
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist or an error occurred.</p>
      {error && (
        <div style={{ color: 'red', marginTop: 16 }}>
          <strong>Error Details:</strong>
          <pre>{error}</pre>
        </div>
      )}
    </div>
  );
}

export default NotFound;
