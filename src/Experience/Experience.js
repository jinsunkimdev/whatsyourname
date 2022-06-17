import * as THREE from "three"
import Sizes from "./Utils/Sizes.js"
import Time from "./Utils/Time.js"
import Camera from "./Camera.js"
import Renderer from "./Renderer.js"
import World from "./World/World.js"
import Resources from "./Utils/Resources.js"
import sources from "./sources.js"

let instance = null

// Everything Related To Experience
export default class Experience
{
	constructor(canvas)
	{
		if(instance)
		{
			return instance
		}

		instance = this

		// Global Access
		window.experience = this

		// Options
		this.canvas = canvas

		// Setup
		this.sizes = new Sizes()
		this.time = new Time()
		this.scene = new THREE.Scene()
		this.resources = new Resources(sources)
		this.camera = new Camera()
		this.renderer = new Renderer()
		this.world = new World()

		this.sizes.on('resize', () => 
		{
			this.resize()
		})

		// Time tick event
		this.time.on('tick', () => 
		{
			this.update()
		})

	} // end constructor Experience

		resize()
		{
			this.camera.resize()
			this.renderer.resize()
		}

		update()
		{
			this.camera.update()
			this.renderer.update()
		}
}