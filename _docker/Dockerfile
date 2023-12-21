FROM node:latest

WORKDIR /usr/src/client
COPY package.json package-lock.json ./

RUN npm install --silent

COPY . ./

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]