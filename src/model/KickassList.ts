const prefix = [
  "Donkey",
  "Shrek",
  "Master",
  "Devious",
  "Crazy",
  "Terifying",
  "Gracious",
  "Hiking",
  "Evil",
  "Awesome",
]

const suffix = [
  "stars",
  "fishes",
  "jugglers",
  "caretakers",
  "hamsters",
  "cats",
  "dogs",
  "dolphins",
  "muskeeters"
]

export function createKickassName(amount = 1): Array<string> {
  const names = [];
  let prefixNames = [...prefix];
  let suffixNames = [...suffix];
  

  for(let i = 0; i < amount; i++) {
    const prefix = prefixNames[Math.floor(Math.random() * prefixNames.length)];
    const suffix = suffixNames[Math.floor(Math.random() * suffixNames.length)];
    names.push(prefix + " " + suffix);  

    prefixNames = prefixNames.filter(name => name !== prefix);
    suffixNames = suffixNames.filter(name => name !== suffix);
  }

  return names;
}