/** how a recipe should like in these class. I domi tou recipe component-model */
/** Gia na einai prosvasimo apo ektos tou file, to vazoume public */
export class Recipe {
	public name: string;
	public description: string;
	/** imagepath otan tha travame image apo ekso url*/
	public imagePath: string;

	/** gia na ginei to contact metaksi ton dio */
	constructor(name: string; desc:string;image:string){
		this.name = name;
		this.description = desc;
		this.image = imagePath;
	}
}