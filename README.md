# netlify-lambda-aed

AEDオープンデータAPIを中継してレスポンスヘッダー`Access-Control-Allow-Origin`を設定するNetlify Lambdaです。

## 使用言語・ライブラリ

- AEDオープンデータAPI http://hatsunejournal.jp/w8/AEDOpendata/

## 環境構築アプリケーション

- Docker
- Docker Compose
- direnv
- git

## セットアップ

```shell
$ git clone git@github.com:greendrop/netlify-lambda-aed.git
$ cd netlify-lambda-aed
$ vi .envrc
$ direnv allow
$ docker-compose pull
$ docker-compose build
$ docker-compose run --rm node bash
$ yarn install
$ exit
$ docker-compose up
```

### .envrc

```
export USER_ID=`id -u`
export GROUP_ID=`id -g`
```

## ブラウザで表示

http://localhost:9000/.netlify/functions/AEDSearch
