'use client'
import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897;
    const birthTime = new Date('1987-08-28T02:55:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 30,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Bergen, Norway',
    link:
    'https://maps.app.goo.gl/59amoY6ngWJy4EVc6',
  },
];

export default data;
