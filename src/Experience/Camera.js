import * as THREE from 'three'
import Experience from "./Experience";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera
{
	constructor(experience)
	{
		 this.experience = new Experience()
		 this.sizes = this.experience.sizes
		 this.scene = this.experience.scene
		 this.canvas = this.experience.canvas

		 this.setInstance()
		 this.setOrbitControls()

	}

	setInstance()
	{
		this.instance = new THREE.PerspectiveCamera(
			35,
			this,
			0.1,
			100
			)
			this.instance.position.set(6, 4, 8)
			this.scene.add(this.instance)
	}

	setOrbitControls()
	{
		this.controls = new OrbitControls(this.instance, this.canvas)
		this.controls.enableDamping = true
		this.controls.maxDistance = 15
		this.controls.minDistance = 10
		this.controls.enablePan = false
	}

	resize()
	{
		this.instance.aspect = this.sizes.width / this.sizes.height
		this.instance.updateProjectionMatrix()
	}

	update()
	{
		this.controls.update()
	}
}