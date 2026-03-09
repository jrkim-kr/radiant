import { error } from '@sveltejs/kit';
import { getShaderById } from '$lib/shaders';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const shader = getShaderById(params.id);
	if (!shader) {
		throw error(404, 'Shader not found');
	}
	return { shader };
};
