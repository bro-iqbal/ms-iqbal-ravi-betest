FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env.docker .env

EXPOSE 3000

CMD ["node", "index.js"]
