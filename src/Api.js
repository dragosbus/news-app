const API_KEY = "ab1f6af5ce5647d994a77a753afece72";

const Api = url => {
  return fetch(url, {
    'headers': {
      "x-api-key": API_KEY
    }
  }).then(res => res.json());
};

export default Api;