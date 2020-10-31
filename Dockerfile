FROM node:12.13.1-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .
RUN npm install --silent
RUN npm install expo-cli -g --silent

COPY . .

CMD ["npm", "start"]