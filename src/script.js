import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
/**
 * Base
 */

// DOM elements
const canvas = document.querySelector('canvas.webgl')
const inputTag = document.querySelector('input')
const inputForm = document.querySelector('#input__form')
const inputName = document.querySelector('#input__name')
// Scene
const scene = new THREE.Scene()

// Custom Method
const createTextGeometry = (inputText) =>
{
    fontLoader.load(
    '/fonts/PressStart_2P_Regular.json',
    (font) =>
    {
        const textGeometry = new TextGeometry(
            inputText,
            {
                font: font,
                size: 0.7,
                height: 0.5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            }
        )
        const textMaterial = new THREE.MeshBasicMaterial({
            map: textureArr[getTextureArrayNum(0, textureArr.length)]
        })
        textGeometry.computeBoundingBox()
        textGeometry.translate(
                - (textGeometry.boundingBox.max.x - 0.02) * 0.5, // Subtract bevel size
                - (textGeometry.boundingBox.max.y - 0.02) * 0.5, // Subtract bevel size
                - (textGeometry.boundingBox.max.z - 0.03) * 0.5  // Subtract bevel thickness
        )
        const text = new THREE.Mesh(textGeometry, textMaterial)
        const rndNum = ( Math.random() - 0.5 ) * 10
        text.position.set(rndNum, rndNum, rndNum)
        text.rotation.set(Math.PI * rndNum, Math.PI * rndNum, Math.PI * rndNum)
        text.scale.set(( Math.random() + 0.5 ) ,( Math.random() + 0.5 )  ,( Math.random() - 0.5 ) * 1.5 )
        scene.add(text)
    }
)}

const clickInputBtn = (e) =>
{
    e.preventDefault()
    inputText = inputName.value
    inputTag.value = ''
    createTextGeometry(inputText)
}
// Texture
const textureLoader = new THREE.TextureLoader()
const colorTexture = textureLoader.load('/textures/fabric/basecolor.jpg')
colorTexture.generateMipmaps = false
colorTexture.minFilter = THREE.NearestFilter
const doorTexture = textureLoader.load('/textures/door/color.jpg')
doorTexture.generateMipmaps = false
doorTexture.minFilter = THREE.NearestFilter
const metalTexture = textureLoader.load('/textures/metal/sifiMetal.jpeg')
metalTexture.generateMipmaps = false
metalTexture.minFilter = THREE.NearestFilter
const artMetalTexture = textureLoader.load('/textures/metal/artDecoMetal.jpeg')
artMetalTexture.generateMipmaps = false
artMetalTexture.minFilter = THREE.NearestFilter
const featherTexture = textureLoader.load('/textures/fabric/feather.jpeg')
featherTexture.generateMipmaps = false
featherTexture.minFilter = THREE.NearestFilter
const textureArr = [colorTexture, doorTexture, metalTexture, artMetalTexture,featherTexture]
const getTextureArrayNum = (min, max) =>
{
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Fonts
 */
let inputText = "Welcome!"
let text
const fontLoader = new FontLoader()
createTextGeometry(inputText)

inputForm.addEventListener('submit',clickInputBtn)

/**
 * Particles
 */
for(let i = 0; i < 77; i++)
{
    const knotGeometry = new THREE.TorusKnotBufferGeometry(0.5, 0.2, 44, 5)
    const knotMaterial = new THREE.MeshNormalMaterial()
    const knot = new THREE.Mesh(knotGeometry, knotMaterial)
    knot.position.x = ( Math.random() - 0.5 ) * 10
    knot.position.y = ( Math.random() - 0.5 ) * 10
    knot.position.z = ( Math.random() - 0.5 ) * 10
    knot.rotation.x = Math.random() * Math.PI
    knot.rotation.y = Math.random() * Math.PI
    const scale = Math.random()
    knot.scale.set(scale, scale, scale)
    scene.add(knot)
}

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 6
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update Objects

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()