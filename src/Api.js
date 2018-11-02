import { API_KEY } from "./API/API_KEY";

const Api = url => {
	return fetch(url, {
		headers: {
			"x-api-key": API_KEY
		}
	}).then(res => res.json());
};

export default Api;
