// import axios  from "axios";
const baseUrl = `http://localhost:3000`
// function getdata() {
//     axios.get(`${baseUrl}/user`).then((res)=>{
//         console.log(res);
//     })
// }

function getUser() {
    fetch(`${baseUrl}/user`).then(res => {
        console.log(res);
    })
}

function addUser() {
    postData(`${baseUrl}/addUser`, { answer: 42 }).then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
    });
}

function login() {
    postData(`${baseUrl}/login`, { userId: 42 }).then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
    });
}


function getDetails() {
    fetch(`${baseUrl}/getDetails`).then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
    });
}


// Example POST method implementation:
async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}


