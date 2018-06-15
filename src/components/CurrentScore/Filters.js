import React from 'react';

export const FilterShadow = () => {
  return (
    <defs>
      <filter id="shadow">
        <feDropShadow dx="1" dy="1" stdDeviation="2" />
      </filter>
    </defs>
  );
};
