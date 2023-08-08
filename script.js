const apiUrl = 'https://restcountries.com/v3/all';

async function fetchCountryData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayCountryData(data);
  } catch (error) {
    console.error('Error fetching country data:', error);
  }
}

function displayCountryData(data) {
  const countryDataElement = document.getElementById('country-data');
  let html = '<ul>';

  data.forEach(country => {
    const countryName = country.name.common || 'N/A';
    const capital = country.capital || 'N/A';
    const region = country.region || 'N/A';
    const population = country.population || 'N/A';

    html += `
      <li>
        <strong>${countryName}</strong>
        <ul>
          <li>Capital: ${capital}</li>
          <li>Region: ${region}</li>
          <li>Population: ${population}</li>
        </ul>
      </li>
    `;
  });

  html += '</ul>';
  countryDataElement.innerHTML = html;
}

fetchCountryData();
