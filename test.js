const string = "Ola tudo \n bem?";

console.log(string);

const res = string.replace(/\n/g, " ");
const res2 = string.split("\n").join(" ");