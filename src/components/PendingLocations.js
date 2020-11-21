import React from 'react';
import pendingLocationsService from '../services/pendingLocations';

const PendingLocations = ({ pendingLocations, setValidation, label, buttonLabel }) => {
  
  const validate = async (location) => {
    const validatedLocation = {
      ...location,
      validated: true,
    }

    const deleteFormPendingLocations = await pendingLocationsService.validateLocation(location);
    
    if (deleteFormPendingLocations) {
      const updatedLocation = await pendingLocationsService.updateLocation(validatedLocation);
      setValidation(updatedLocation)
    }

    // const response = await pendingLocationsService.updateLocation(validatedLocation);
    // setValidation(response);
  };
  
  return (
    <div style={{ marginBottom: '1rem' }}>
      <h2>{label}</h2>
      {pendingLocations.map((pendingLocation) => (
        <div key={pendingLocation._id} style={{ display: 'flex' }}>
          <div style={{ marginRight: '1rem' }}>{pendingLocation.name}</div>
          <div style={{ marginRight: '1rem' }}>{pendingLocation.type}</div>
          <div style={{ marginRight: '1rem' }}>{pendingLocation.payable}</div>
      <button onClick={() => validate(pendingLocation)}>{buttonLabel}</button>
        </div>
      ))}
    </div>
  );
};

export default PendingLocations;
