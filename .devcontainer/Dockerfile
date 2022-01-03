FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive
RUN apt update && apt upgrade -y
RUN apt install nodejs npm -y
RUN npm install -g canvas-sketch-cli
RUN apt install ffmpeg -y