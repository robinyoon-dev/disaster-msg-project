export default function getLocationArray(locations: string) {
  return removeRedundancy(locations.split(","));
}


function removeRedundancy(arr: string[]){
  const set = new Set(arr);
  console.log(set.keys());
  console.log(Array.from(set.keys()));
  return Array.from(set.keys());
}