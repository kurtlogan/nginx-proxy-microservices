FROM node:6.10-slim

RUN mkdir /app
WORKDIR /app

COPY ./package.json .
RUN npm install

COPY ./ .

CMD ["node", "main.js"]
