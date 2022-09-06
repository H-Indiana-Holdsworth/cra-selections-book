import { H1, H2, H3 } from '@procore/core-react';
import React, { useEffect, useState } from 'react';

export default function Me() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const resp = await fetch(`.netlify/functions/me?token=${localStorage.getItem('token')}`);
      const data = await resp.json();
      setEmail(data.email);
    };
    loadData();
  }, []);

  return (
    <div>
      <header>
        <H1>Welcome to your Selections Book!</H1>
        <H2>Click on the section(s) that you would like to make selections in</H2>
        <H3>Logged in as: {email}</H3>
      </header>
    </div>
  );
}
