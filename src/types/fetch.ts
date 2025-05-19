import env from './env';

export default class {
	static async getWalkFromId(id: number): Promise<any> {
		return await fetch(`${env.API_URL}/walks?id=${id}`)
			.then((response) => response.json())
			.then((data) => {
				data = data[0];
				return data;
			});
	}

	/**
	 * Format the filters for the API request.
	 * @param name The name of the walk, detected like %name%
	 * @param difficulty The difficulty of the walk
	 * @param terrain The terrain of the walk
	 * @param duration The minimum and maximum duration of the walk
	 * @returns A string representing the formatted filters.
	 */
	static formatFilters(
		name: string | null,
		difficulty: string[],
		terrain: string[],
		duration: [number | null, number | null]
	): string {
		let args: string[] = [];

		// Filter the arguments to only include those that are not null or empty
		if (name) args.push(`name_like=${name}`);
		if (difficulty.length > 0) args.push(difficulty.map((d) => `difficulty[]=${d}`).join('&'));
		if (terrain.length > 0) args.push(terrain.map((t) => `terrain[]=${t}`).join('&'));
		duration.map((v, i) => [v, ["gte", "lte"][i]]).filter((v) => v[0] !== null).forEach((v) => args.push(`duration_${v[1]}=${v[0]}`));

		// Construct the query string from the arguments
		let query = args.join('&');
		if (query.length > 0) query = '?' + query;

		return query;
	}

	/**
	 * Fetches a list of walks from the API with optional filters.
	 * @param name The name of the walk, detected like %name%
	 * @param difficulty The difficulty of the walk
	 * @param terrain The terrain of the walk
	 * @param accessibility The accessibility of the walk
	 * @param duration The minimum and maximum duration of the walk
	 * @returns A promise that resolves to an array of Walk objects.
	 */
	static async getWalkFiltered(
		name: string|null,
		difficulty: string[],
		terrain: string[],
		duration: [number|null, number|null]
	): Promise<any[]> {
		let query = this.formatFilters(name, difficulty, terrain, duration);
		return await fetch(`${env.API_URL}/walks${query}`)
			.then((response) => response.json())
			.then((data) => data.map((walk: any) => {
				return walk;
			}));
	}

	/**
	 * Fetches the filters from the API.
	 * @returns A promise that resolves to an object containing the filters.
	 **/
	static async getFilters(): Promise<any> {
		return await fetch(`${env.API_URL}/filters`)
			.then(response => response.json())
			.then(data => {
				if (!data) {
					throw new Error('No data received');
				}
				return data;
			});
	}
}
