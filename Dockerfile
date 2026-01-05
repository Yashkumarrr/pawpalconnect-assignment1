FROM node:latest
COPY package*json ./
WORKDIR /app 
EXPOSE 3000
RUN npm install
CMD ["npm","start"]
