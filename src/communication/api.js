let apiUrl = "https://coletucker-mynearbyplaces-api.herokuapp.com/"

let getPlaces = () => {
    return fetch(apiUrl + '/places')
    .then (response => response.json());
}

let getReviews = () => {
    return fetch(apiUrl + '/reviews')
    .then (response => response.json());
}

let addPlace = (place) => {
    return fetch(apiUrl + '/addPlace', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(place)
    });
}

let addReviews = (place) => {
    return fetch(apiUrl + '/addReview', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(place)
    });
}

let deletePlace = (place) => {
    return fetch(apiUrl + '/deletePlace', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(place)
    });
}

let editPlace = (place) => {
    return fetch(apiUrl + '/editPlace', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(place)
    });
}

let api = {
    getPlaces : getPlaces,
    getReviews : getReviews,
    addPlace : addPlace,
    deletePlace : deletePlace,
    editPlace : editPlace,
    addReviews : addReviews
};

export default api;