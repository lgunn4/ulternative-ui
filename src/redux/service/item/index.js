import {API_URL} from "../../../assets/constants";

export const getItems = (categoryId) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });
    return fetch(
        encodeURI(`${API_URL}/category/${categoryId}`),
        {
            method:      'GET',
            headers,
        },
    ).then(response => response.json()
    ).then(data => data);


};
