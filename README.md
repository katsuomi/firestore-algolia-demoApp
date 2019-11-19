# firestore-algolia-demoApp

## 💬 About

This repository is for [【Firebase】AlgoliaでFirestoreの全文検索機能を実装してみた](https://qiita.com/katsuomi/items/b80a9646585d040aa63e)

## 💁‍♂️demo
![Qiita.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/270696/eeec85ff-384f-53eb-2a65-20057e2a2cfa.gif)

## 🌻 Version

||Name|Version|What|
|:-:|:-:|:-:|:-|
|frontend|JavaScript||高級言語|
||npm|6.7.0|パッケージ管理システム|
||React.js|16.11.0|JavaScriptライブラリ|
||firesotre||データベース|

## 🔰 Install & Setup

#### 1. Dockerのダウンロード

下記より、`Docker For Mac` か `Docker For Windows`をインストールして下さい。  
[https://docs.docker.com/install/](https://docs.docker.com/install/)

#### 2. ソースコードの取得

```bash
git clone https://github.com/katsuomi/firestore-algolia-demoApp.git
cd firestore-algolia-demoApp
```

#### 3. 起動

下記の手順で、コンテナを起動させて下さい。

```bash
# Dockerイメージの作成
$ docker-compose build

# Dockerコンテナの起動
$ docker-compose up 
```

下記のコンテナが起動していれば、OKです。

|host||
|:-:|:-:|
|frontend|[http://localhost:3000](http://localhost:3000)|

## ⚠️ note
**envファイルに環境変数の設定が必要です。**

.envファイルを作成後、以下のように値を入れてください。
```
  (.env)
REACT_APP_ALGOLIA_ID="******"
REACT_APP_ADMIN_API_KEY="*******"
```
