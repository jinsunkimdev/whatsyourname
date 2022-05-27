import * as THREE from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { knotMatcapsTexture, matCapsTextureArr } from '../skin/matcaps'
import { scene, inputName, inputTag } from '../script'

const fontLoader = new FontLoader()
export const fontArr = [
    process.env.FONTS_ROOT + 'PressStart_2P_Regular.json',
    process.env.FONTS_ROOT + 'paladisescript.json',
    process.env.FONTS_ROOT + 'IndieFlower.json',
    process.env.FONTS_ROOT + 'amaticSC.json'
]
const textureArr = matCapsTextureArr
// get random number min ~ max
export const getTextureArrayNum = (min, max) =>
{
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min;
}
// create random 3D text
export const createTextGeometry = (inputText) =>
{
    fontLoader.load(
    fontArr[ getTextureArrayNum(0, fontArr.length) ],
    (font) =>
    {
        const textGeometry = new TextGeometry(
            inputText,
            {
                font: font,
                size: 0.5,
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
        text.scale.set( ( Math.random() + 0.3 ) * 2, ( Math.random() + 0.2 )  * 1.5, Math.random()  * 1.5 )
        scene.add(text)
    }
)}
/**
 * 3D Text when It start
 */
export const homePageText = () =>
{
fontLoader.load(
    fontArr[ getTextureArrayNum(0, fontArr.length) ],
    (font) =>
    {
        const textGeometry = new TextGeometry(
            `WELCOME!, My Name is Jinsun Kim
            What is your name?`,
            {
                font: font,
                size: 0.7,
                height: 0.3,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.03,
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
                - (textGeometry.boundingBox.max.z - 0.02) * 0.5  // Subtract bevel thickness
        )
        textGeometry.center()
        const text = new THREE.Mesh(textGeometry, textMaterial)
        scene.add(text)
    })
}

export const clickInputBtn = (e) =>
{
    e.preventDefault()
    let inputText = inputName.value
    inputTag.value = ''
    createTextGeometry(inputText)
}

export const knotParticles = () =>
{
    for(let i = 0; i < 87; i++)
        {
            const knotGeometry = new THREE.TorusKnotBufferGeometry(0.5, 0.2, 44, 5)
            const knotMaterial = new THREE.MeshMatcapMaterial({ matcap: knotMatcapsTexture })
            const knot = new THREE.Mesh(knotGeometry, knotMaterial)
            knot.position.x = ( Math.random() - 0.5 ) * 22
            knot.position.y = ( Math.random() - 0.5 ) * 18
            knot.position.z = ( Math.random() - 0.5 ) * 18
            knot.rotation.x = Math.random() * Math.PI
            knot.rotation.y = Math.random() * Math.PI
            const scale = Math.random()
            knot.scale.set(scale, scale, scale)
            scene.add(knot)
        }
}