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

	static async fetchFilter(name: string|null, difficulty: string[], terrain: string[], accessibility: string[]) {
		let args: string[] = [];
		// Filter the arguments to only include those that are not null or empty
		if (name) args.push(`name_like=${name}`);

		// Construct the query string from the arguments
		let query = args.join('&');
		if (query.length > 0) query = '?' + query;

		console.log(`Fetching walks with query: ${query}`);

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

		return data;
	}
}
