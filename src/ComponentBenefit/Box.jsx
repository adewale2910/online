import React from 'react';
import { Card } from '../ComponentBenefit/data';

const Box = () => {
  return (
    <div>
      <div>
        {Card.map((item, i) => (
          <div key={i}>
            {item.head}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Box;
