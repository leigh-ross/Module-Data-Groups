export function parseQueryString(queryString) {
  const queryParams = {};
  const [key, value] = queryString.split("=");
  queryParams[key] = value;
  return queryParams;
}
