FROM mhart/alpine-node:latest

MAINTAINER Yury Sannikov

WORKDIR /app
ADD . .

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "start:prod"]
