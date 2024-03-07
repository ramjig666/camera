FROM node:latest
WORKDIR /apps
ADD . .
RUN sudo npm install
CMD [ "npm" "start" ]
