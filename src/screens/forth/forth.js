import React from 'react';
import { FaBaseballBall } from 'react-icons/fa';
import { MapContainer, Marker } from 'react-leaflet';

const Screen = () => {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '20%' }}>
          <FaBaseballBall size={50} color="white" />
        </div>
        <div style={{ width: '80%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <p style={{ color: 'white' }}>Home</p>
              <p style={{ color: 'white' }}>Past Events</p>
              <p style={{ color: 'white' }}>Partners</p>
              <p style={{ color: 'white' }}>About</p>
            </div>
            <div>
              <p style={{ color: 'white' }}>Subscribe to our mailing list</p>
              <p style={{ color: 'white' }}>Speaker Application</p>
            </div>
            <div>
              <p style={{ color: 'white' }}>Gmail</p>
              <p style={{ color: 'white' }}>Socials Info</p>
              <MapContainer center={[23.254688,77.402892]} zoom={13}>
                <Marker position={[23.254688,77.402892]} />
              </MapContainer>
              <p style={{ color: 'white' }}>Location of VIT Bhopal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
