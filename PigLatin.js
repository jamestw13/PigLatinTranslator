function translatePigLatin(str) {
  str = str.replace(/^([^aeiou]+)([aeiou]*.*)/, \"$2$1ay\");
  return (str.match(/ay$/)) ? str : str += \"way\";
