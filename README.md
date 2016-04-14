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

#### 課題

1. BABEL SETUP
1. CLASS
1. BLOCK SCOPE
1. ARROW FUNCTION
1. REST AND SPREAD
1. DESTRUCTURE
1. COMPUTED PROPERTY
1. その他

### ESLintの実行

```bash
$ npm run lint
```

こちらを確認しながらエラーを修正:   http://eslint.org/docs/rules/

## 参考リンク

* [ES6 チートシート](http://postd.cc/es6-cheatsheet/)
* [lukehoban/es6features](https://github.com/lukehoban/es6features)
* [Effective ES6](http://www.slideshare.net/teppeis/effective-es6)
* [ECMAScript 6 compatibility table](https://kangax.github.io/compat-table/es6/)
