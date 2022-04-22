var jsonString =
  '[{"country":"US","languages":["en"]},{"country":"BE","languages":["nl","fr","de"]},{"country":"NL","languages":["nl"]},{"country":"DE","languages":["de"]},{"country":"ES","languages":["es"]}]';

console.log(countCountries(jsonString));
console.log(countryWithMostLanguages(jsonString));

function countCountries(json_data) {
  const parsedJson = JSON.parse(json_data);
  return "How Many countries in the Json: " + Object.keys(parsedJson).length;
}

function countryWithMostLanguages(json_data) {
  const parsedJson = JSON.parse(json_data);
  var countryMostLanguages = new Map();
  for (var i = 0; i < parsedJson.length; i++) {
    countryMostLanguages.set(
      parsedJson[i].country,
      parsedJson[i].languages.length
    );
  }

  return (
    "Country with most official languages: " +
    [...countryMostLanguages.entries()].reduce((a, e) => (e[1] > a[1] ? e : a))
  );
}
