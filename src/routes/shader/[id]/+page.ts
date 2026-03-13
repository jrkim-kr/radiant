import { error } from '@sveltejs/kit';
import { getShaderById, shaders } from '$lib/shaders';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = ({ params }) => {
	const shader = getShaderById(params.id);
	if (!shader) {
		throw error(404, 'Shader not found');
	}
	return { shader };
};

export function entries() {
	return shaders.map((s) => ({ id: s.id }));
}
