import env from './env';

export default class Walk {
	id: number = 0;
	name: string = '';
	image_url: string = '';
	map_url: string = '';
	description: string = '';
	duration: string = '';
	distance_km: number = 0;
	elevation_gain_m: number = 0;
	terrain: string = '';
	accessibility: string[] = [];
	difficulty: string = '';

	fromObject(data: any) {
				this.id = data.id;
				this.name = data.name;
				this.image_url = data.image_url;
				this.map_url = data.map_url;
				this.description = data.description;
				this.duration = data.duration;
				this.distance_km = data.distance_km;
				this.elevation_gain_m = data.elevation_gain_m;
				this.terrain = data.terrain;
				this.accessibility = data.accessibility;
				this.difficulty = data.difficulty;
				return this;
	}

	fetchFromID(id: number) {
		fetch(`${env.API_URL}/walks?id=${id}`)
			.then((response) => response.json())
			.then((data) => {
				data = data[0];
				data.map_url = "https://www.google.com/maps/embed?" + data.map_url;
				this.fromObject(data);
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
	static async fetchFilter(
		name: string|null,
		difficulty: string[],
		terrain: string[],
		accessibility: string[],
		duration: [number|null, number|null]
	) {
		let args: string[] = [];
		// Filter the arguments to only include those that are not null or empty
		if (name) args.push(`name_like=${name}`);
		if (difficulty.length > 0) args.push(difficulty.map((d) => `difficulty[]=${d}`).join('&'));
		if (terrain.length > 0) args.push(terrain.map((t) => `terrain[]=${t}`).join('&'));
		// duration.zip("gte", "lte").filter(!isNull).forEach(args.push(`duration_${v.1}=${v.0}`));
		duration.map((v, i) => [v, ["gte", "lte"][i]]).filter((v) => v[0] !== null).forEach((v) => args.push(`duration_${v[1]}=${v[0]}`));
		// accessibility is return as a string array by the API, I don't know how to tell the api "should include"

		// Construct the query string from the arguments
		let query = args.join('&');
		if (query.length > 0) query = '?' + query;

		// Fetch the data from the API
		let data = await fetch(`${env.API_URL}/walks${query}`)
			.then((response) => response.json())
			.then((data) => {
				data = data.map((walk: any) => {
					walk.map_url = "https://www.google.com/maps/embed?" + walk.map_url;
					return (new Walk).fromObject(walk);
				});
				return data;
			});

		// Filter the accessibility array to only include those that have at least one of the selected values
		if (accessibility.length > 0) {
			data = data.filter((walk: any) => {
				return walk.accessibility.some((a: string) => accessibility.includes(a));
			});
		}

		return data;
	}
}
