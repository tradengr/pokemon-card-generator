import React from 'react';

const Card = ({ hp, name, type1, type2, attack, defense, speed, imgSrc, type1Color, type2Color }) => {
  return (
    <div className='card' style={{background: `radial-gradient(circle at 50% 0%, ${type1Color} 36%, #ffffff 36%)`}}>
      <p className='hp'>
        <span>HP </span>
        {hp}
      </p>
      <img src={imgSrc} alt={name}/>
      <h2 className='poke-name'>{name}</h2>
      <div className='type'>
        <span style={{background: `${type1Color}`}}>{type1}</span>
        <span style={{background: `${type2Color}`}}>{type2}</span>
      </div>
      <div className='stats'>
        <div>
          <h3>{attack}</h3>          
          <p>Attack</p>
        </div>
        <div>
          <h3>{defense}</h3>
          <p>Defense</p>
        </div>
        <div>
          <h3>{speed}</h3>
          <p>Speed</p>
        </div>
      </div>
    </div>
  );
};

export default Card;