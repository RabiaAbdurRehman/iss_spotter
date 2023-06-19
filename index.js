// index.js
//const {  nextISSTimesForMyLocation } = require('./iss');
//const { isIPv4 } = require('net');
const ip = '207.47.252.75';
//const ipv4 = '162.245.144.188';
const coordinatesNew = {
  latitude: 0,
  longitude: 0
};
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);
});
fetchCoordsByIP('162.245.144.188', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned coordinates:', coordinates);
});
fetchISSFlyOverTimes(coordinatesNew, (error, passes) => {
  if (error) {
    console.log("it didnt work  ", error);
    return;
  }
  console.log("it worked: ", passes);

});
//const { fetchMyIP, fetchCoordsByIP, nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});