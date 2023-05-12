import { Group } from "../model/Group";
import { createKickassName } from "../model/KickassList";
import arraysUtil from "./arraysUtil";

export function createGroups(list: Array<string>, size: number, named = false): Array<Group> {
  const splits = arraysUtil.splitWith(list, size);
  const groupNames = named ? createKickassName(splits.length) : [...Array(splits.length).keys()].map(split => "#" + (split + 1));

  return splits.map((split, index) => ({name: groupNames[index], split}));
}

export function createNamedGroups(list: Array<string>, size: number): Array<Group>  {
  return createGroups(list, size, true)
}


