// Create a new Map
const map = new Map();
console.log(map.size);
//
const map1 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
map1.set("d", 4);
console.log(map1.get("c"));
map1.delete("d");
console.log(map1);
// Loop through map
for (const [key, value] of map1) {
  console.log(key, value);
}
map1.forEach((value, key) => {
  console.log(key, value);
});
//Question: how to show city name for each student?
const cityList = [
  { id: 1, name: "TP. Hồ Chí Minh" },
  { id: 2, name: "TP. Phan Thiết" },
];
const cityMap = new Map();
cityList.forEach((city) => {
  cityMap.set(city.id, city);
});
console.log(cityMap.get(1).name);
const cityMap1 = cityList.reduce((map, city) => {
  map.set(city.id, city.name);
  return map;
}, new Map());
console.log(cityMap1);
