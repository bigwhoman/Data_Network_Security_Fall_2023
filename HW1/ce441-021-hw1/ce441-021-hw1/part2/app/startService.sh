#!/bin/bash
chown pilot:pilot /app/pwn
chmod +x /app/pwn
while true; do
    su pilot -c 'timeout -k 30s 1d socat TCP-LISTEN:7480,nodelay,reuseaddr,fork EXEC:"stdbuf -i0 -o0 -e0 ./pwn"'
done
