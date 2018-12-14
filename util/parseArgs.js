const isEmpty = require("./isEmpty");

function isCastableToBoolean(value) {
  return value === "true" || value === "false";
}

module.exports = function parseArgs(args) {
  const optionsRegex = new RegExp(/(^--)([a-zA-Z]+)=([a-zA-Z]+)/);
  const options = args.reduce((optionsObj, arg) => {
    const matches = optionsRegex.exec(arg);

    if (matches !== null) {
      // mathces[0] is the original phrase
      // matches[1] is '--'
      const key = matches[2];
      const value = matches[3];

      optionsObj[key] = isCastableToBoolean(value) ? Boolean(value) : value;
    }

    return optionsObj;
  }, {});

  return {
    arguments: isEmpty(args) ? null : args[0],
    options: options,
  };
};
