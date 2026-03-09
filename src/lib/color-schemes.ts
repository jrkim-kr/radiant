export interface ColorScheme {
	id: string;
	name: string;
	swatch: string;
	filter: string;
}

export const colorSchemes: ColorScheme[] = [
	{
		id: 'amber',
		name: 'Amber',
		swatch: '#c8956c',
		filter: 'none'
	},
	{
		id: 'monochrome',
		name: 'Mono',
		swatch: '#999',
		filter: 'grayscale(1)'
	},
	{
		id: 'blue',
		name: 'Blue',
		swatch: '#6c8ec8',
		filter: 'hue-rotate(200deg)'
	},
	{
		id: 'rose',
		name: 'Rose',
		swatch: '#c86c8e',
		filter: 'hue-rotate(300deg) saturate(1.1)'
	},
	{
		id: 'emerald',
		name: 'Emerald',
		swatch: '#6cc889',
		filter: 'hue-rotate(120deg)'
	},
	{
		id: 'arctic',
		name: 'Arctic',
		swatch: '#b8ccd8',
		filter: 'hue-rotate(180deg) saturate(0.5) brightness(1.1)'
	}
];
