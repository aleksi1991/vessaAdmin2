import React from 'react';

const Locations = ({ locations, setValidation }) => {
  return (
    <div>
      <h2>Locations</h2>
      {locations.map((location) => (
        <div key={location._id} style={{ display: 'flex' }}>
          <div style={{ marginRight: '1rem' }}>{location.name}</div>
          <div style={{ marginRight: '1rem' }}>{location.type}</div>
          <div style={{ marginRight: '1rem' }}>{location.payable}</div>
        </div>
      ))}
    </div>
  );
};

export default Locations;
