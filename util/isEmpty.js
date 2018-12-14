module.exports = function isEmpty(value) {
  if (typeof value === "undefined" || value === null) {
    return true;
  }

  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  if (typeof value === "string" && value.trim() === "") {
    return true;
  }

  if (value === "undefined") {
    return true;
  }

  return false;
};
