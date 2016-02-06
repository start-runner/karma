[![npm](https://img.shields.io/npm/v/start-karma.svg?style=flat-square)](https://www.npmjs.com/package/start-karma)
[![travis](http://img.shields.io/travis/start-runner/karma.svg?style=flat-square)](https://travis-ci.org/start-runner/karma)
[![deps](https://img.shields.io/gemnasium/start-runner/karma.svg?style=flat-square)](https://gemnasium.com/start-runner/karma)

[Karma](https://karma-runner.github.io/) task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -D start-karma
```

## Usage

```js
// tasks.js
import start from 'start';
import logger from 'start-simple-logger';
import karma from 'start-karma';

export function test() {
    return start(logger())
        karma(require('karma.conf'))
    );
}
```

```js
// package.json
"scripts": {
  "task": "babel-node node_modules/.bin/start ./tasks",
  "test": "npm run task test"
}
```

## Arguments

`karma(config)`

* `config` – [karma config](https://karma-runner.github.io/0.13/config/configuration-file.html)
