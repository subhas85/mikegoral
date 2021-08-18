/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-netlify';
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter()
	}
};

// import adapter from '@sveltejs/adapter-node';

// export default {
// 	kit: {

// 		adapter: adapter({
// 			// default options are shown
// 			out: 'buildTest',
// 			precompress: false
// 		})
// 	}
// };

export default config;