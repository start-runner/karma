export default (config) => (input) => {
  return function karma(/* log */) {
    const { Server } = require('karma');

    return new Promise((resolve, reject) => {
      const karmaServer = new Server(config, (exitCode) => {
        if (exitCode !== 0) {
          return reject();
        }

        resolve(input);
      });

      karmaServer.start();
    });
  };
};
