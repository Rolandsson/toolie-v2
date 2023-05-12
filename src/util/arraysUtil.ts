function shuffle(array: Array<any>) {
  const shuffledArray = [...array];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    [shuffledArray[i], shuffledArray[j]] = [array[j], array[i]];
  }

  return shuffledArray;
}

/**
 * splits an array into multple arrays based on how many groups of arrays there should be
 */
function splitInto<T>(array: Array<any>, nGroups: number = 1): Array<any> {
  if(nGroups < 1) {
    console.warn(`Unresolved number for splitInto {e: >${0}, r: ${nGroups}}`, "nGroups set to 1");
    nGroups = 1;
  }
  const groups = new Array<any>();
  const shuffledArray = shuffle(array);

  shuffledArray.forEach((entry, index) => {
    index = index;
    if(groups[index % nGroups] == undefined) {
      groups[index % nGroups] = []
    }
    groups[index % nGroups].push(entry);
  });

  return groups;
}

/**
 * splits an array into multiple arrays based on how many members there should be in each array
 */
function splitWith(array: Array<any>, nMembers: number = 1): Array<any> {
  if(nMembers < 1) {
    console.warn(`Unresolved number for splitWith {e: >${0}, r: ${nMembers}}`, "nMembers set to 1");
    nMembers = 1;
  }
  const nGroups = Math.ceil(array.length / nMembers);
  const groups = splitInto(array, nGroups);
  return groups;
}

export default { splitInto, splitWith }