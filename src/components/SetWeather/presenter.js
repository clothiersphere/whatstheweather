import React from 'react';
import WundergroundFeed from './WundergroundFeed';
import AccuweatherFeed from './AccuweatherFeed';
import DarkskyFeed from './DarkskyFeed';

function SetWeather({ dskyInfo, wugInfo, accuInfo, opwInfo, wugReq }) {
  console.log(wugInfo, '/wugInfo')
  return (
    <div>
      <div>
        <button onClick={wugReq} type="button">GO</button>
      </div>
      <br/>
      <div className="wugFeed">
        <WundergroundFeed weather={wugInfo} />
      </div>
      <div className="dskyFeed">
        <DarkskyFeed weather={dskyInfo} />
      </div>
      <div className="accuFeed">
        <AccuweatherFeed weather={accuInfo} />
      </div>
    </div>
  );
}

export default SetWeather;