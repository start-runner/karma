[![npm](https://img.shields.io/npm/v/start-karma.svg?style=flat-square)](https://www.npmjs.com/package/start-karma)
[![travis](http://img.shields.io/travis/start-runner/karma.svg?style=flat-square)](https://travis-ci.org/start-runner/karma)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/karma.svg?style=flat-square)](https://codecov.io/github/start-runner/karma)
[![deps](https://img.shields.io/gemnasium/start-runner/karma.svg?style=flat-square)](https://gemnasium.com/start-runner/karma)
[![gitter](https://img.shields.io/badge/gitter-join_chat_%E2%86%92-00d06f.svg?style=flat-square)](https://gitter.im/start-runner/start)

[Karma](https://karma-runner.github.io/) task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -D start-karma
```

## Usage

```js
import start from 'start';
import logger from 'start-simple-logger';
import karma from 'start-karma';

export function test() {
    return start(logger())
        karma(require('karma.conf'))
    );
}
```

See [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`karma(config)`

* `config` – [karma config](https://karma-runner.github.io/0.13/config/configuration-file.html)
