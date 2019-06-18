FROM ubuntu:18.04

LABEL maintainer="Erivaldo JR <erivaldo.junior@kokkua.com"

RUN apt-get update -y

RUN apt-get install nodejs -y

RUN apt-get install npm -y

RUN apt-get install curl -y

RUN npm install vue

RUN npm install -g @vue/cli

COPY ./application /var/application

WORKDIR /var/application

RUN npm install

CMD ["npm", "run", "dev"]