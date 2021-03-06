import * as THREE from 'three'
import Experience from "../Experience.js";

export default class Fox
{
	constructor()
	{
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources

		// Setup
		this.resources = this.resources.items.foxModel
	
		this.setModel()
	}

	setModel()
	{
		this.model = this.resources.scene
		this.model.scale.set(0.02, 0.02, 0.02)
		this.scene.add(this.model)

		this.model.traverse((child) =>
		{
			if(child instanceof THREE.Mesh)
			{
				child.castShadow = true
			}
		})
	}
}