import { MenuItem, MenuItemCategory } from './interfaces/menu.interface';

export const MenuItems: MenuItem[] = [
  { route: "Gryffindor", name: "Gryffindor", id: MenuItemCategory.Gryffindor },
  { route: "Slytherin", name: "Slytherin", id: MenuItemCategory.Slytherin },
  { route: "Hufflepuff", name: "Hufflepuff", id: MenuItemCategory.Hufflepuff },
  { route: "Ravenclaw", name: "Ravenclaw", id: MenuItemCategory.Ravenclaw },
  { route: "Other", name: "Other", id: MenuItemCategory.Other },
];