import React from 'react';

export const IsItems = () => {
  const token = localStorage.getItem("jwt-token")
  return (
    <>
      <h1>Is item</h1>
      <p>{token}</p>
    </>

  );
};
