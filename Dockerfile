FROM node:latest
WORKDIR /apps
ADD . .
RUN npm install -g npm@10.5.0
CMD [ "npm" "start" ]
