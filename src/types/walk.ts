import env from './env';
import fetcher from './fetch';

export default class Walk {
	id: number = 0;
	name: string = '';
	image_url: string = '';
	map_url: string = '';
	description: string = '';
	duration: number = 0;
	distance_km: number = 0;
	elevation_gain_m: number = 0;
	terrain: string = '';
	path: {lat: number, lng: number}[] = [];
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
				this.path = data.path;
				this.difficulty = data.difficulty;
				return this;
	}

	fetchFromID(id: number) {
		fetcher.getWalkFromId(id)
			.then((data) => this.fromObject(data));
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
		// Fetch the data from the API
		let data = await fetcher.getWalkFiltered(name, difficulty, terrain, duration)
			.then((data) => {
				data = data.map((walk: any) => {
					return (new Walk).fromObject(walk);
				});
				return data;
			});

		// Filter the accessibility array to only include those that have at least one of the selected values
		if (accessibility.length > 0) {
			data = data.filter((walk: any) => {
				// only those that have all of the selected values
				return accessibility.every((a) => walk.accessibility.includes(a));
			});
		}

		return data;
	}
}
