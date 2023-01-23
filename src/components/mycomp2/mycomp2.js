
import React from 'react'
import Mycomponent from '../mycomponent/Mycomponent'



const MyComponent2 = ({imagee, imagePosition,heading,content,position,image,button,posi}) => {
  const containerStyle = {
    width: '86%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const imageStyle = {
    width: '20%',
    height: 'auto',
  };

  return (
    <div style={containerStyle}>
      {imagePosition === 'left' && <img src={imagee}  alt="" style={imageStyle} />}
      <div style={{width: '60%'}}>
      <Mycomponent 
heading={heading}
content={content}
position={position}
image={imagee}
button={button}
posi={posi}

/>
      </div>
      {imagePosition === 'right' && <img src={image} alt="" style={imageStyle} />}
    </div>
  );
};

export default MyComponent2;
