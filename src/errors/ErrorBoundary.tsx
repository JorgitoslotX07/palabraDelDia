import React, { useState, useEffect } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [errorInfo, setErrorInfo] = useState<string | null>(null);

  useEffect(() => {
    // Cuando ocurra un error en los componentes hijos, capturarlo
    const handleError = (event: ErrorEvent) => {
      setHasError(true);
      setError(event.error);
      setErrorInfo(event.message);
    };

    // Escuchar errores globales
    window.addEventListener('error', handleError);

    return () => {
      // Limpiar el listener cuando el componente se desmonte
      window.removeEventListener('error', handleError);
    };
  }, []);

  if (hasError) {
    // Renderizar el fallback en caso de error
    return (
      <div>
        <h1>Ha ocurrido un error en el componente.</h1>
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {error && error.toString()}
          <br />
          {errorInfo}
        </details>
      </div>
    );
  }
  return <>{children}</>;
};

export default ErrorBoundary;
