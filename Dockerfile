FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install
COPY . . 
RUN node server.js
EXPOSE 3000
CMD ["node"", "server.js]