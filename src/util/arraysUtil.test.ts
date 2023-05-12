import arraysUtil from "./arraysUtil";


const names = ["Bob", "Anna", "Sigge", "Yves", "Greta", "Bertil", "Carl"];

test("array utils split 1 group", () => {
  const splitNames = arraysUtil.splitInto(names);

  expect(splitNames.length).toBe(1); // (6, 1)
});

test("Array split with (shorter list)", () => {
  const splitNames = arraysUtil.splitWith([names[0], names[1], names[2]], 2)
  expect(splitNames.length).toBe(2);
})

test("Array utils split 3 groups", () => {
  const splitNames = arraysUtil.splitInto(names, 3);

  expect(splitNames.length).toBe(3)
});

test("Array utils split 3 members per group", () => {
  const splitNames = arraysUtil.splitWith(names, 3);
  expect(splitNames.length).toBe(3)
});

test("Array utils split negative members per group", () => {
  const splitNames = arraysUtil.splitWith(names, -1);

  expect(splitNames.length).toBe(splitNames.length);
});

test("Array split into one group", () => {
  const splitNames = arraysUtil.splitInto(names, 0);

  expect(splitNames.length).toEqual(1);
})