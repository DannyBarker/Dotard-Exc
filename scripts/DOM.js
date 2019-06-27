import {API} from "./api.js"
const addToDOM = ( arr) => {
    const outEl = document.querySelector("#output")
    outEl.innerHTML = "<h1>Active Businesses</h1>"
    arr.forEach(business => {
        outEl.innerHTML += `
        <h2>${business.companyName}</h2>
        <section>
            ${business.addressFullStreet}
        </section>
        <section>
            ${business.addressCity}
        </section>
        <section>
        ${business["addressStateCode"]}
        </section>

        `
        outEl.innerHTML += "<hr/>"
    });

}
const getData = () => {
    API.getBusinesses().then( businesses => addToDOM(businesses))
}
export {getData}