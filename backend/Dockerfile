FROM node:20-slim
EXPOSE 80 5000 5001

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]