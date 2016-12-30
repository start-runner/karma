# start-karma

[![npm](https://img.shields.io/npm/v/start-karma.svg?style=flat-square)](https://www.npmjs.com/package/start-karma)
[![linux build](https://img.shields.io/travis/start-runner/karma/master.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/karma)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/karma/master.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/karma)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/karma/master.svg?style=flat-square)](https://codecov.io/github/start-runner/karma)
[![deps](https://img.shields.io/gemnasium/start-runner/karma.svg?style=flat-square)](https://gemnasium.com/start-runner/karma)

[Karma](https://karma-runner.github.io/) task for [Start](https://github.com/start-runner/start).

## Install

```sh
npm install --save-dev start-karma
# or
yarn add --dev start-karma
```

## Usage

```js
import start from 'start';
import reporter from 'start-pretty-reporter';
import karma from 'start-karma';

export const test = () => start(reporter())
  karma(require('karma.conf'))
);
```

See [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`karma(config)`

* `config` – [karma config](https://karma-runner.github.io/0.13/config/configuration-file.html)
