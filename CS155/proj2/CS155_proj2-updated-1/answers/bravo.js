

payload = [
    "destination_username=user1&quantity=10"
]



fetch('http://localhost:3000/post_transfer', {
 method: 'POST',
 headers: {
   'Content-Type': 'application/json'
 },
 body: JSON.stringify({payload})
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));



curl 'http://localhost:3000/post_transfer' \
  -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Cache-Control: max-age=0' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Cookie: session=eyJsb2dnZWRJbiI6dHJ1ZSwiYWNjb3VudCI6eyJ1c2VybmFtZSI6InVzZXIxIiwiaGFzaGVkUGFzc3dvcmQiOiI4MTQ2ZmYzM2U4MTVlMWEwOGVhZTJiNDczYmYyY2NhMTU5NTgyZTQzNGM1MjUyNGMzMzI1ZjA2ZThjMmI4MGQ5Iiwic2FsdCI6IjEzMzciLCJwcm9maWxlIjoiIiwiYml0YmFycyI6MjAwfX0=' \
  -H 'Origin: http://localhost:3000' \
  -H 'Referer: http://localhost:3000/transfer' \
  -H 'Sec-Fetch-Dest: document' \
  -H 'Sec-Fetch-Mode: navigate' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-User: ?1' \
  -H 'Upgrade-Insecure-Requests: 1' \
  -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edg/116.0.1938.76' \
  -H 'sec-ch-ua: "Chromium";v="116", "Not)A;Brand";v="24", "Microsoft Edge";v="116"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  --data-raw 'destination_username=user1&quantity=10' \
  --compressed