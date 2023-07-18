import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
	coverageProvider: 'babel',
	verbose: true,
	collectCoverage: true,
	// match every .ts and .tsx file so Jest can compile from typescript it for the JS runtime 
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	}
};
export default config;