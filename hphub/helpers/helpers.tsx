import { MenuItem, MenuItemCategory } from "../interfaces/menu.interface";

import data from "./data.json";

const gryffindor = [];
const slytherin = [];
const hufflepuff = [];
const ravenclaw = [];
const other = [];

for (const i of data) {
  switch (i["house"]) {
    case "":
      other.push(i["name"]);
      break;
    case "Gryffindor":
      gryffindor.push(i["name"]);
      break;
    case "Slytherin":
      slytherin.push(i["name"]);
      break;
    case "Hufflepuff":
      hufflepuff.push(i["name"]);
      break;
    case "Ravenclaw":
      ravenclaw.push(i["name"]);
      break;
    default:
      break;
  }
}

export const CharactersList = [
  gryffindor,
  slytherin,
  hufflepuff,
  ravenclaw,
  other,
];

export const MenuItems: MenuItem[] = [
  {
    route: "Gryffindor",
    name: "Gryffindor",
    id: MenuItemCategory.Gryffindor,
    items: CharactersList[0],
  },
  {
    route: "Slytherin",
    name: "Slytherin",
    id: MenuItemCategory.Slytherin,
    items: CharactersList[1],
  },
  {
    route: "Hufflepuff",
    name: "Hufflepuff",
    id: MenuItemCategory.Hufflepuff,
    items: CharactersList[2],
  },
  {
    route: "Ravenclaw",
    name: "Ravenclaw",
    id: MenuItemCategory.Ravenclaw,
    items: CharactersList[3],
  },
  {
    route: "Other",
    name: "Other",
    id: MenuItemCategory.Other,
    items: CharactersList[4],
  },
];
