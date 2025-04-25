import env from './env';

export default class {
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

	fromID(id: number) {
		fetch(`${env.API_URL}/walks/${id}`)
			.then((response) => response.json())
			.then((data) => {
				this.id = data.id;
				this.name = data.name;
				this.image_url = data.image_url;
				this.map_url = "https://www.google.com/maps/embed?" + data.map_url;
				this.description = data.description;
				this.duration = data.duration;
				this.distance_km = data.distance_km;
				this.elevation_gain_m = data.elevation_gain_m;
				this.terrain = data.terrain;
				this.accessibility = data.accessibility;
			});
	}
}
