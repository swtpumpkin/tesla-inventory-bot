FROM node:14.15

RUN mkdir -p /usr/server
WORKDIR /usr/server

COPY ./package.json /usr/server

RUN npm install

COPY . /usr/server

CMD [ "npm", "run", "start" ]
