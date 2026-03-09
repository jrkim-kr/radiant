export interface ShaderParam {
	name: string;
	label: string;
	min: number;
	max: number;
	step?: number;
	default: number;
}

export interface Shader {
	id: string;
	number: string;
	file: string;
	title: string;
	desc: string;
	params?: ShaderParam[];
}

export const shaders: Shader[] = [
	{
		id: 'flow-field',
		number: '01',
		file: '01-flow-field.html',
		title: 'Flow Field with Particle Trails',
		desc: 'Particles following Perlin noise currents with warm amber trails.',
		params: [
			{ name: 'SPEED', label: 'Flow Speed', min: 0.3, max: 3.0, step: 0.1, default: 1.2 },
			{ name: 'NOISE_SCALE', label: 'Pattern Scale', min: 0.001, max: 0.01, step: 0.0005, default: 0.0025 }
		]
	},
	{
		id: 'topographic',
		number: '02',
		file: '02-topographic.html',
		title: 'Topographic Contour Map',
		desc: 'Living terrain map with marching squares isolines and elevation labels.',
		params: [
			{ name: 'NUM_CONTOURS', label: 'Contour Density', min: 4, max: 30, step: 1, default: 14 },
			{ name: 'TIME_SPEED', label: 'Animation Speed', min: 0.0, max: 0.5, step: 0.01, default: 0.15 }
		]
	},
	{
		id: 'reaction-diffusion',
		number: '03',
		file: '03-reaction-diffusion.html',
		title: 'Reaction-Diffusion Patterns',
		desc: 'Gray-Scott reaction-diffusion producing organic Turing patterns.',
		params: [
			{ name: 'stepsPerFrame', label: 'Evolution Speed', min: 1, max: 25, step: 1, default: 12 },
			{ name: 'Da', label: 'Diffusion Rate', min: 0.1, max: 0.3, step: 0.005, default: 0.2097 }
		]
	},
	{
		id: 'generative-tree',
		number: '04',
		file: '04-generative-tree.html',
		title: 'Generative Branching Tree',
		desc: 'L-system inspired tree with continuous growth and regrowth cycles.',
		params: [
			{ name: 'GROWTH_SPEED_BASE', label: 'Growth Speed', min: 0.003, max: 0.025, step: 0.001, default: 0.008 },
			{ name: 'MAX_DEPTH', label: 'Branch Depth', min: 4, max: 14, step: 1, default: 9 }
		]
	},
	{
		id: 'strange-attractor',
		number: '05',
		file: '05-strange-attractor.html',
		title: 'Strange Attractor (Lorenz)',
		desc: 'Lorenz system with 3D projection, rotation, and glowing particle trails.',
		params: [
			{ name: 'STEPS_PER_FRAME', label: 'Simulation Speed', min: 1, max: 12, step: 1, default: 4 },
			{ name: 'TRAIL_LENGTH', label: 'Trail Length', min: 500, max: 4000, step: 100, default: 2000 },
			{ name: 'RHO', label: 'Attractor Shape', min: 15, max: 50, step: 0.5, default: 28 }
		]
	},
	{
		id: 'pendulum-wave',
		number: '06',
		file: '06-pendulum-wave.html',
		title: 'Pendulum Wave',
		desc: 'Physics-based pendulum wave creating emergent interference patterns.',
		params: [
			{ name: 'NUM_PENDULUMS', label: 'Pendulum Count', min: 6, max: 40, step: 1, default: 20 },
			{ name: 'CYCLE_DURATION', label: 'Cycle Duration', min: 20, max: 120, step: 5, default: 60 }
		]
	},
	{
		id: 'phyllotaxis',
		number: '07',
		file: '07-phyllotaxis.html',
		title: 'Phyllotaxis Spiral',
		desc: "Golden angle spiral with Fibonacci lattice connections.",
		params: [
			{ name: 'MAX_POINTS', label: 'Point Count', min: 500, max: 5000, step: 100, default: 2000 },
			{ name: 'SPREAD', label: 'Spiral Tightness', min: 0.003, max: 0.015, step: 0.0005, default: 0.0065 }
		]
	},
	{
		id: 'network-constellation',
		number: '08',
		file: '08-network-constellation.html',
		title: 'Network Constellation',
		desc: 'Force-directed graph with labeled nodes and traveling edge particles.',
		params: [
			{ name: 'REPULSION', label: 'Node Repulsion', min: 2000, max: 15000, step: 500, default: 8000 },
			{ name: 'SPRING_REST', label: 'Connection Length', min: 80, max: 300, step: 10, default: 160 }
		]
	},
	{
		id: 'fluid-amber',
		number: '09',
		file: '09-fluid-amber.html',
		title: 'Fluid Amber',
		desc: 'Domain-warped simplex noise with layered organic flow and warm palette.',
		params: [
			{ name: 'timeScale', label: 'Animation Speed', min: 0.0, max: 0.5, step: 0.01, default: 0.15 },
			{ name: 'ampDecay', label: 'Detail Level', min: 0.3, max: 0.7, step: 0.01, default: 0.48 }
		]
	}
];

export function getShaderById(id: string): Shader | undefined {
	return shaders.find((s) => s.id === id);
}
