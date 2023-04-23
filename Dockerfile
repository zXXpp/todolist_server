FROM node:alpine

WORKDIR /api

COPY . .
RUN npm install --registry=http://registry.npm.taobao.org

CMD ["npm", "start"]