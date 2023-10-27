FROM ubuntu:20.04

RUN apt-get update && apt-get install -y make gcc socat

RUN groupadd pilot
RUN useradd pilot --gid pilot

RUN export DEBIAN_FRONTEND=noninteractive && \
    apt-get -y update && \
    apt-get -y install socat coreutils && \
    apt-get -y install python3 python3-pip python3-dev git libssl-dev libffi-dev build-essential && \
    python3 -m pip install --upgrade pwntools && \
    apt-get -y install gdb && \
    apt-get -y install gdbserver && \
    apt-get -y install tmux


COPY ./app /app
WORKDIR /app

EXPOSE 7480

ENTRYPOINT [ "bash", "/app/startService.sh" ]
