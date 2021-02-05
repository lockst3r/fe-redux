import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const onLineStatus = () => {
      setStatus(true);
    };

    const offLineStatus = () => {
      setStatus(false);
    };

    window.addEventListener('online', onLineStatus);
    window.addEventListener('offline', offLineStatus);

    return () => {
      window.removeEventListener('online', onLineStatus);
      window.removeEventListener('offline', offLineStatus);
    };
  }, []);

  return status ? (
    <div className="status">online</div>
  ) : (
    <div className="status status_offline">offline</div>
  );
};

export default ConnectionStatus;
