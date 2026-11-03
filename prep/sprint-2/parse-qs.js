export function parseQueryString(queryString) {
  const queryParams = {};

  // 1. Handle 0 parameters (empty string)
  if (queryString.length === 0) {
    return queryParams;
  }

  // 2. Split into an array of pairs
  const keyValuePairs = queryString.split("&");

  // 3. Loop and parse each pair
  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
  }

  return queryParams;
}