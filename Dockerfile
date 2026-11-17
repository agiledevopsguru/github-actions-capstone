
FROM node:22-alpine

# Upgrade Alpine packages, including zlib security fixes
RUN apk update && apk upgrade --no-cache

# Install latest npm release
RUN npm install --global npm@latest

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY app.js ./

EXPOSE 3000

CMD ["npm", "start"]

