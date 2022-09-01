import React from 'react';

export default function Selection() {
  const handleClick = async () => {
    try {
      const resp = await fetch(
        `.netlify/functions/selections?token=${localStorage.getItem('token')}`
      );
      const data = await resp.json();
      console.log('data =>', data);
      return data;
    } catch (error) {}
  };

  return (
    <div>
      <button onClick={handleClick}>Create Submittal</button>
    </div>
  );
}
