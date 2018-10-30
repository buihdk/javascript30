'use strict';

const findMatches = (wordToMatch, cities) => {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const displayMatches = e => { 
  const matchArray = findMatches(e.target.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(e.target.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${e.target.value}</span>`);
    place.difference = place.difference.toString();
    const nearestDistance = place.difference.replace(regex, `<span class="hl">${e.target.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${e.target.value}</span>`);
    return `
      <li>
        <span class='name'>${cityName}, ${stateName}</span>
        <div class='info'>
          <span class='distance'>Distance: ${nearestDistance} KM</span> 
          <span class='population'>Population: ${numberWithCommas(place.population)}</span> 
        </div>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const pythagorasEquirectangular = (lat1, lon1, lat2, lon2) => {
  lat1 = lat1 * Math.PI / 180;
  lat2 = lat2 * Math.PI / 180;
  lon1 = lon1 * Math.PI / 180;
  lon2 = lon2 * Math.PI / 180;
  let R = 6371; // km
  let dist_x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
  let dist_y = (lat2 - lat1);
  let distance = Math.sqrt(dist_x * dist_x + dist_y * dist_y) * R;
  return distance;
}

const addDifference = (latitude, longitude) => {
  for (let i = 0; i < cities.length; i++) {
    let difference = pythagorasEquirectangular(latitude, longitude, cities[i].latitude, cities[i].longitude);
    cities[i].difference = Math.round(difference);
  }
  return cities;
}

let cities = [];

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

navigator.geolocation.getCurrentPosition((currentLocation) => {
  alert('Fetching cities...');
  fetch('https://gist.githubusercontent.com/buihdk/43f3e361ec8a1e3208a46537a9529ee1/raw/7027f5708cc267e9b6ed6a5c6d237ca1c485a41f/cities.json')
  .then(blob => blob.json())
  .then(data => cities.push(...data))
  .then(() => alert('Sorting cities based on nearest distances...'))
  .then(() => addDifference(currentLocation.coords.latitude, currentLocation.coords.latitude))
  .then(() => cities.sort((city1, city2) => {
    return (city1.difference > city2.difference) ? 1 : -1;
  }))
  .then(() => alert('You can now start your searches...'));
});