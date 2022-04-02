export enum MenuItemCategory {
	Gryffindor,
	Slytherin,
	Hufflepuff,
	Ravenclaw,
	Other
}

export interface MenuItem {
	route: string,
	name: string,
	id: MenuItemCategory
}