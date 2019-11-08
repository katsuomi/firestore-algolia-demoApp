FROM node:10.16-alpine

WORKDIR /firestore-algolia-demoApp
ADD . /firestore-algolia-demoApp

RUN npm install