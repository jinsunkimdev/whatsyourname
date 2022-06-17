import './style.css'
import Experience from './Experience/Experience'
import * as THREE from 'three'

const experience = new Experience(document.querySelector('canvas.webgl'))
// import './style.css'
// import * as THREE from 'three'
// import { homePageText, knotParticles, clickInputBtn } from './custom/myFunction' 
// /**
//  * Base
//  */
// // Scene
// export const scene = new THREE.Scene()
// // DOM elements
// export const canvas = document.querySelector('canvas.webgl')
// export const inputForm = document.querySelector('#input__form')
// export const inputTag = document.querySelector('input')
// export const inputName = document.querySelector('#input__name')
// export const resetViewBtn = document.querySelector('#resetViewBtn')

// /**
//  * Environment map
//  */
// // const environmentMap = CubeTextureLoader.load([

// // ])
// // scene.background = environmentMap
// /*
//  * Functions
//  */ 
// homePageText()
// knotParticles()
// inputForm.addEventListener('submit', clickInputBtn)
// resetViewBtn.addEventListener('click', () => {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })
// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// /**
//  * Camera
//  */
// // Base camera
// export const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.z = 15
// scene.add(camera)

// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true
// controls.maxDistance = 15
// controls.minDistance = 10
// controls.enablePan = false

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })

// /**
//  * Animate
//  */
// const clock = new THREE.Clock()

// const tick = () =>
// {
//     const elapsedTime = clock.getElapsedTime()

//     // Update Objects

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()