function replaceAll(str, find, rep) {
  const check = str.includes(find);
  if (check) {
    const arr = str.split(find).join(rep);
    return arr;
  }
  return str;
}

module.exports = replaceAll;
