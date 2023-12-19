const arr = [
  "jean",
  "Mike",
  "Larry",
  "Kim",
  "Joanne",
  "jean",
  "Mike",
  "jean",
  "Mike",
  "jean",
  "Mike",
];
const arr2 = arr.filter((value, index, array) => {
  console.log(value, index, array.indexOf(value));
  return array.indexOf(value) === index;
});
console.log(arr2);
