FROM node:latest
WORKDIR /greeting-app
COPY package.json .
RUN npm install
COPY . . 
EXPOSE 3000
CMD ["node", "server.js"]