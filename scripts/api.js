let API = {
    getBusinesses: () => {
        return fetch(`http://localhost:8088/businesses`)
        .then(data => data.json())
    }
}
export {API}