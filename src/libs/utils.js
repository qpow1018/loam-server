class Utils {
  removeStringSpace(str) {
    return str.replace(/ /g, '');
  }
}

module.exports = new Utils();