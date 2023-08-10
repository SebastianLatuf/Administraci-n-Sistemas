FROM node:alpine


WORKDIR /express_holaMundo

COPY package.json .
COPY index.ts .
RUN npm install

EXPOSE 8080


CMD ["node","index.js"]
