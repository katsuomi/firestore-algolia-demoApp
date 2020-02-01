# firestore-algolia-demoApp

## 💬 About

This repository is for [【Firebase】AlgoliaでFirestoreの全文検索機能を実装してみた](https://qiita.com/katsuomi/items/b80a9646585d040aa63e)

## 💁‍♂️demo
![Qiita.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/270696/eeec85ff-384f-53eb-2a65-20057e2a2cfa.gif)

## 🌻 Version

||Name|Version|What|
|:-:|:-:|:-:|:-|
|frontend|JavaScript||High-level languages|
||npm|6.7.0|	Package management system|
||React.js|16.11.0|JavaScript Library|
||firesotre||database|

## 🔰 Install & Setup

#### 1. Download Docker

The following procedure, please install Docker For Mac or Docker For Windows 

[https://docs.docker.com/install/](https://docs.docker.com/install/)

#### 2. Getting source code

```bash
git clone https://github.com/katsuomi/firestore-algolia-demoApp.git
cd firestore-algolia-demoApp
```

#### 3. Start-up

The following procedure, start the container.

```bash
# Create Docker image
$ docker-compose build

# Start Docker container
$ docker-compose up 
```

If the following local server started, it's ok.

|host||
|:-:|:-:|
|frontend|[http://localhost:3000](http://localhost:3000)|

## ⚠️ note
**Environment variable setting is required.**

Please describe the following settings after creating .env file.

```
  (.env)
REACT_APP_ALGOLIA_ID="******"
REACT_APP_ADMIN_API_KEY="*******"
```
