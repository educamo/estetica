/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true
	},
	typescript: {
		ignoreBuildErrors: true
	},
	images: {
		unoptimized: true
	},

	webpack: (config, { isServer }) => {
		// Esto excluye el directorio 'System Volume Information' de ser observado por Watchpack/Webpack
		if (isServer) {
			config.watchOptions = {
				ignored: [
					"**/System Volume Information/**"
					// Puedes añadir otros directorios problemáticos aquí si surgen,
					// aunque el más común es el anterior.
				]
			};
		}
		return config;
	}
};

export default nextConfig;
