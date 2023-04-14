FROM node:alpine

WORKDIR /api

COPY . .
RUN npm install

CMD ["npm", "start"]