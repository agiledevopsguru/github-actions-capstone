FROM node:22-alpine

# Update bundled npm to receive patched dependencies
RUN npm install --global npm@latest

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY app.js ./

EXPOSE 3000

CMD ["npm", "start"]
