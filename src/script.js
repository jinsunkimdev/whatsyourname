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

// Texture
const textureLoader = new THREE.TextureLoader()

const colorTexture = textureLoader.load('/textures/matcaps/sky.png')
colorTexture.generateMipmaps = false
colorTexture.minFilter = THREE.NearestFilter

const shrekTexture = textureLoader.load('/textures/matcaps/shrek.png')
shrekTexture.generateMipmaps = false
shrekTexture.minFilter = THREE.NearestFilter

const artMetalTexture = textureLoader.load('/textures/matcaps/white.png')
artMetalTexture.generateMipmaps = false
artMetalTexture.minFilter = THREE.NearestFilter

const featherTexture = textureLoader.load('/textures/matcaps/magma.png')
featherTexture.generateMipmaps = false
featherTexture.minFilter = THREE.NearestFilter

const paperTexture = textureLoader.load('/textures/matcaps/paper.png')
paperTexture.generateMipmaps = false
paperTexture.minFilter = THREE.NearestFilter

const purpleTexture = textureLoader.load('/textures/matcaps/purple.png')
purpleTexture.generateMipmaps = false
purpleTexture.minFilter = THREE.NearestFilter

const bGreenTexture = textureLoader.load('/textures/matcaps/bright_green.png')
bGreenTexture.generateMipmaps = false
bGreenTexture.minFilter = THREE.NearestFilter

const blueFabricTexture = textureLoader.load('/textures/matcaps/bright_green.png')
blueFabricTexture.generateMipmaps = false
blueFabricTexture.minFilter = THREE.NearestFilter

const redblueTexture = textureLoader.load('/textures/matcaps/redblue.png')
redblueTexture.generateMipmaps = false
redblueTexture.minFilter = THREE.NearestFilter

const eggTexture = textureLoader.load('/textures/matcaps/egg.png')
eggTexture.generateMipmaps = false
eggTexture.minFilter = THREE.NearestFilter

const greenWhiteStoneTexture = textureLoader.load('/textures/matcaps/green_white_stone.png')
greenWhiteStoneTexture.generateMipmaps = false
greenWhiteStoneTexture.minFilter = THREE.NearestFilter

const peachTexture = textureLoader.load('/textures/matcaps/green_white_stone.png')
peachTexture.generateMipmaps = false
peachTexture.minFilter = THREE.NearestFilter

const knotMatcapsTexture = textureLoader.load('/textures/matcaps/balloon_pink.png')
knotMatcapsTexture.generateMipmaps = false
knotMatcapsTexture.minFilter = THREE.NearestFilter

const textureArr = [
    blueFabricTexture,
    bGreenTexture,
    purpleTexture,
    paperTexture,
    featherTexture,    
    artMetalTexture,
    colorTexture,
    eggTexture,
    redblueTexture,
    greenWhiteStoneTexture,
    peachTexture
]

// Font
const fontArr = ['/fonts/PressStart_2P_Regular.json', '/fonts/paladisescript.json', '/fonts/IndieFlower.json', '/fonts/amaticSC.json']
// Custom Method
const createTextGeometry = (inputText) =>
{
    fontLoader.load(
    fontArr[ getTextureArrayNum(0, fontArr.length) ],
    (font) =>
    {
        const textGeometry = new TextGeometry(
            inputText,
            {
                font: font,
                size: 0.4,
                height: 0.2,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            }
        )
        const textMaterial = new THREE.MeshMatcapMaterial({
            matcap: textureArr[getTextureArrayNum(0, textureArr.length)]
        })
        textGeometry.computeBoundingBox()
        textGeometry.translate(
                - (textGeometry.boundingBox.max.x - 0.02) * 0.5, // Subtract bevel size
                - (textGeometry.boundingBox.max.y - 0.02) * 0.5, // Subtract bevel size
                - (textGeometry.boundingBox.max.z - 0.03) * 0.5  // Subtract bevel thickness
        )
        const text = new THREE.Mesh(textGeometry, textMaterial)
        text.position.x = ( Math.random() - 0.5 ) * 18
        text.position.y = ( Math.random() - 0.5 ) * 18
        text.position.z = ( Math.random() - 0.5 ) * 18
        text.rotation.set(Math.PI * Math.random(), Math.PI * Math.random(), Math.PI * Math.random())
        text.scale.set(( Math.random() - 0.5 ) * 2.5, ( Math.random() - 1.5 ) * 1.5, ( Math.random() - 0.5 ) * 1.5 )
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
for(let i = 0; i < 120; i++)
{
    const knotGeometry = new THREE.TorusKnotBufferGeometry(0.5, 0.2, 44, 5)
    const knotMaterial = new THREE.MeshMatcapMaterial({ matcap: knotMatcapsTexture })
    const knot = new THREE.Mesh(knotGeometry, knotMaterial)
    knot.position.x = ( Math.random() - 0.5 ) * 18
    knot.position.y = ( Math.random() - 0.5 ) * 18
    knot.position.z = ( Math.random() - 0.5 ) * 18
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
camera.position.z = 14
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enableZoom = false
controls.enablePan = false

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