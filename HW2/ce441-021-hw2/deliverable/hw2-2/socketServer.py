import asyncio
import websockets

CONNECTIONS = set()

async def echo(websocket, path):
   client_ip, client_port = websocket.remote_address
   print(f"Client connected from {client_ip}:{client_port}")

   # Print request headers
   headers = websocket.request_headers
   print(f"headers: {headers}")
   print(f"Host: {headers.get('Host')}")
   print(f"User-Agent: {headers.get('User-Agent')}")
   print(f"Origin: {headers.get('Origin')}")
   CONNECTIONS.add(websocket)
   try:
      async for message in websocket:
        print(f"< {message}")
   finally:
       print("removed")
       CONNECTIONS.remove(websocket)

start_server = websockets.serve(echo, "0.0.0.0", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
