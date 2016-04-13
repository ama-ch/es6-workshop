# es6-workshop

## 環境構築

### Node.js

```bash
$ curl -L git.io/nodebrew | perl - setup
$ export PATH=$HOME/.nodebrew/current/bin:$PATH
$ source ~/.bashrc
$ nodebrew install-binary stable
$ nodebrew use stable
```

### npm

```bash
$ npm install -g npm
```

## セットアップ

```bash
$ git clone https://github.com/ama-ch/es6-workshop.git
$ cd es6-workshop
```

## ワークショップ

### tower-of-babel

```bash
$ npm install -g tower-of-babel
$ tower-of-babel
```

### ESLintの実行

```bash
$ npm run lint
```
