import env from './env';

export default class {
	static async getWalkFromId(id: number): Promise<any> {
		return await fetch(`${env.API_URL}/walks?id=${id}`)
			.then((response) => response.json())
			.then((data) => {
				data = data[0];
				data.map_url = "https://www.google.com/maps/embed?" + data.map_url;
				return data;
			});
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
		let args: string[] = [];

		// Filter the arguments to only include those that are not null or empty
		if (name) args.push(`name_like=${name}`);
		if (difficulty.length > 0) args.push(difficulty.map((d) => `difficulty[]=${d}`).join('&'));
		if (terrain.length > 0) args.push(terrain.map((t) => `terrain[]=${t}`).join('&'));
		// duration.zip("gte", "lte").filter(!isNull).forEach(args.push(`duration_${v.1}=${v.0}`));
		duration.map((v, i) => [v, ["gte", "lte"][i]]).filter((v) => v[0] !== null).forEach((v) => args.push(`duration_${v[1]}=${v[0]}`));

		// Construct the query string from the arguments
		let query = args.join('&');
		if (query.length > 0) query = '?' + query;

		return await fetch(`${env.API_URL}/walks${query}`)
			.then((response) => response.json())
			.then((data) => data.map((walk: any) => {
				walk.map_url = "https://www.google.com/maps/embed?" + walk.map_url;
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
