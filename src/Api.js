const Api = (function() {
  const API_KEY = "ab1f6af5ce5647d994a77a753afece72";
  
  const fetchTopUS = fetch('https://newsapi.org/v2/top-headlines?country=us', {
   'headers': {
     "x-api-key":  API_KEY
   }
  }).then(res=>res.json());
  
  return fetchTopUS;
})();

export default Api;