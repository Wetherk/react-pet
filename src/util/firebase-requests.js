import store from "../store/redux";

export function fetchData(path, config) {
    const user = store.getState().auth.user;

    return fetch(
        `https://react-pet-18b5e-default-rtdb.europe-west1.firebasedatabase.app/${path}.json?auth=${user.accessToken}`,
        config
    );
}
