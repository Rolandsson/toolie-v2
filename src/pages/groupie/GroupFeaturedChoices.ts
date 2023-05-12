import { Choice } from "../../model/Choice";

type FeaturedChoices = {
  nextName: Choice;
  randomGroupName: Choice;
  randomizedLeader: Choice; 
  membersPerGroup: Choice; 
  amountOfGroups: Choice; 
  submitChoice: Choice;
}

export const featuredChoices: FeaturedChoices = {
  nextName: {
    key: "nextName",
    placeholder: "Type next name",
    type: "text"
  },
  randomGroupName: {
    text: "Ge grupperna ett kickass namn", 
    type: "checkbox",
    orient: "left",
  },
  randomizedLeader: {
    text: "Slumpa fram en gruppledare per grupp", 
    type: "checkbox",
    orient: "left",
  },
  membersPerGroup: {
    text: "Medlemmar per grupp",
    type: "number",
    orient: "right"
  },
  amountOfGroups: {
    text: "Antal grupper",
    type: "number",
    orient: "right"
  },
  submitChoice:  {
    text: "Create me some groups",
    type: "submit",
    tag: "button"
  }
}