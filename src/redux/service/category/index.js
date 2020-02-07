import {API_URL} from "../../../assets/constants";

export const getCategories = () => {
    const headers = new Headers({
        'content-type': 'application/json',
    });
    return fetch(
        encodeURI(`${API_URL}/category`),
        {
            method:      'GET',
            headers,
        },
    ).then(response => response.json()
    ).then(data => data);


};
