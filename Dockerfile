FROM node:alpine

WORKDIR /var/www

COPY package.json .
RUN npm install
COPY . .
RUN npm run build

CMD ["npm", "run", "serve"]