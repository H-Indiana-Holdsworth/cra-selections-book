import { Button, H1 } from '@procore/core-react';
import { initialize } from '@procore/procore-iframe-helpers';

import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Auth() {
  let query = useQuery();
  let navigate = useNavigate();

  useEffect(() => {
    // console.log(query.get('code'));
    if (query.get('code')) {
      const fetchToken = async () => {
        const resp = await fetch(`.netlify/functions/exchange-token?code=${query.get('code')}`);
        const data = await resp.json();
        // console.log('data => ', data);
        if (data.access_token) {
          localStorage.setItem('token', data.access_token);
        }

        initialize().authentication.notifySuccess({});
      };
      fetchToken();
    }
  }, [query]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/me');
    }
  }, [navigate]);

  async function handleLogin() {
    const iframeHelperContext = initialize();
    const authUrl = `
    ${process.env.REACT_APP_PROCORE_LOGIN_URL}/oauth/authorize?client_id=${process.env.REACT_APP_PROCORE_CLIENT}&response_type=code&redirect_uri=${process.env.REACT_APP_PROCORE_CALLBACK}
  `;

    iframeHelperContext.authentication.authenticate({
      url: authUrl,
      onSuccess() {
        // This function fires when a message is received from the child window that
        // authentication was a success.
        window.location = '/me';
      },
      onFailure() {
        // If the child authentication window exits without sending a success message,
        // this function will execute
        alert('authentication failed!');
      },
    });
  }
  return (
    <div>
      <>
        <H1>Hello! Please login with Procore to continue to your Selections Book.</H1>
        <Button onClick={handleLogin}>Login with Procore</Button>
      </>
    </div>
  );
}
